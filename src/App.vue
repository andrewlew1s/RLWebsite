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
$mobileWidth: $Mobile-Width;
$textColour: $Text-Colour;
$backgroundColour: $Background-Colour;
$fontFamily: $Font-Family;
$highlightColour: $Highlight-Colour;
$shadowColour: $Shadow-Colour;

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


.PreviewList {
	height: 350px;
	width: 100%;
	background: $highlightColour;

	&__overlay {
		width: 100%;
		height: 100%;
		background: $shadowColour;
		opacity: 0.1;
		transition: opacity 0.2s ease-in;
		z-index: 1;
		position: relative;

		&:hover {
			opacity: 0.9;
		}

	}

	&__third {
		height: 100%;
		width: 33.33%;
		background-size: cover;
		background-position: center;
		float: left;
		position: relative;

		&--published {
			background-image: url('/static/images/published.jpg');
		}

		&--performed {
			background-image: url('/static/images/performed.jpg');
		}

		@media all and (max-width: $mobileWidth) {
			width: 100%;
		}

	}

	&__text {
		color: $highlightColour;
	}

	&__title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 2rem;
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
		width: 90%;
	}

	&__caption {
		width: 80%;
		margin: 0 10%;
		text-align: center;
		position: absolute;
		bottom: 10%;
	}

}


</style>
