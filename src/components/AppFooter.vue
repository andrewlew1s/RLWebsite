<template>
	<section class="Footer">
		<div class="App__inner Footer__inner">

			<b-link
				class="Footer__link"
				href="https://github.com/holistic-web/"
				target="_blank">
				A Holistic project.
			</b-link>

			<div class="Footer__icons">
				<b-link
					class="Footer__icon"
					href="https://twitter.com/Rachel_Claire_L"
					target="_blank"
					title="Follow on Twitter!">
					<b-img src="/static/images/tweet.JPG"/>
				</b-link>

				<b-link
					class="Footer__icon Footer__icon--facebook"
					href="https://www.facebook.com/profile.php?id=1186786120"
					target="_blank"
					title="View Facebook!">
					<b-img src="/static/icons/facebook.svg"/>
				</b-link>
			</div>

		</div>
	</section>
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
		padding-top: 1.5em;
	}

	&__row {
		width: 100%;
		display: block;
		margin-bottom: 16px;
	}

	&__icons {
		float: right;
	}

	&__icon {
		margin: 0 8px;
		float: left;

		> img {
			width: 24px;
		}

		&:last-of-type {
			margin-right: 0;
		}

		&--facebook {
			background: white;

			> img {
				width: 26px;
			}

		}

	}

	&__link {
		color: $textColour;

		&:hover {
			color: $textColour;
			text-decoration: none;
		}

	}
}

</style>
