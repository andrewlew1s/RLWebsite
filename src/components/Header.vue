<template>
<div class="module-header">
	<div class="inner">

		<b-img thumbnail src="../assets/logo.png" class="logo"></b-img>

		<menue :items="menuItems"></menue>

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
				{ path: '/about', text: 'About' },
				{ path: '/', text: 'Home' },
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
	@include layout-frame-inner($Frame-Width);

	.logo{
		height: $height / 2;
		margin: auto;
        margin-top: $height / 7;
        display: block;
	}

	.inner{
		height: $height;
	}
}

</style>
