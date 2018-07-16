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
	},
	methods: {
		toggleShadow() {
			// if page is scrolled
			if (window.scrollY !== 0) {
				this.$el.classList.add('Header--shadow');
			} else {
				this.$el.classList.remove('Header--shadow');
			}
		}
	},
	mounted() {
		window.addEventListener('scroll', this.toggleShadow);
	}
};

</script>

<style lang="scss">
@import '../settings';

$headerHeight: $Header-Height;
$background: $Theme-Colour;
$shadow: $Brown-Dark;
$textColour: $Highlight-Colour;

.Header{
	background: $background;
	height: $headerHeight;
	position: fixed;
	color: $textColour;
	width: 100%;
	z-index: 10;
	transition: box-shadow 350ms ease-in-out;

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

	&--shadow {
		box-shadow: 0 4px 15px -4px $shadow;
	}

}

</style>
