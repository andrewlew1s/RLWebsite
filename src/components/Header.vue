<template>
<div class="header">
	<div class="inner">

		<h1 class="header__title">Wander with Maya</h1>

		<!-- #todo: move this into the header banner -->
		<!-- <b-img src="../assets/images/wwm.svg" class="logo"></b-img> -->

		<menue class="header__menu" :auto="true"></menue>

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
	$height: 88px;
	background: $Highlight;
	border-top: 3px solid $Dark;
	height: $height;
	position: fixed;
	z-index: 10;
	@include layout-frame-inner($Frame-Width);

	&__title {
		font-size: 30px;
		display: inline-block;
	}

	&__menu{
		float: right;
		display: inline-block;
	}

	.inner{
		@include total-center;
	}
}

</style>
