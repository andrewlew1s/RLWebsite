<template>
	<div class="App">

		<Header/>

		<router-view class="App__wrapper"/>

		<Footer/>

	</div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
	name: 'App',
	components: {
		Header,
		Footer
	}
};
</script>

<style lang="scss">
@import './settings';

.App {
	background: $Background-Colour;
	font-family: $Font-Family;

	&__inner {
		width: 1140px;
		margin: auto;
		position: relative;

		@media all and (max-width: $Frame-Width) {
			width: 90%;
			margin-left: 5%;
			margin-right: 5%;
		}

	}

	&__wrapper {
		padding-top: $Header_Height;
		background: $Background-Colour;
	}

	&--center {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

}

</style>
