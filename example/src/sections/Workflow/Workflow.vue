<template>
	<div class="section">
		<Version class="m-b-20" />
		<Ledger />
		<Version />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Ledger } from '@/components/Ledger';
import { Version } from '@/components/Version';

@Component({ components: { Ledger, Version }, name: 'Trade' })
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.section {
	display: flex;
	flex-direction: column;
}
</style>
