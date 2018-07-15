<template>
	<div class="Home">

		<carousel
			v-if="slides"
			class="Home_carousel"
			:slides="slides"/>

	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Carousel from '../../components/Carousel';

export default {
	components: {
		Carousel
	},
	computed: {
		...mapGetters({
			slides: 'homeSlides'
		})
	},
	methods: {
		...mapActions({
			loadSlides: 'loadSlides'
		})
	},
	async created() {
		await this.loadSlides();
	}
};

</script>

<style lang="scss">
@import '../../settings';


.Home{
	width: 100%;

	&__carousel{
		width: 100%;
	}

}

</style>
