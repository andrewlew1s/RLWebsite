<template>
<div class="Carousel">

	<carousel :perPage="1">
		<slide
			class="Carousel__slide"
			v-for="slide in slides"
			:key="slide.link">
			<b-link
				:to="slide.link">
				<section
					class="Carousel__image"
					:style="getImgStyle(slide)">

					<div class="Carousel__overlay">

						<div class="App__inner Carousel__text">

							<h1 v-text="slide.title"/>

							<p v-text="slide.text"/>

						</div>

					</div>

				</section>
			</b-link>
		</slide>
	</carousel>

</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
	components: {
		Carousel,
		Slide
	},
	props: {
		slides: {
			type: Array,
			required: true
		}
	},
	methods: {
		getImgStyle(slide) {
			return `background-image: url(${slide.imageSrc});`;
		}
	}
};
</script>

<style lang="scss">
@import '../settings';

$headerHeight: $Header-Height;
$indicatorColour: $Theme-Colour;
$activeColour: $Highlight-Colour;
$shadowColour: $Brown-Dark;
$textColour: $Highlight-Colour;

$overlayOpacity: 0.37;

.Carousel {
	position: relative;

	.VueCarousel-pagination {
		position: absolute;
		bottom: 5%;
	}
	.VueCarousel-dot {
		button {
			background: $indicatorColour !important;
		}
		&.VueCarousel-dot--active {
			button {
				background: $activeColour !important;
			}
		}
	}
	a {
		text-decoration: none !important;
	}

	&__slide {
		height: calc(100vh - #{$headerHeight});
	}

	&__image {
		width: 100%;
		height: 100%;
		display: block;
		background-size: cover;
		background-position: center;
	}

	&__overlay {
		width: 100%;
		height: 100%;
		background: rgba($shadowColour, $overlayOpacity);
	}

	&__text {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		color: $textColour;
	}

}
</style>
