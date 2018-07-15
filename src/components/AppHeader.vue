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

.Header{
	background: $Light-Grey;
	height: $Header-Height;
	position: fixed;
	color: $Dark-Grey;
	width: 100%;
	z-index: 10;

	&__title{
		height: $Header-Height / 2;
		color: $Dark-Grey;
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
