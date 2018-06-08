<template>
<div class="module-header">
	<div class="inner">

		<b-img src="../assets/images/logo2.png" class="logo"></b-img>

		<menue class="menu" :items="menuItems"></menue>

	</div>
</div>
</template>

<script>
import Menue from './Menue';

export default {
	components: {
		Menue
	},
	data() {
		return {
			menuItems: [
				{ path: '/', text: 'Home' },
				{ path: '/about', text: 'About' },
				{ path: '/poems', text: 'Poems' }
			]
		};
	}
};

</script>

<style lang="scss" scoped>
@import '../style';

.module-header{

	$height: 200px;
	background: $Highlight;
	height: $height;
	position: fixed;
	z-index: 10;
	@include layout-frame-inner($Frame-Width);

	.logo{
		height: $height / 2;
		margin: auto;
        margin-top: $height / 10;
        display: block;
	}

	.menu{
		margin-top: $height/20
	}

	.inner{
		height: $height;
	}
}

</style>
