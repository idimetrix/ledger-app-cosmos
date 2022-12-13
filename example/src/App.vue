<template>
	<div id="app">
		<LedgerModal />
		<InformationModal />

		<Workflow />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { InformationModal } from '@/modals/Information';
import { LedgerModal } from '@/modals/Ledger';

import { Workflow } from '@/sections/Workflow';

@Component({
	components: {
		InformationModal,
		LedgerModal,
		Workflow,
	},
})
export default class extends Vue {
	// --- hooks

	mounted(): void {
		//
	}

	destroyed(): void {
		//
	}
}
</script>

<style lang="scss"></style>
