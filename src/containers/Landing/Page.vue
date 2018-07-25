<template>
	<div class="Home">

		<poem-carousel class="Home__carousel"/>

	</div>
</template>

<script>
import PoemCarousel from './components/PoemCarousel';

export default {
	components: {
		PoemCarousel
	}


};

</script>

<style lang="scss">
@import '../../settings';


.Home{
	width: 100%;

	&__carousel{
		width: 100%;
		float: left;
	}

}

</style>
