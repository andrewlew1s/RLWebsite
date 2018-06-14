<template>
<div class="home-banner">

	<div class="home-banner__inner">
		<b-img src="../../../assets/images/wwm.svg" class="home-banner__logo"></b-img>
	</div>

</div>
</template>

<script>
export default {
	props: [
		'img'
	],
	watch: {
		img() {
			this.$el.style.backgroundImage = `url(${this.img})`;
		}
	}
};

</script>

<style lang="scss" scoped>
@import '../../../style';

.home-banner {
	@include layout-frame-inner;
	background-size: cover;
	background-position: center;
	height: 350px;

	&__inner {
		float: left;
		@include total-center;
	}

	&__logo {
		width: 333px;
		float: left;
		transform: rotate(33deg);
	}
}
</style>
