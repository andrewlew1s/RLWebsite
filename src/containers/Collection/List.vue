<template>
	<div class="Collection">
		<div class="App__inner App__inner--padded">

			<!-- #Todo:
				- ensure filters are stored in url
				- send homepage links to this page with filters applied
			-->

			<section class="Collection__header">
				<h2 class="Collection__title">Collection</h2>
				<b-form-checkbox-group
					class="Collection__filter"
					button-variant="outline-primary"
					size="lg"
					v-model="activeFilters"
					:options="options"
					buttons
					@change="onFilterChange"/>
			</section>


			<preview
				v-for="poem in poemsFiltered"
				:key="poem._id"
				:poem="poem"/>

		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Preview from './components/Preview';

export default {
	components: {
		Preview
	},
	data() {
		return {
			options: [
				{ value: 'published', text: 'Published' },
				{ value: 'performed', text: 'Performed' }
			],
			activeFilters: [
				'published',
				'performed'
			]
		};
	},
	computed: {
		...mapGetters({
			poems: 'post/poems'
		}),
		poemsFiltered() {
			const filtered = this.poems.filter(p => {
				let match = false;
				this.activeFilters.forEach(f => {
					if (p[f]) match = true;
				});
				return match;
			});
			return filtered;
		}
	},
	methods: {
		...mapActions({
			fetch: 'post/fetchList'
		}),
		getImgStyle(post) {
			return `background-image: url(${post.thumbnailImage});`;
		},
		async onFilterChange() {
			await this.$nextTick();
			const showPublished = this.activeFilters.includes('published');
			const showPerformed = this.activeFilters.includes('performed');
			if (!showPublished || !showPerformed) {
				this.$router.replace({
					name: 'collection.list',
					query: {
						showPublished,
						showPerformed
					}
				});
			} else {
				this.$router.replace({ name: 'collection.list' });
			}
		},
		applyRouteFilters() {
			const query = this.$route.query;
			if (query.showPublished === 'false') {
				this.activeFilters = this.activeFilters.splice(this.activeFilters.indexOf('published'), 1);
			}
			if (query.showPerformed === 'false') {
				this.activeFilters = this.activeFilters.splice(this.activeFilters.indexOf('performed'), 1);
			}
		}
	},
	watch: {
		$route() {
			this.applyRouteFilters();
		}
	},
	mounted() {
		this.fetch();
		this.applyRouteFilters();
	}
};
</script>


<style lang="scss">

@import '../../settings';

$mobileWidth: $Mobile-Width;

.Collection{

	&__header {
		width: 100%;
		float: left;
		margin-bottom: 1rem;
	}

	&__title {
		float: left;
	}

	&__filter {
		float: right;
		clear: right;
	}
}

</style>
