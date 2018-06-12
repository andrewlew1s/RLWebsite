<template>
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
				@sliding-end="onSlideEnd">

		<!-- Text slides with image -->
		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=487">
				<b-link to="poems/0">
					<h2>Tigerless</h2>
				</b-link>
				<p>When I lie in the grasses, And practise the stillness of death</p></b-link>
		</b-carousel-slide>

		<!-- Slides with custom text -->
		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=835">
			<b-link to="poems/1">
				<h2>The Decision</h2>
			</b-link>
			<p>She holds the knife over red flesh</p>
		</b-carousel-slide>

		<!-- Slides with custom text -->
		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=420">
			<b-link to="poems/2">
				<h2>Ilium</h2>
			</b-link>
			<p>Old words sound beautiful Because we don’t know what they mean</p></b-link>
		</b-carousel-slide>

		<!-- Slides with custom text -->
		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=324">
			<b-link to="poems/3">
				<h2>It</h2>
			</b-link>
			<p>A visual experience</p>
		</b-carousel-slide>

		<!-- Slides with image only -->
		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=700">
			<b-link to="poems/4">
				<h2>Twenty Tourists</h2>
			</b-link>
			<p>Below shifting boughs, every wave drowned out</p>
		</b-carousel-slide>
	</b-carousel>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import '../style';

.carousel{
	* {
		color: white;
		text-decoration: none;
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	h2{
		font-size: 32px;

		@media all and (max-width: $Mobile_Width){
			font-size: 24px;
		}

	}

	p{
		font-size: 22px;

		@media all and (max-width: $Mobile_Width){
			font-size: 14px;
			margin-bottom: 0;
		}

	}

	// https://codepen.io/colloque/pen/bDgmx
	a{
		:hover{
			-webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
			-webkit-mask-size: 200%;
			animation: shine 2s infinite;

			@keyframes shine {
				from {
					-webkit-mask-position: 150%;
				}
				to {
					-webkit-mask-position: -50%;
				}
			}
		}
	}
}
</style>

<style lang="scss">
@import '../style';

.carousel-indicators{
	@media all and (max-width: $Mobile_Width){
		bottom: -7px;
	}
}

.carousel-caption{
	@media all and (max-width: $Mobile_Width){
		padding-top: 8px;
		padding-bottom: 4px;
	}
}
</style>
