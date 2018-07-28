<template>
	<div class="Poems">
		<div class="App__inner App--paddingTop">

			<b-card
				class="Poems__card"
				overlay
				img-src="https://images.unsplash.com/photo-1513545581681-9217042d29b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c95f0ea2768c222f671086d5ba6640d&auto=format&fit=crop&w=1350&q=80"
				img-alt="Published"
				text-variant="white"
				title="Published">
				<app-loader/>
				Coming Soon!
			</b-card>

			<b-card
				class="Poems__card"
				overlay
				img-src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a413a0b054159dd7840130c25e6dbdf&auto=format&fit=crop&w=1350&q=80"
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
			poems: 'poem/poems'
		})
	},
	methods: {
		...mapActions({
			fetchPoems: 'poem/fetchList'
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
