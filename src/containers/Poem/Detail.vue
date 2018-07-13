<template>
	<div class="Poem">
		<div class="App__inner">

				<h2 v-text="poem.title"/>

				<p
					v-if="poem.text"
					v-text="poem.text"/>

				<p v-if="poem.image">
					<img thumbnail :src="poem.image"/>
				</p>

				<iframe
					v-if="poem.video"
					:src="poem.video"
					width="640"
					height="360"
					frameborder="0"
					webkitallowfullscreen
					mozallowfullscreen
					allowfullscreen></iframe>

		</div>
	</div>
</template>


<script>
export default {
	props: [
		'poems'
	],
	computed: {
		poem() {
			return this.poems[this.$route.params.id];
		}
	}
};
</script>


<style lang="scss" scoped>

@import '../../style';

.Poem{
	margin-bottom: 3rem;

	img, iframe{
		@media all and (max-width: $Mobile_Width) {
			max-width: 100%;
		}
	}

}

</style>
