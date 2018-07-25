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
		class="Carousel__detailBar">
		Hey!

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
			}
		};
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

		&__detailBar {
			width: 100%;
			background: $detailBarBackground;
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
			}

		}

	}
}
</style>
