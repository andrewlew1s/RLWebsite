<template>

	<!-- Inspired by: https://www.w3schools.com/howto/howto_css_loader.asp -->

	<div class="Spinner"/>

</template>

<style lang="scss">
@import '../settings';

$background: $Theme-Colour;
$highlight: $Highlight-Colour;

$size: 120px;
$width: 8px;

.Spinner {
	border: $width solid $background; /* Light grey */
	border-top: $width solid $highlight; /* Blue */
	border-radius: 50%;
	width: $size;
	height: $size;
	animation: Spinner--spin 2s linear infinite;
	position: absolute;
	top: calc(50% - (#{$size} / 2));
	left: calc(50% - (#{$size} / 2));
}

@keyframes Spinner--spin {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}

</style>
