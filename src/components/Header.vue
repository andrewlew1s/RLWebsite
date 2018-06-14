<template>
<div class="header">
	<div class="inner">

		<b-link to='/'>
			<h1 class="header__title">Wander with Maya</h1>
		</b-link>

		<menue class="header__menu" :auto="true"></menue>

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
				this.$el.classList.add('shadow');
			} else {
				this.$el.classList.remove('shadow');
			}
		}
	},
	mounted() {
		window.addEventListener('scroll', this.toggleShadow);
	}
};

</script>

<style lang="scss" scoped>
@import '../style';

.header{
	$height: $Header_Height;
	border-top: 3px solid $Dark;
	transition: box-shadow 350ms;
	background: $Highlight;
	height: $height;
	position: fixed;
	z-index: 10;
	@include layout-frame-inner($Frame-Width);

	&.shadow{
		box-shadow: 0 2px 5px -2px $Dark;
	}

	&__title {
		font-size: 30px;
		display: inline-block;
		text-decoration: none;
		color: $Text_Colour;
	}

	&__menu{
		float: right;
		display: inline-block;
	}

	.inner{
		@include total-center;
	}
}

</style>
