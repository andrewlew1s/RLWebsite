<template>
	<div class="App">

		<app-header class="App__header"/>

		<router-view class="App__wrapper"/>

		<app-footer class="App__footer"/>

	</div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

export default {
	name: 'App',
	components: {
		AppHeader,
		AppFooter
	}
};
</script>

<style lang="scss">
@import './settings';

$footerHeight: $Footer-Height;
$headerHeight: $Header-Height;
$frameWidth: $Frame-Width;
$textColour: $Text-Colour;
$backgroundColour: $Background-Colour;
$fontFamily: $Font-Family;

$footerPadding: 60px;

.App {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: $backgroundColour;
	font-family: $fontFamily;
	color: $textColour;

	&__inner {
		width:  $frameWidth;
		margin: 0 calc((100vw - #{$frameWidth}) / 2);
		position: relative;
		padding-top: 60px;
		float: left;

		&--fullHeight {
			height: 100%;
		}

		&--noPadding {
			padding: 0;
		}

		@media all and (max-width: $frameWidth) {
			width: 90%;
			margin-left: 5%;
			margin-right: 5%;
		}
	}

	&__header {
		float: left;
	}

	&__wrapper {
		min-height: calc(100vh - #{$footerHeight});
		background: $backgroundColour;
		float: left;
		width: 100%;
		padding-top: $headerHeight;
		padding-bottom: $footerPadding;
	}

	&__footer {
		float: left;
	}

	&--center {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

}


</style>
