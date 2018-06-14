<template>
	<div class="post-list">

	</div>
</template>


<script>
export default {
	props: [
		'posts'
	],
	methods: {
		goTopost(postId) {
			this.$router.push({ name: 'post.detail', params: { id: postId } });
		}
	}
};
</script>


<style lang="scss" scoped>

@import '../../style';

.post-list{
	@include layout-frame-inner;
}

</style>
