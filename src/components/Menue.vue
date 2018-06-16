<template>
<div class="menue">
	<b-link :to="item.path" exact v-for="item in menuItems" v-bind:key="item.path">
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

.menue{

		a{
			font-size: 16px;
			border-bottom: 1px solid $Highlight;
			padding-bottom: 0.2em;
			color: $Dark_Gray;
			margin: 0 20px;
			display: inline-block;
			text-decoration: none;
			transition: 50ms;

			@media all and (max-width: $Mobile_Width){
				font-size: 12px;
				margin: 5px 8px;
			}
		}

		.active, :hover{
			border-bottom: 2px solid $Highlight;
		}

		:active{
			position: relative;
			top: 2px;
		}
	}
</style>
