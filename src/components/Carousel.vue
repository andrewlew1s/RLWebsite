<template>
<div class="Carousel">

	<b-carousel
		:class="{
			'Carousel__carousel--fullScreen': fullScreen
		}"
		indicators
		controls
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

				<b-carousel-slide
					:img-src="slide.imageSrc"
					:caption="slide.title"
					:text="slide.caption"/>

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
			<b-button class="Carousel__detailBar__button">
				Read more
			</b-button>
			<p class="Carousel__detailBar__excerpt">
				Lorem Blah Blahs
			</p>
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
		},
		currentSlideId: null
	},
	data() {
		return {
			slideConfig: {
				background: '#ababab',
				interval: 10000,
				width: 1080,
				height: 1920
			},
			detailBarStyle: null
		};
	},
	methods: {
		setImageHeight() {
			const imageHeight = this.$el.getElementsByClassName('carousel-inner')[0].offsetHeight;
			this.detailBarStyle = `top: ${imageHeight}px;`;
			if (this.fullScreen) {
				this.detailBarStyle += ` height: calc(100vh - ${imageHeight}px)`;
			}
		},
		initialiseDetailBar() {
			window.addEventListener('resize', () => {
				this.setImageHeight();
			});
			this.setImageHeight();
		}
	},
	mounted() {
		if (this.showDetailBar) this.initialiseDetailBar();

	}
};
</script>

<style lang="scss">
@import '../settings';

$headerHeight: $Header-Height;
$backgroundColour: $Background-Colour;
$detailBarBackground: $Theme-Colour;
$mobileBreak: $Mobile-Width;

.Carousel {

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
		background: $detailBarBackground;
		height: 100%;
		position: absolute;
		top: 0;

		&__content {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

}
</style>
