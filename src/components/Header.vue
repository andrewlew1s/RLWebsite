<template>
<div class="Header">
	<div class="App__inner Header__inner">

		<h1 class="Header__title App--center">
			Rachel Lewis
		</h1>

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
	background: $Light_Gray;
	height: $Header_Height;
	position: fixed;
	color: $Dark_Gray;
	width: 100%;
	z-index: 10;

	&__title{
		height: $Header_Height / 2;
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
