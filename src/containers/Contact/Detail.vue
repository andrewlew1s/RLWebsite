<template>
	<div class="post-detail">

	</div>
</template>


<script>
export default {
	props: [
		'posts'
	],
	computed: {
		post() {
			return this.posts[this.$route.params.id] || {};
		}
	}
};
</script>


<style lang="scss" scoped>

@import '../../style';

.post-detail{
	@include layout-frame-inner;

	img, iframe{
		@media all and (max-width: $Mobile_Width) {
			max-width: 100%;
		}
	}

}

</style>
