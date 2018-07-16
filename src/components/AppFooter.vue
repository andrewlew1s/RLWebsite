<template>
    <div class="Footer">
        <div class="App__inner Footer__inner">
            <span> Andrew and Mike Ltd. Corp</span>
        </div>
    </div>
</template>


<style lang="scss">
@import '../settings';

$height: $Footer-Height;
$background: $Theme-Colour;
$textColour: $Highlight-Colour;

.Footer{
	background: $background;
	color: $textColour;
	height: $height;

	&__inner {
		padding-top: 0.5em;
	}
}

</style>
