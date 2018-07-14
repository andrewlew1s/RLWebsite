<template>
	<div class="Poems">
		<div class="App__inner">
			<b-list-group>

				<b-list-group-item
					v-for="poem in poems"
					:key="poem.id">

						<b-link
							@click="goToPoem(poem.id)"
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
			poems: 'poems'
		})
	},
	methods: {
		...mapActions({
			loadPoems: 'loadPoems'
		}),
		goToPoem(poemId) {
			this.$router.push({ name: 'poem.detail', params: { id: poemId } });
		}
	},
	created() {
		this.loadPoems();
	}
};
</script>


<style lang="scss" scoped>

@import '../../settings';

.Poems{
}

</style>
