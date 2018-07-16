<template>
	<div class="App">

		<app-header/>

		<router-view class="App__wrapper"/>

		<app-footer/>

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
	color: $Text-Colour;
	font-family: $Font-Family;
	width: 100%;
	position: absolute;
	top: 0;

	&__inner {
		width: $Frame-Width;
		margin: auto;
		position: relative;

		@media all and (max-width: $Frame-Width) {
			width: 90%;
			margin-left: 5%;
			margin-right: 5%;
		}

	}

	&__wrapper {
		margin-top: $Header-Height;
		min-height: calc(100vh - #{$Footer-Height});
		background: $Background-Colour;
	}

	&--paddingTop {
		padding-top: 60px;
	}

	&--center {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

}

</style>
