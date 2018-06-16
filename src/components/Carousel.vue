<template>
<div>

	<b-carousel indicators
		:style="slideConfig.style"
		:background="slideConfig.background"
		:interval="slideConfig.interval"
		:img-width="slideConfig.width"
		:img-height="slideConfig.height">

		<!-- Text slides with image -->
		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=487">
		</b-carousel-slide>

		<!-- Slides with custom text -->
		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=835">
		</b-carousel-slide>

		<!-- Slides with custom text -->
		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=420">
		</b-carousel-slide>

		<!-- Slides with custom text -->
		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=324">
		</b-carousel-slide>

		<!-- Slides with image only -->
		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=700">
		</b-carousel-slide>
	</b-carousel>

	<div class="carousel__overlay">
		<section class="carousel__caption inner">
			<h1 class="carousel__title">
				2014 winner of the Cape Farewell/Young Poets Network competition for poems exploring climate change.
			</h1>
			<span class="carousel__subtitle">
				Rachel Lewis
			</span>
		</section>
	</div>

</div>
</template>

<script>
export default {
	data() {
		return {
			slideConfig: {
				style: 'text-shadow: 1px 1px 2px #333;',
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
@import '../style';

.carousel{
	position: relative;

	&__overlay{
		@include layout-frame-inner;
		transform: translateY(-100%);
		position: absolute;
		// height: calc(((100vw - 15px) / 1024) * 480);
		height: calc(((100vw) / 1024) * 480);
		background: rgba($Dark_Gray, 0.5);
		z-index: 10;
	}

	&-indicators li{
		background: $Dark_Gray !important;

		&.active{
			background: $Light_Gray !important;
		}
	}

	&__caption{
		// width: $Frame_Width;
		font-size: 60px;
		color: $Text_Colour;
		margin-top: 150px;
	}

	&__title{
		line-height: 1.5;
		font-size: 56px;
	}

	&__subtitle{
		font-size: 32px;
	}
}

.carousel-indicators li{

}

</style>
