<template>
<div class="header">
	<div class="inner">

		<b-link to='/'>
			<h1 class="header__title">Wander with Maya</h1>
		</b-link>

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
	$height: $Header_Height;
	border-top: 3px solid $Dark;
	background: $Highlight;
	height: $height;
	position: fixed;
	z-index: 10;
	@include layout-frame-inner($Frame-Width);

	&__title {
		font-size: 30px;
		display: inline-block;
		text-decoration: none;
		color: $Text_Colour;
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
