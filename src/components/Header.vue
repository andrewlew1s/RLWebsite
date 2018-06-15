<template>
<div class="module-header">

	<div class="inner">

		<b-img src="../assets/images/logo2.png" class="logo"></b-img>

		<menue class="menu" :auto="true"></menue>

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

<style lang="scss" scoped>
@import '../style';

.module-header{

	$height: 200px;
	background: $Highlight;
	height: $height;
	position: relative;
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
