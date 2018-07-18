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
		:img-height="slideConfig.height">

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
		}
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
$mobileBreak: $Mobile-Width;

.Carousel {

	&__carousel {

		.carousel-caption {

			@media all and (max-width: $mobileBreak){
				p {
					float: left;
					height: 90%;
					overflow: hidden;
				}
			}
		}

		&--fullScreen {
			height: calc(100vh - #{$headerHeight});

			.img-fluid.w-100 {
				height: calc(100vh - #{$headerHeight});	// this makes actual slide image flush with bottom of screen
				width: auto !important;
				min-width: 100% !important;
				overflow: hidden;

			}

			@media all and (max-width: $mobileBreak) {
				top: 0;
				height: 90%;
				float: left;
			}

		}

	}
}
</style>
