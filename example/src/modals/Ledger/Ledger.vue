<template>
	<modal :adaptive="true" height="auto" name="ledger" @before-close="beforeClose" @before-open="beforeOpen">
		<div v-loading="loading" class="ledger">
			<img src="../../images/ledger.jpg" />

			<label>Ledger Nano S/X</label>

			<p>also with Android device</p>

			<a href="https://www.ledger.com" target="_blank">Support us by buying one</a>

			<Alert v-if="error" type="error" v-html="error.message || error" />
			<Alert type="info">
				Note: <a href="https://support.ledger.com/hc/en-us/articles/360006395553-Download-and-install-Ledger-Live" target="_blank">Connect and unlock</a> your
				Ledger device
			</Alert>

			<Button @click.native="connect">
				Unlock with
				<svgicon class="m-l-5" name="ledger" />
			</Button>

			<Button @click.native="connect"> Connect with WebUSB </Button>

			<Button v-if="Ledgerer.transport && Ledgerer.transport.deviceModel" type="danger" @click.native="disconnect">
				Disconnect {{ Ledgerer.transport.deviceModel.productName }}
			</Button>
		</div>
	</modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Alert } from '@/components/Alert';
import { Button } from '@/components/Button';

import { Ledgerer } from '../../../../src';

@Component({ components: { Alert, Button }, name: 'Ledger' })
export default class extends Vue {
	// --- data

	public loading: boolean = false;
	public error: any = null;
	public done: any = null;

	public Ledgerer: typeof Ledgerer = Ledgerer;

	// --- methods

	// --- methods

	public async beforeOpen({ params = {} }: { params: any }): Promise<void> {
		try {
			this.loading = true;

			await Ledgerer.connect();

			this.loading = false;

			this.done = params?.done;
		} catch {
			//
		}
	}

	public async beforeClose(): Promise<void> {
		//
	}

	public async connect(): Promise<void> {
		this.error = null;

		this.loading = true;

		if (await Ledgerer.connect(true)) {
			this.$modal.hide('ledger');

			this?.done?.(true);
		} else {
			this.error = 'No device selected';
		}

		this.loading = false;
	}

	public async disconnect(): Promise<void> {
		this.error = null;

		this.loading = true;

		await Ledgerer.disconnect();

		this?.done?.(false);

		this.loading = false;
	}
}
</script>

<style lang="scss" scoped>
.ledger {
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-items: center;
	position: relative;

	> img {
		margin: 0 0 20px;
		width: 130px;
	}

	> label {
		font-size: 20px;
	}

	> p {
		font-size: 12px;
		padding: 20px 0;
	}

	> a {
		text-decoration: underline;
	}

	> .alert {
		display: block;
		margin: 20px 0 0;
		text-align: center;
		word-break: break-word;

		::v-deep a {
			font-weight: bold;
		}
	}

	> .button {
		margin: 20px 0 0;
	}
}
</style>
