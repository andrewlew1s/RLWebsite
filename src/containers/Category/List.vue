<template>
	<div class="poem-list">
		<div class="inner">
			<b-list-group>

				<b-list-group-item v-for="poem in poems" v-bind:key="poem.id">
						<b-link @click="goToPoem(poem.id)"> {{ poem.title }} </b-link>
				</b-list-group-item>

			</b-list-group>
		</div>
	</div>
</template>


<script>
export default {
	props: [
		'poems'
	],
	methods: {
		goToPoem(poemId) {
			this.$router.push({ name: 'poem.detail', params: { id: poemId } });
		}
	}
};
</script>


<style lang="scss" scoped>

@import '../../style';

.poem-list{
	@include layout-frame-inner;
}

</style>
