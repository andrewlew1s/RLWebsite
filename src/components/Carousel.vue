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
		};
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
$backgroundColour: $Background-Colour;
$detailBarBackgroundColour: $Highlight-Colour;
$detailBarTextCololur: $Theme-Colour;
$indicatorColour: $Theme-Colour;
$mobileBreak: $Mobile-Width;
$shadowColour: $Brown-Dark;
$textColour: $Highlight-Colour;

$overlayOpacity: 0.37;

.Carousel {
	position: relative;

	.VueCarousel-pagination {
		position: absolute;
		bottom: 5%;
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
