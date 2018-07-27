<template>
	<v-footer
		dark
		height="auto">

		<v-card
			class="flex"
			flat
			tile>

			<v-card-title class="teal">
				<strong class="subheading">Get connected with us on social networks!</strong>
				<v-spacer/>
				<v-btn
					v-for="icon in icons"
					:key="icon.name"
					class="mx-3"
					dark
					icon>
					<v-icon size="24px" v-text="icon"/>
				</v-btn>
			</v-card-title>

			<v-card-actions class="grey darken-3 justify-center">
				&copy;2018 — <strong>Vuetify</strong>
			</v-card-actions>
		</v-card>
	</v-footer>
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

.v-footer{
	background: $background;
	color: $textColour;
	height: $height;
	width: 100%;
	float: left;

	&__v-card {

	}

	&__v-spacer {

	}

	&__v-card-title {

	}

	&__v-icon {

	}

	&__v-card-actions {

	}

	&__v-btn {

	}

}

</style>
