<template>
	<div class="poem-detail">
		<div class="inner">

			<div v-bind:key="poem.title" class="mb-3">
				<h2>{{poem.title}}</h2>
				<div v-if="poem.text" v-html="poem.text"></div>
				<p v-if="poem.image">
					<img thumbnail :src="poem.image"/>
				</p>
				<iframe v-if="poem.video" :src="poem.video" width="640" height="360" frameborder="0"
					webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				<br>
				<br>
			</div>

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
			return this.poems[this.$route.params.id] || {};
		}
	}
};
</script>


<style lang="scss" scoped>

@import '../../style';

.poem-detail{
	@include layout-frame-inner;

	img, iframe{
		@media all and (max-width: $Mobile_Width) {
			max-width: 100%;
		}
	}

}

</style>
