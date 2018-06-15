<template>
	<div class="module-home">

		<b-row class="inner">
			<b-col>
				<h3>
					"Claudia Chandra is one of the most influential and up and coming gamers out there.""
				</h3>
			</b-col>
			<b-col>
				<p>
					<!-- eslint-disable max-len -->
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					<!-- eslint-enable max-len -->
				</p>
			</b-col>
		</b-row>

		<b-row class="inner">
			<b-col>
				<p>
					<!-- eslint-disable max-len -->
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
					<!-- eslint-enable max-len -->
				</p>
			</b-col>
			<b-col>
				<b-img thumbnail src="../../assets/images/cat1.png"></b-img>
			</b-col>
		</b-row>

	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../style';

.module-home{
	@include layout-frame-inner;

	.row{
		position: relative;

		img{
			width: auto;
			@include total-center;
		}
		h3{
			@include total-center;
		}
	}

}

</style>
