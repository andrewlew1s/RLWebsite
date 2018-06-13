<template>
	<div class="post-list">
		<div class="inner">
			<b-list-group>

				<b-list-group-item v-for="post in posts" v-bind:key="post.id">
						<b-link @click="goTopost(post.id)"> {{ post.title }} </b-link>
				</b-list-group-item>

			</b-list-group>
		</div>
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
