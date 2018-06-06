<template>
<div class="module-menu">
	<b-link :to="item.path" exact v-for="item in items" v-bind:key="item.path">
		{{ item.text }}
	</b-link>
</div>
</template>

<script>
/* Component to render a styled menu.

	Properties:
		- Items: An array of menu item obejcts ~
		{ path: '/butts', text:'Click me' }

 */

export default {
	props: [
		'items'
	]
};

</script>

<style lang="scss" scoped>
@import '../style';

.module-menu{

        text-align: center;

		a{
			font-size: 20px;
			border-bottom: 1px solid $Grey;
			color: $Text_Colour;
			padding-bottom: 0.5em;
			margin: auto 20px;
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
