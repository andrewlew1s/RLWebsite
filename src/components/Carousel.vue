<template>
<div class="Carousel">

	<b-carousel
		:class="{
			'Carousel__carousel--fullScreen': fullScreen
		}"
		indicators
		:style="slideConfig.style"
		:background="slideConfig.background"
		:interval="slideConfig.interval"
		:img-width="slideConfig.width"
		:img-height="slideConfig.height"
		v-model="currentSlideId">

		<b-link
			:to="slide.link"
			v-for="slide in slides"
			:key="slide.link">

				<b-carousel-slide :img-src="slide.imageSrc"/>

		</b-link>

	</b-carousel>

	<section
		v-if="showDetailBar"
		class="Carousel__detailBar"
		:class="{
			'Carousel__detailBar--fullScreen': fullScreen
		}"
		:style="detailBarStyle">

		<div class="Carousel__detailBar__content App__inner">
			<b-button
				class="Carousel__detailBar__buton"
				variant="outline-primary"
				:href="detailBarLink"
				v-text="detailBarTitle"/>
			<p
				class="Carousel__detailBar__excerpt"
				v-text="detailBarText"/>
		</div>

	</section>

</div>
</template>

<script>
export default {
	props: {
		slides: {
			type: Array,
			required: true
		},
		text: {
			type: String
		},
		fullScreen: {
			type: Boolean
		},
		showDetailBar: {
			type: Boolean
		}
	},
	data() {
		return {
			imageHeight: null,
			detailBarStyle: null,
			detailBarTitle: null,
			detailBarText: null,
			detailBarLink: '/poems/0',
			currentSlideId: 0
		};
	},
	watch: {
		currentSlideId() {
			this.initialiseDetailBar();
		}
	},
	computed: {
		slideConfig() {
			return {
				background: '#ababab',
				interval: 10000,
				height: this.imageHeight
			};
		}
	},
	methods: {
		async setImageHeight() {
			await this.$nextTick();
			this.imageHeight = this.$el.getElementsByClassName('carousel-inner')[0].offsetHeight;
			this.detailBarStyle = `top: ${this.imageHeight}px;`;
			if (this.fullScreen) {
				this.detailBarStyle += ` height: calc(100vh - ${this.imageHeight}px)`;
			}
		},
		async initialiseDetailBar() {
			await setTimeout(null, 2000);	// timeout while waiting for carousel to load
			await this.$nextTick();
			window.addEventListener('resize', () => {
				this.setImageHeight();
			});
			this.setImageHeight();
			if (!this.slides) return;
			if (!this.slides[this.currentSlideId]) return;
			const currentSlide = this.slides[this.currentSlideId];
			this.detailBarLink = currentSlide.link;
			this.detailBarTitle = currentSlide.title;
			this.detailBarText = currentSlide.caption;
		}
	},
	async mounted() {
		await this.$nextTick();
		this.setImageHeight();
		if (this.showDetailBar) this.initialiseDetailBar();
	}
};
</script>

<style lang="scss">
@import '../settings';

$headerHeight: $Header-Height;
$backgroundColour: $Background-Colour;
$detailBarBackgroundColour: $Highlight-Colour;
$detailBarTextCololur: $Theme-Colour;
$indicatorColour: $Theme-Colour;
$mobileBreak: $Mobile-Width;

.Carousel {
	overflow: hidden;

	&__carousel {

		.carousel-caption {

			@media all and (max-width: $mobileBreak){
				top: 0;
				height: 90%;
				float: left;
			}

			p {
				float: left;
				height: 90%;
				overflow: hidden;
			}
		}

		.carousel-indicators {
			li {
				background: $indicatorColour;
				opacity: 0.5;

				&.active {
					opacity: 1;
				}
			}
		}

		&--fullScreen {
			height: calc(100vh - #{$headerHeight});
			background: linear-gradient(to bottom right, $backgroundColour, white) !important;

			@media all and (max-width: $mobileBreak) {
				top: 0;
				height: 90%;
				float: left;
			}

			.carousel-caption {
				overflow: scroll;

				p {
					overflow: scroll
				}
			}

			.img-fluid.w-100 {
				max-width: 100%;
				max-height: 100%;
				overflow: hidden;
				z-index: 2;
			}

		}

	}

	&__detailBar {
		width: 100%;
		background: $detailBarBackgroundColour;
		height: 100%;
		position: absolute;
		top: 0;

		&__content {
			margin-top: 1rem;
		}

		&__excerpt {
			float: right;
			color: $detailBarTextCololur;
		}

		&__title {
			color: $detailBarTextCololur;
			float: left;
		}

	}

}
</style>
