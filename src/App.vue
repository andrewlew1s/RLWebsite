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

.App {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: $Background-Colour;
	font-family: $Font-Family;

	&__inner {
		width:  $Frame-Width;
		margin: 0 calc((100vw - #{$Frame-Width}) / 2);
		position: relative;
		padding-top: 60px;

		&--fullHeight {
			height: 100%;
		}

		&--noPadding {
			padding: 0;
		}

		@media all and (max-width: $Frame-Width) {
			width: 90%;
			margin-left: 5%;
			margin-right: 5%;
		}
	}

	&__header {
		float: left;
	}

	&__wrapper {
		padding-top: $Header-Height;
		min-height: calc(100vh - #{$Footer-Height});
		background: $Background-Colour;
		float: left;
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
