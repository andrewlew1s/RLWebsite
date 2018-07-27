<template>
	<div class="Footer">
		<div class="App__inner Footer__inner">
			<span> Andrew and Mike Ltd. Corp</span>
			<section class="Footer__icons">
				<font-awesome-icon icon="bong" />
			</section>
		</div>s
	</div>
</template>

<script>
export default {
	data() {
		return {
			icons: [
				{
					name: 'myIcon'
				}
			]
		};
	}
};
</script>


<style lang="scss">
@import '../settings';

$height: $Footer-Height;
$background: $Theme-Colour;
$textColour: $Highlight-Colour;

.Footer{
	background: $background;
	color: $textColour;
	height: $height;
	width: 100%;
	float: left;

	&__inner {
		padding-top: 0.5em;
	}

	&__icons {
		float: right;
	}
}

</style>
