<template>
	<div class="Landing">

		<poem-carousel class="Landing__carousel"/>

		<section class="App__inner">
			<preview-published/>
		</section>

		<section class="App__inner">
			<preview-performed/>
		</section>

	</div>
</template>

<script>
import { mapActions } from 'vuex';
import PoemCarousel from './components/PoemCarousel';
import PreviewPublished from '../../components/PreviewPublished';
import PreviewPerformed from '../../components/PreviewPerformed';

export default {
	components: {
		PoemCarousel,
		PreviewPublished,
		PreviewPerformed

	},
	methods: {
		...mapActions({
			fetch: 'post/fetchList'
		})
	},
	created() {
		this.fetch();
	}
};

</script>

<style lang="scss">
@import '../../settings';


.Landing{

	&__carousel{
		width: 100%;
		float: left;
	}

	&__card {
		width: 100%;
		height: 350px;
		overflow: hidden;
	}

}

</style>
