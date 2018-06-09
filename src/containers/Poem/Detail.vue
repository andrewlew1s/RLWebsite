<template>
	<div class="poem-detail">
		<div class="inner">

			<div v-bind:key="poem.title" class="mb-3">
				<h2>{{poem.title}}</h2>
				<p v-if="poem.text">
					{{poem.text}}
				</p>
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
import poems from '../../assets/poems';

export default {
	data() {
		return {
			poem: {},	// initialise poem as an empty object
			poems
		};
	},
	mounted() {
		this.poem = poems[this.$route.params.id];
	}
};
</script>


<style lang="scss" scoped>

@import '../../style';

.poem-detail{
	@include layout-frame-inner;
}

</style>
