<template>
	<div class="Footer">
		<div class="App__inner Footer__inner">
			<b-col>

				<b-link href="https://twitter.com/Rachel_Claire_L">
					<b-img
						class="Footer__icon"
						src="/static/images/tweet.JPG"/>
				</b-link>

				<b-link href="https://www.facebook.com/profile.php?id=1186786120">
					<b-img
						class="Footer__icon Footer__icon--facebook"
						src="/static/icons/facebook.svg"/>
				</b-link>

		</b-col>
			<span> This website is a product of Holistic Web Studios</span>
		</div>
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

	&__icon {
		width: 24px;
		margin: 0 8px;

		&--facebook {
			background: white;
		}
	}
}

</style>
