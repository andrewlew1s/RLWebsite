<template>
	<div class="module-home">

		<b-row class="inner">
			<b-col>
				<p>
					At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
					voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
					cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum
					et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
					nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
					assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
					saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
					a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
					repellat
				</p>
			</b-col>
			<b-col>
				<h1>
					<!-- eslint-disable max-len -->
					"Claudia is the most inspirational person in the whole world. She has provided many with profound wisdoms"
					<!-- eslint-enable max-len -->
				</h1>
			</b-col>
		</b-row>

		<b-row class="inner">
			<b-col>
				<p>
					<!-- eslint-disable max-len -->
					Nulla egestas non dolor at imperdiet. Praesent quis lorem vel lorem volutpat suscipit. Sed blandit augue non eros malesuada dignissim. Integer imperdiet neque nisi, a euismod eros fringilla a. Donec malesuada porttitor purus, vel finibus justo feugiat sit amet. Ut at lobortis purus, a tempor tellus. Donec maximus vestibulum pharetra.
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
