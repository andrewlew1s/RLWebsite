<template>
	<div class="home">

		<home-banner class="home__banner" img="http://via.placeholder.com/350x150"></home-banner>

		<b-row class="inner home__preview">
			<b-col>
				<b-img class="home__preview__image" :src="currentPost.thumbnail"></b-img>
			</b-col>
			<b-col>
				<span class="home__preview__date">{{ currentPost.date | humanizeIsoDate }}</span>
				<h2 class="home__preview__title">{{currentPost.title}}</h2>
			</b-col>
		</b-row>

		<b-row class="inner home__preview">
			<b-col>
				<span class="home__preview__date">{{ currentPost.date | humanizeIsoDate }}</span>
				<h2 class="home__preview__title">{{currentPost.title}}</h2>
			</b-col>
			<b-col>
				<b-img class="home__preview__image" :src="currentPost.thumbnail"></b-img>
			</b-col>
		</b-row>

	</div>
</template>

<script>
import moment from 'moment';
import HomeBanner from '../../components/HomeBanner';

export default {
	components: {
		HomeBanner
	},
	props: [
		'posts'
	],
	computed: {
		currentPost() {
			// if posts hasn't loaded then load empty object
			if (!this.posts[0]) return {};
			return this.posts[0];
		}
	},
	filters: {
		humanizeIsoDate(isoDate) {
			return moment(isoDate).format('LL');
		}
	}
};

</script>

<style lang="scss" scoped>
@import '../../style';


.home{
	@include layout-frame-inner;

	&__banner{
		margin-bottom: 40px;
	}

	&__preview {
		margin-bottom: 40px;

		&__image{
		width: 100%;
		}

		&__date{
			font-family: $Title_Font_Family;
			font-size: 18px;
		}

		&__title{
			font-size: 54px;
		}
	}

}
</style>
