<template>
    <div class="Footer">
        <div class="App__inner Footer__inner">
            <p> Andrew and Mike Ltd. Corp</p>
        </div>
    </div>
</template>


<style lang="scss">
@import '../settings';

$highlight: $Highlight-Colour;

.Footer{
	$height: $Footer-Height;
	background: $highlight;

	&__inner {
		padding-top: 0.8em;
	}
}

</style>
