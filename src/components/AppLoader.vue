<template>

	<div class="Spinner"/>

</template>

<style lang="scss">

.Spinner {
	border: 16px solid #f3f3f3; /* Light grey */
	border-top: 16px solid #3498db; /* Blue */
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
