const twentyTouristsImage = require('./images/20Tourists.png');

<template>
	<div class="home">
		<carousel class="home__carousel"></carousel>

	</div>
</template>

<script>
import Carousel from '../../components/Carousel';

export default {
	components: {
		Carousel
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
