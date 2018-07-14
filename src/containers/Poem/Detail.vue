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
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters({
			poems: 'poems'
		}),
		poem() {
			return this.poems[this.$route.params.id];
		}
	},
	methods: {
		...mapActions({
			loadPoems: 'loadPoems'
		})
	},
	created() {
		// #Todo: look at improving loading so we don't load all poems to load a specific poem's page
		this.loadPoems();
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
