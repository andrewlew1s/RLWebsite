<template>

	<!-- Inspired by: https://www.w3schools.com/howto/howto_css_loader.asp -->

	<div class="Spinner"/>

</template>

<style lang="scss">
@import '../settings';

$background: $Theme-Colour;
$highlight: $Highlight-Colour;

.Spinner {
	border: 16px solid $background; /* Light grey */
	border-top: 16px solid $highlight; /* Blue */
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: Spinner--spin 2s linear infinite;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

@keyframes Spinner--spin {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}

</style>
