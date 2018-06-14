<template>
<div class="module-menu">
	<b-link :to="item.path" :exact="(item.path!='')" v-for="item in menuItems" :key="item.path">
		{{ item.name }}
	</b-link>
</div>
</template>

<script>
/* Component to render a styled menu.

	Properties:
		- Items: An array of menu item obejcts:
		{ path: '/butts', name:'Click me' }

		- Auto: if set to true will automatically display
		from the routes.js file with the property `menu`
		set to `true`.

 */

import routes from '../router/routes';

export default {
	props: [
		'auto',
		'items'
	],
	data() {
		return {
			routes
		};
	},
	computed: {
		menuItems() {
			if (this.auto) {
				return this.routes.filter(route => route.menu);
			}
			return this.items;
		}
	}
};

</script>

<style lang="scss" scoped>
@import '../style';

.module-menu{
		text-align: center;

		a{
			font-size: 16px;
			font-family: $Title_Font_Family;
			color: $Text_Colour;
			padding-bottom: 0.2em;
			margin: 10px 20px;
			display: inline-block;
			text-decoration: none;
			transition: 50ms;
			box-sizing: border-box;

			@media all and (max-width: $Mobile_Width){
				font-size: 12px;
				margin: 5px 8px;
			}
		}

		.active, :hover{
			margin-bottom: -2px;	// to balance the added space
			border-bottom: 2px solid $Text_Colour;
		}

		:active{
			position: relative;
			top: 2px;
		}
	}
</style>
