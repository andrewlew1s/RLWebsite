<template>
<div class="header">
	<div class="inner">

		<h1 class="header__title">
			Rachel Lewis
		</h1>

		<menue class="header__menue" :auto="true"></menue>

	</div>
</div>
</template>

<script>
import Menue from './Menue';

export default {
	components: {
		Menue
	}
};

</script>

<style lang="scss" scoped>
@import '../style';

.header{
	background: $Light_Gray;
	height: $Header_Height;
	position: fixed;
	color: $Dark_Gray;
	z-index: 10;
	@include layout-frame-inner($Frame-Width);

	&__title{
		height: $Header_Height / 2;
		margin: auto;
		display: block;
		float: left;
		display: inline-block;
		@include vertical-center;
	}

	&__menue{
		display: inline-block;
		@include vertical-center;
		float: right;
		margin-top: 9px;
	}

	.inner{
		height: $Header_Height;
	}
}

</style>
