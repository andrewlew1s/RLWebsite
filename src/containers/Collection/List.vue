<template>
	<div class="Collection">
		<div class="App__inner App__inner--padded">

			<div class="Collection__col">
				<b-card
					class="Collection__card"
					overlay
					img-src="/static/images/published.jpg"
					img-alt="Published"
					text-variant="white"
					title="Published">
				</b-card>
			</div>
			<div class="Collection__col">
				<b-card
					class="Collection__card"
					overlay
					img-src="/static/images/performed.jpg"
					img-alt="Perfomed"
					text-variant="white"
					title="Perfomed">
				</b-card>
			</div>

			<h3>
				All Poems:
			</h3>

			<!-- <b-link
				:to="post.link"
				v-for="(post, i) in formattedPoems"
				:key="post._id">
				<section
					class="PreviewList__third Collection__thumb"
					:style="post.thumbnailImage"
					:class="{
							'Collection__thumb--first': (i%4==0),
							'Collection__thumb--last': (i%4==3)
						}">

					<div class="PreviewList__overlay">
						<div class="PreviewList__text">
							<h4 class="PreviewList__title Collection__title">
								{{post.title}}
							</h4>
							<p class="PreviewList__caption">
								{{post.caption}}
							</p>
						</div>
					</div>

					<h4 class="PreviewList__title PreviewList__text">
						{{post.title}}
					</h4>

				</section>
			</b-link> -->

			<preview
				v-for="poem in poems"
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
	computed: {
		...mapGetters({
			poems: 'post/poems'
		})
	},
	methods: {
		...mapActions({
			fetch: 'post/fetchList'
		}),
		getImgStyle(post) {
			return `background-image: url(${post.thumbnailImage});`;
		}
	},
	created() {
		this.fetch();
	}
};
</script>


<style lang="scss" scoped>

@import '../../settings';

$mobileWidth: $Mobile-Width;

.Collection{

	&__card {
		height: 350px;
		margin-bottom: 60px;
		overflow: hidden;
		position: relative;
	}

	&__col {
		float: left;
		width: 50%;

		@media all and (max-width: $mobileWidth) {
			width: 100%;
			flex: none;
		}
	}

	&__thumb {
		height: 200px;
		width: 23.5%;
		margin: 0 1% 40px 1%;
		float: left;

		&--first{
			margin-left: 0;
		}

		&--last{
			margin-right: 0;
		}

		@media all and (max-width: $mobileWidth) {
			width: 100%;
			margin-left: 0;
			margin-right: 0;
		}

	}

	&__title {
		font-size: 24px;
	}
}

</style>
