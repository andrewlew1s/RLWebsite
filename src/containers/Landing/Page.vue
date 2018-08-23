<template>
	<div class="Landing">

		<poem-carousel class="Landing__carousel"/>

		<section class="App__inner">
			<preview-list mode="published"/>
		</section>

		<section class="App__inner">
			<preview-list mode="performed"/>
		</section>

	</div>
</template>

<script>
import { mapActions } from 'vuex';
import PoemCarousel from './components/PoemCarousel';
import PreviewList from '../../components/PreviewList';

export default {
	components: {
		PoemCarousel,
		PreviewList
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
