<template>
	<div class="Landing">

		<MLTrue class="Landing__ML" />

	</div>
</template>

<script>
import { mapActions } from 'vuex';
import MLTrue from '../../components/MLTrue';

export default {
	components: {
		MLTrue

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
