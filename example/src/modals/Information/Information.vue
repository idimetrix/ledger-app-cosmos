<template>
	<modal :adaptive="true" class="information" height="auto" name="information">
		<div>Information</div>
	</modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'Information' })
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.information {
	//
}
</style>
