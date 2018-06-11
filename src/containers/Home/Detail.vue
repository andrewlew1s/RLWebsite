const twentyTouristsImage = require('./images/20Tourists.png');

<template>
	<div class="module-about">
		<div class="inner">
				<div>
					<b-carousel id="carousel1"
								style="text-shadow: 1px 1px 2px #333;"
								controls
								indicators
								background="#ababab"
								:interval="10000"
								img-width="1024"
								img-height="480"
								v-model="slide"
								@sliding-start="onSlideStart"
								@sliding-end="onSlideEnd"
					>

					<!-- Text slides with image -->
					<b-carousel-slide caption="Tigerless"
										text="'When I lie in the grasses, And practise the stillness of death'"
										img-src="https://picsum.photos/1024/480/?image=487"
					></b-carousel-slide>

					<!-- Slides with custom text -->
					<b-carousel-slide caption="The Decision"
										text="'She holds the knife over red flesh'"
										img-src="https://picsum.photos/1024/480/?image=835">
					</b-carousel-slide>

					<!-- Slides with image only -->
					<b-carousel-slide caption="20 Tourists"
										text="'Below shifting boughs, every wave drowned out'"
										img-src="https://picsum.photos/1024/480/?image=700">
					</b-carousel-slide>
					</b-carousel>

					<!-- <p class="mt-4">
					Slide #: {{ slide }}<br>
					Sliding: {{ sliding }}
					</p> -->

			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../style';

.module-about{

$height: 300px;
background: $Highlight;
@include layout-frame-inner();

	.rachel{
        height: $height / 2;
		margin: auto;
        margin-top: $height / 10;
        display: block;
  }

}

</style>
