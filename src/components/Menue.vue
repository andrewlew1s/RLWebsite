<template>
<div class="module-menu">
	<b-link :to="item.path" exact v-for="item in menuItems" v-bind:key="item.path">
		{{ item.name }}
	</b-link>
</div>
</template>

<script>
/* Component to render a styled menu.

	Properties:
		- Items: An array of menu item obejcts
		- must have the property `menu` with value `true`
		{ path: '/butts', name:'Click me', menu: true }

 */

import routes from '../router/routes';

export default {

	props: [
		'items'
	],
	data() {
		return {
			routes
		};
	},
	computed: {
		menuItems() {
			return this.routes.filter(route => route.menu);
		}
	}
};

</script>

<style lang="scss" scoped>
@import '../style';

.module-menu{

		text-align: center;
		border-top: 1px solid $Grey;
		border-bottom: 1px solid $Grey;

		a{
			font-size: 20px;
			border-bottom: 1px solid $Grey;
			color: $Text_Colour;
			padding-bottom: 0.2em;
			margin: 10px 20px;
			display: inline-block;
			text-decoration: none;
			transition: 50ms;
		}

		.active, :hover{
			border-bottom: 2px solid $Text_Colour;
		}

		:active{
			position: relative;
			top: 2px;
		}
	}
</style>
