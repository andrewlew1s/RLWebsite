const twentyTouristsImage = require('./images/20Tourists.png');

<template>
	<div class="module-about">
		<div class="inner">

			<carousel></carousel>

		</div>
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
