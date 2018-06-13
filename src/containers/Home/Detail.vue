const twentyTouristsImage = require('./images/20Tourists.png');

<template>
	<div class="home">

		<home-banner img="http://via.placeholder.com/350x150"></home-banner>

	</div>
</template>

<script>
import HomeBanner from '../../components/HomeBanner';

export default {
	components: {
		HomeBanner
	}
};

</script>

<style lang="scss" scoped>
@import '../../style';


.home{
	@include layout-frame-inner;

	.spacer{
		height: 400px;
		float: left;
		width: 100%;

	}
}
</style>
