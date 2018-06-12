<template>
	<div class="module-home">

		<b-row class="inner">
			<b-col>
				<h3>
					Rachel Lewis is a 2014 winner of the Cape Farewell/Young Poets Network competition for poems exploring climate change.
				</h3>
			</b-col>
			<b-col>
				<p>
					<!-- eslint-disable max-len -->
					Rachel joined PPL as an Analyst in October 2017 after completing a business management graduate scheme with Cambridge University Press.
					During the scheme, she worked on an internal consultancy basis on a range of change projects in a not-for-profit context. Her projects were
					aimed at making better use of data, overcoming organisational siloes and improving legacy processes, with a particular focus on developing
					person-centred approaches and putting users and customers at the heart of business decisions. Her work included acting as programme manager
					for a company-wide change to encourage better customer focus and co-created solutions. She also worked on launching a revised governance
					process for the multi-million pound technology portfolio, and on creating data analyses to inform process improvements in the technology,
					<!-- eslint-enable max-len -->
				</p>
			</b-col>
		</b-row>

		<b-row class="inner">
			<b-col>
				<p>
					<!-- eslint-disable max-len -->
					Her interest in the public sector, the health service and the third sector was sparked by voluntary
					work in a community health centre as part of national citizenship service whilst still at school. She has since volunteered for educational
					charities in the UK and Nepal and also spent a year as editor-in-chief of a health and development publication at the University of
					Cambridge, editing and writing academic articles on health, sustainability and international development. Rachel holds a BA in English
					Literature from the University of Cambridge, where she was a Peterhouse scholar.
					<!-- eslint-enable max-len -->
				</p>
			</b-col>
			<b-col>
				<b-img src="../../assets/images/rachel.jpg"></b-img>
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
