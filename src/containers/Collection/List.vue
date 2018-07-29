<template>
	<div class="Poems">
		<div class="App__inner App--paddingTop">

			<b-card
				class="Poems__card"
				overlay
				img-src="/static/images/published.jpg"
				img-alt="Published"
				text-variant="white"
				title="Published">
				<app-loader/>
				Coming Soon!
			</b-card>

			<b-card
				class="Poems__card"
				overlay
				img-src="/static/images/performed.jpg"
				img-alt="Perfomed"
				text-variant="white"
				title="Perfomed">
				<app-loader/>
				Coming Soon!
			</b-card>

			<b-list-group>

				<b-list-group-item
					v-for="poem in poems"
					:key="poem.id">

						<b-link
							@click="goToPoem(poem._id)"
							v-text="poem.title"/>

				</b-list-group-item>

			</b-list-group>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters({
			poems: 'posts/poems'
		})
	},
	methods: {
		...mapActions({
			fetch: 'posts/fetchPosts'
		}),
		goToPoem(poemId) {
			this.$router.push({ name: 'poem.detail', params: { id: poemId } });
		}
	},
	created() {
		this.fetchPoems();
	}
};
</script>


<style lang="scss" scoped>

@import '../../settings';

.Poems{

	&__card {
		height: 350px;
		margin-bottom: 60px;
		overflow: hidden;
	}
}

</style>
