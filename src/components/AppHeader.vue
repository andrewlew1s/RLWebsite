<template>
<div class="Header">
	<div class="App__inner Header__inner">

		<b-link to="/">
			<h1 class="Header__title App--center">
				Rachel Lewis
			</h1>
		</b-link>

		<menue
			class="Header__menue App--center"
			:auto="true"/>

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

<style lang="scss">
@import '../settings';

$headerHeight: $Header-Height;
$background: $Theme-Colour;
$textColour: $Highlight-Colour;

.Header{
	background: $background;
	height: $headerHeight;
	position: fixed;
	color: $textColour;
	width: 100%;
	z-index: 10;

	&__title{
		height: $headerHeight / 2;
		color: $textColour;
		margin: auto;
		display: block;
		display: inline-block;
		left: 0;
	}

	&__menue{
		display: inline-block;
		right: 0;
		margin-top: 9px;
	}

	&__inner{
		height: 100%;
	}

}

</style>
