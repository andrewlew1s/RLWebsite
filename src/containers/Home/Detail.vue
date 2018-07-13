const twentyTouristsImage = require('./images/20Tourists.png');

<template>
	<div class="Home">

		<carousel
			class="Home_carousel"
			:slides="slides"/>

	</div>
</template>

<script>
import Carousel from '../../components/Carousel';

export default {
	components: {
		Carousel
	},
	data() {
		return {
			slides: [
				{
					imageSrc: 'https://picsum.photos/1024/480/?image=487',
					link: '/poems',
					title: 'Some Title',
					text: 'some text'
				}
			]
		};
	}
};

</script>

<style lang="scss">
@import '../../settings';


.Home{
	width: 100%;
	background: $Highlight;

	&__carousel{
		width: 100%;
	}

}

</style>
