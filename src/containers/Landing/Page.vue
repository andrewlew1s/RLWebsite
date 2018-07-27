<template>
	<div class="Landing">

		<poem-carousel class="Landing__carousel"/>

		<section class="App__inner">
			<b-card
				class="Landing__card"
				overlay
				img-src="https://images.unsplash.com/photo-1513545581681-9217042d29b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c95f0ea2768c222f671086d5ba6640d&auto=format&fit=crop&w=1350&q=80"
				img-alt="Published"
				text-variant="white"
				title="Published">
				<app-loader/>
				Coming Soon!
			</b-card>
		</section>

		<section class="App__inner">
			<b-card
				class="Landing__card"
				overlay
				img-src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a413a0b054159dd7840130c25e6dbdf&auto=format&fit=crop&w=1350&q=80"
				img-alt="Perfomed"
				text-variant="white"
				title="Perfomed">
				<app-loader/>
				Coming Soon!
			</b-card>
		</section>

	</div>
</template>

<script>
import PoemCarousel from './components/PoemCarousel';

export default {
	components: {
		PoemCarousel
	}
};

</script>

<style lang="scss">
@import '../../settings';


.Landing{

	&__carousel{
		width: 100%;
		float: left;
	}

	&__card {
		width: 100%;
		height: 350px;
		overflow: hidden;
	}

}

</style>
