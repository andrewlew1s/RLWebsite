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

		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=487"/>

		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=835"/>

		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=420"/>

		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=324"/>

		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=700"/>

	</b-carousel>

</div>
</template>

<script>
export default {
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
