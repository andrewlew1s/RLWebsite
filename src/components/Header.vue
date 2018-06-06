<template>
<div class="module-header">
	<div class="inner">

		<b-img thumbnail src="../assets/logo.png" class="logo"></b-img>

		<menue :items="menuItems"></menue>

	</div>

</div>
</template>

<script>
import Menue from './Menue';

export default {
	components: {
		Menue
	},
	data() {
		return {
			menuItems: [
				{ path: '/', text: 'Home' },
				{ path: '/about', text: 'About' },
				{ path: '/bigPenis', text: 'HUGECOCK' }
			]
		};
	}
};

</script>

<style lang="scss" scoped>
@import '../style';

.module-header{

	$height: 200px;
	background: $Highlight;
	height: $height;
	position: fixed;
	@include layout-frame-inner($Frame-Width);

	.logo{
		height: $height / 2;
		margin: auto;
		margin-top: $height / 7;
	}

	.inner{
		height: $height;
	}

	.menu{

		font-size: 20px;
		position: absolute !important;
		bottom: $height / 20;
		@include horizontal-center;

		a{
			border-bottom: 1px solid $Grey;
			color: $Text_Colour;
			padding-bottom: 0.5em;
			margin: auto 20px;
			display: inline-block;
			text-decoration: none;
		}

		.active, :hover{
			border-bottom: 2px solid $Text_Colour;
		}

		:active{
			position: relative;
			top: 2px;
		}
	}
}

</style>
