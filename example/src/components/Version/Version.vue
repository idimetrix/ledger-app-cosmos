<template>
	<a class="version" :class="type"> v{{ version }} </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import pckg from '../../../../package.json';

@Component({ name: 'Version' })
export default class extends Vue {
	// --- props

	@Prop({ default: '', type: String }) public readonly type!: string;

	public version: string = pckg.version;
}
</script>

<style lang="scss" scoped>
.version {
	align-items: center;
	display: inline-flex;
	font-weight: bold;
	justify-content: flex-end;
}
</style>
