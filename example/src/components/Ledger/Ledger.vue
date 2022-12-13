<template>
	<div v-loading="loading" class="ledger">
		<Pair>
			<div slot="prefix" class="w-100"></div>
			<Card title="Information">
				<ul>
					<li class="f-s-18">1. Connect with Ledger Nano S / X</li>
					<li class="f-s-18">2. Unlock your Ledger device.</li>
					<li class="f-s-18">3. We support version 1.5.4 and higher</li>
				</ul>
			</Card>
		</Pair>

		<Pair>
			<Button type="success" slot="prefix" @click.native="unlockAction"> Unlock with <svgicon name="ledger" /> </Button>
			<Card title="Device">
				<JsonPretty :data="Ledgerer.transport && Ledgerer.transport.deviceModel ? Ledgerer.transport.deviceModel : null" />
			</Card>
		</Pair>

		<Pair>
			<Button slot="prefix" :disabled="Ledgerer.transport" type="info" @click.native="connectAction">
				CONNECT
				<div class="f-s-12 m-t-5">Connect Ledger using Web USB</div>
			</Button>
		</Pair>

		<Pair>
			<Button slot="prefix" :disabled="!Ledgerer.transport" type="info" @click.native="reconnectAction">
				RECONNECT
				<div class="f-s-12 m-t-5">Reconnect Ledger using Web USB</div>
			</Button>
		</Pair>

		<Pair>
			<Button slot="prefix" :disabled="!Ledgerer.transport" type="info" @click.native="disconnectAction">
				DISCONNECT
				<div class="f-s-12 m-t-5">Disconnect Ledger from Web USB</div>
			</Button>
		</Pair>

		<Pair>
			<Button slot="prefix" :disabled="!Ledgerer.transport" @click.native="deviceInformationAction">
				Device Information

				<div class="f-s-12 m-t-5 text-center">Available <span class="weight-bold">ONLY</span> in Ledger <span class="weight-bold">DASHBOARD</span></div>
			</Button>
			<div class="w-100">
				<Card title="Device Information">
					<JsonPretty :data="deviceInformation" />
				</Card>
				<div class="f-s-12 m-t-5">Available <span class="weight-bold">ONLY</span> in Ledger <span class="weight-bold">DASHBOARD</span></div>
			</div>
		</Pair>

		<Pair>
			<Button slot="prefix" :disabled="!Ledgerer.transport" @click.native="cosmosVersionAction">
				Application Version

				<div class="f-s-12 m-t-5 text-center">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application
				</div>
			</Button>
			<div class="w-100">
				<Card title="Action 1">
					<JsonPretty :data="cosmosVersion" />
				</Card>
				<div class="f-s-12 m-t-5">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application
				</div>
			</div>
		</Pair>

		<Pair>
			<Button slot="prefix" :disabled="!Ledgerer.transport" @click.native="applicationInformationAction">
				Application Information

				<div class="f-s-12 m-t-5 text-center">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application and <span class="weight-bold">DASHBOARD</span>
				</div>
			</Button>
			<div class="w-100">
				<Card title="Application Information">
					<JsonPretty :data="applicationInformation" />
				</Card>
				<div class="f-s-12 m-t-5">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application and <span class="weight-bold">DASHBOARD</span>
				</div>
			</div>
		</Pair>

		<Pair>
			<Button slot="prefix" :disabled="!Ledgerer.transport" @click.native="getAddressAndPublicKeyAction">
				Get Address And PublicKey

				<div class="f-s-12 m-t-5 text-center">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application
				</div>
			</Button>
			<div class="w-100">
				<Card title="Get Address And PublicKey">
					<JsonPretty :data="getAddressAndPublicKey" />
				</Card>
				<div class="f-s-12 m-t-5">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application
				</div>
			</div>
		</Pair>

		<Pair>
			<Button slot="prefix" :disabled="!Ledgerer.transport" @click.native="showAddressAndPublicKeyAction">
				Show Address And PublicKey

				<div class="f-s-12 m-t-5 text-center">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application
				</div>
			</Button>
			<div class="w-100">
				<Card title="Show Address And PublicKey">
					<JsonPretty :data="showAddressAndPublicKey" />
				</Card>
				<div class="f-s-12 m-t-5">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application
				</div>
			</div>
		</Pair>

		<Pair>
			<Button slot="prefix" :disabled="!Ledgerer.transport" @click.native="publicKeyAction">
				PublicKey
				<div class="f-s-12 m-t-5 text-center">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application
				</div>
			</Button>
			<div class="w-100">
				<Card title="PublicKey">
					<JsonPretty :data="publicKey" />
				</Card>
				<div class="f-s-12 m-t-5">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application
				</div>
			</div>
		</Pair>

		<Pair>
			<Button slot="prefix" :disabled="!Ledgerer.transport" @click.native="signObjectAction">
				Sign Object
				<div class="f-s-12 m-t-5 text-center">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application
				</div>
			</Button>
			<div class="w-100">
				<Card title="Sign">
					<JsonPretty :data="signObject" />
				</Card>
				<div class="f-s-12 m-t-5">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application
				</div>
			</div>
		</Pair>

		<Pair>
			<Button slot="prefix" :disabled="!Ledgerer.transport" @click.native="signArrayAction">
				Sign Array
				<div class="f-s-12 m-t-5 text-center">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application
				</div>
			</Button>
			<div class="w-100">
				<Card title="Sign">
					<JsonPretty :data="signArray" />
				</Card>
				<div class="f-s-12 m-t-5">
					Available <span class="weight-bold">ONLY</span> in Ledger
					<a class="weight-bold decoration-underline" href="https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?docs=true" target="_blank">
						COSMOS
					</a>
					application
				</div>
			</div>
		</Pair>

		<Pair>
			<Button slot="prefix" href="https://www.npmjs.com/package/ledger-app-cosmos" target="_blank" type="danger">Documentation</Button>
		</Pair>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Pair } from '@/components/Pair';

import JsonPretty from '@/plugins/JsonPretty';

import log from '@/log';

import { APK, ApplicationInformation, DeviceInformation, Ledgerer, PK, Signature, Version } from '../../../../src';

@Component({ components: { Button, Card, JsonPretty, Pair }, name: 'Ledger' })
export default class extends Vue {
	// --- props

	@Prop({ default: '', type: String }) public readonly data!: string;

	// --- data

	public loading: boolean = false;

	public Ledgerer: typeof Ledgerer = Ledgerer;

	public path: number[] = [44, 118, 0, 0, 0];

	public cosmosVersion: Version = null;
	public deviceInformation: DeviceInformation = null;
	public applicationInformation: ApplicationInformation = null;
	public getAddressAndPublicKey: APK = null;
	public showAddressAndPublicKey: APK = null;
	public publicKey: PK = null;
	public signObject: Signature = null;
	public signArray: Signature = null;

	// --- methods

	public unlockAction(): void {
		this.$ga.event({
			eventAction: 'unlockAction',
			eventCategory: 'ledger',
		});

		this.$modal.show('ledger', {
			done: async (status: boolean): Promise<void> => {
				log.log('ledger modal', { status });
			},
		});
	}

	public async connectAction(): Promise<void> {
		this.$ga.event({
			eventAction: 'connectAction',
			eventCategory: 'ledger',
		});

		this.loading = true;

		await Ledgerer.connect();

		this.loading = false;
	}

	public async reconnectAction(): Promise<void> {
		this.$ga.event({
			eventAction: 'reconnectAction',
			eventCategory: 'ledger',
		});

		this.loading = true;

		await Ledgerer.reconnect();

		this.loading = false;
	}

	public async disconnectAction(): Promise<void> {
		this.$ga.event({
			eventAction: 'disconnectAction',
			eventCategory: 'ledger',
		});

		this.loading = true;

		await Ledgerer.disconnect();

		this.loading = false;
	}

	public async cosmosVersionAction(): Promise<void> {
		this.$ga.event({
			eventAction: 'cosmosVersionAction',
			eventCategory: 'ledger',
		});

		this.cosmosVersion = await Ledgerer.getVersion();
	}

	public async deviceInformationAction(): Promise<void> {
		this.$ga.event({
			eventAction: 'deviceInformationAction',
			eventCategory: 'ledger',
		});

		this.deviceInformation = await Ledgerer.getDeviceInformation();
	}

	public async applicationInformationAction(): Promise<void> {
		this.$ga.event({
			eventAction: 'applicationInformationAction',
			eventCategory: 'ledger',
		});

		this.applicationInformation = await Ledgerer.getApplicationInformation();
	}

	public async getAddressAndPublicKeyAction(): Promise<void> {
		this.$ga.event({
			eventAction: 'getAddressAndPublicKeyAction',
			eventCategory: 'ledger',
		});

		this.getAddressAndPublicKey = await Ledgerer.getAddressAndPublicKey(this.path, 'wallet');
	}

	public async showAddressAndPublicKeyAction(): Promise<void> {
		this.$ga.event({
			eventAction: 'showAddressAndPublicKeyAction',
			eventCategory: 'ledger',
		});

		this.showAddressAndPublicKey = await Ledgerer.showAddressAndPubKey(this.path, 'wallet');
	}

	public async publicKeyAction(): Promise<void> {
		this.$ga.event({
			eventAction: 'publicKeyAction',
			eventCategory: 'ledger',
		});

		this.publicKey = await Ledgerer.getPublicKey(this.path);
	}

	public async signObjectAction(): Promise<void> {
		this.$ga.event({
			eventAction: 'signObjectAction',
			eventCategory: 'ledger',
		});

		/**
		 * Required: account_number, chain_id, fee, memo, msgs, sequence
		 *
		 * https://github.com/cosmos/ledger-cosmos/blob/master/docs/TXSPEC.md
		 */
		const data: any = {
			a: 1,
			account_number: 123,
			b: '2',
			c: true,
			chain_id: 123,
			fee: 123,
			memo: '',
			msgs: [...Array(100)].map((value: number, index: number): string => `${index}`).join(' '),
			number: 123,
			sequence: 123,
			x: {
				y: {
					z: ['xyz'],
				},
			},
		};

		this.signObject = await Ledgerer.sign(this.path, data);
	}

	public async signArrayAction(): Promise<void> {
		this.$ga.event({
			eventAction: 'signArrayAction',
			eventCategory: 'ledger',
		});

		const data: Uint8Array = new Uint8Array([
			10, 211, 1, 10, 208, 1, 10, 37, 47, 99, 111, 115, 109, 111, 115, 46, 103, 111, 118, 46, 118, 49, 98, 101, 116, 97, 49, 46, 77, 115, 103, 83, 117, 98, 109,
			105, 116, 80, 114, 111, 112, 111, 115, 97, 108, 18, 166, 1, 10, 87, 10, 46, 47, 99, 111, 115, 109, 111, 115, 46, 112, 97, 114, 97, 109, 115, 46, 118, 49,
			98, 101, 116, 97, 49, 46, 80, 97, 114, 97, 109, 101, 116, 101, 114, 67, 104, 97, 110, 103, 101, 80, 114, 111, 112, 111, 115, 97, 108, 18, 37, 10, 1, 97,
			18, 1, 98, 26, 29, 10, 7, 115, 116, 97, 107, 105, 110, 103, 18, 13, 77, 97, 120, 86, 97, 108, 105, 100, 97, 116, 111, 114, 115, 26, 3, 49, 48, 49, 18, 28,
			10, 3, 120, 102, 105, 18, 21, 49, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 26, 45, 119, 97, 108, 108, 101, 116, 49,
			121, 107, 100, 50, 54, 99, 99, 118, 120, 106, 55, 117, 106, 101, 55, 110, 118, 54, 119, 99, 114, 54, 101, 54, 114, 117, 51, 104, 121, 117, 110, 113, 104,
			119, 118, 51, 51, 107, 18, 111, 10, 78, 10, 70, 10, 31, 47, 99, 111, 115, 109, 111, 115, 46, 99, 114, 121, 112, 116, 111, 46, 115, 101, 99, 112, 50, 53,
			54, 107, 49, 46, 80, 117, 98, 75, 101, 121, 18, 35, 10, 33, 2, 110, 49, 64, 30, 240, 95, 28, 130, 78, 195, 227, 49, 245, 87, 12, 224, 229, 14, 121, 28,
			230, 245, 151, 159, 94, 144, 93, 225, 38, 46, 113, 122, 18, 4, 10, 2, 8, 1, 18, 29, 10, 23, 10, 3, 120, 102, 105, 18, 16, 49, 48, 48, 48, 48, 48, 48, 48,
			48, 48, 48, 48, 48, 48, 48, 48, 16, 224, 220, 42, 26, 13, 100, 110, 45, 116, 101, 115, 116, 110, 101, 116, 45, 118, 51, 32, 23,
		]);

		this.signArray = await Ledgerer.sign(this.path, data);
	}

	// --- hooks

	public async mounted(): Promise<void> {
		try {
			Ledgerer.on(Ledgerer.EVENTS.CONNECTED, (): void => {
				this.cosmosVersion = null;
				this.deviceInformation = null;
				this.applicationInformation = null;
				this.getAddressAndPublicKey = null;
				this.showAddressAndPublicKey = null;
				this.publicKey = null;
				this.signObject = null;
				this.signArray = null;
			});

			await Ledgerer.connect();

			this.$ga.event({
				eventAction: 'device',
				eventCategory: 'ledger',
				eventLabel: (Ledgerer.transport as any)?.deviceModel?.productName,
			});
		} catch {
			//
		}
	}

	public async destroyed(): Promise<void> {
		try {
			await Ledgerer.disconnect();
		} catch {
			//
		}
	}
}
</script>

<style lang="scss" scoped>
.ledger {
	position: relative;

	.pair {
		margin-bottom: 20px;

		@include under-break($break--sm - 1) {
			flex-direction: column;

			::v-deep > div {
				margin-bottom: 20px;
				width: 100% !important;
			}
		}

		&:last-child {
			margin-bottom: 0;
		}

		> ::v-deep .prefix {
			width: 300px;

			> .button {
				width: 100%;
			}
		}

		> ::v-deep .content {
			padding: 0 0 0 40px;
			word-break: break-word;

			@include under-break($break--sm - 1) {
				padding: 0;
			}
		}
	}
}
</style>
