<template>
<div class="Carousel">

	<b-carousel
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
					:text="slide.text"/>

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
		}
	},
	data() {
		return {
			slideConfig: {
				background: '#ababab',
				interval: 10000,
				width: 1024,
				height: 480
			}
		};
	}
};
</script>

<style lang="scss">
@import '../settings';

.Carousel{

}
</style>
