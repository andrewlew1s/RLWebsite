const twentyTouristsImage = require('./images/20Tourists.png');

<template>
	<div class="home">

		<carousel
			class="home_carousel"
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
					imageSrc: 'someString',
					link: '/somePage',
					title: 'Some Title',
					text: 'some text'
				}
			]
		};
	}
};

</script>

<style lang="scss" scoped>
@import '../../style';


.home{
	background: $Highlight;
	@include layout-frame-inner;

	&__carousel{
		@include layout-fullwidth;
	}

}

.carousel{


}
</style>
