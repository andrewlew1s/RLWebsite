<template>
	<b-link
		:to="route">
		<section class="CollectionPreview">
			<div
				class="CollectionPreview__image"
				:style="imageStyle"/>
			<h5
				class="CollectionPreview__title"
				v-text="poem.title"/>
			<p
				class="CollectionPreview__caption"
				v-text="poem.caption"/>
		</section>
	</b-link>
</template>

<script>
export default {
	props: {
		poem: {
			type: Object,
			required: true
		}
	},
	computed: {
		route() {
			return {
				name: 'collection.detail',
				params: {
					id: this.poem._id
				}
			};
		},
		imageStyle() {
			return `background-image: url('${this.poem.thumbnailImage}');`;
		}
	}
};
</script>

<style lang="scss">
@import '../../../settings';

$themeColour: $Theme-Colour;
$highlightColour: $Highlight-Colour;
$textColour: $Text-Colour;


.CollectionPreview {
	width: 33.333%;
	height: 320px;
	float: left;
	padding: 2rem;
	cursor: pointer;
	color: $textColour !important;
	transition: 200ms ease-out;

	&:hover {
		background: $themeColour;
		color: $highlightColour !important;
	}

	&__image {
		width: 100%;
		height: 125px;
		background-size: cover;
		background-position: center;
		margin-bottom: 0.5rem;
	}

	&__title {
		text-align: center;
		margin-bottom: 0.3rem;
	}

}

</style>
