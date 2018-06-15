<template>
<div class="module-carousel">
	<div class="inner">
		<b-carousel controls
			:style="slideConfig.style"
			:background="slideConfig.background"
			:interval="slideConfig.interval"
			:img-width="slideConfig.width"
			:img-height="slideConfig.height">

			<!-- Text slides with image -->
			<b-carousel-slide img-src="../assets/images/CMC1.png" class="pic1">
			</b-carousel-slide>

			<!-- Slides with custom text -->
			<b-carousel-slide img-src="../assets/images/CMC2.png">
			</b-carousel-slide>
		</b-carousel>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			slideConfig: {
				style: 'text-shadow: 1px 1px 2px #333;',
				interval: 5000,
				width: 1024,
				height: 480
			}
		};
	}
};
</script>

<style lang="scss" scoped>
@import '../style';

.module-carousel{
	@include layout-frame-inner();
	*{
		margin-top: 10px;
	}
}
</style>

<style lang="scss">
@import '../style';
</style>
