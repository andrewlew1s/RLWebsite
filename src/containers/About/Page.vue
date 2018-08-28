<template>
	<div class="About">

		<!-- eslint-disable max-len -->
		<b-row class="App__inner App__inner--padded">
			<b-col>
				<p class="About__centerP">
					Hello! My name is Rachel, and welcome to my website! I am a 23-year-old award-winning poet and performer living and working in London. I make poetry happen through writing, performing, collaborating with other artists and coordinating poetry publications and events.
				</p>
			</b-col>
			<b-col>
				<b-img class="About__image" src="/static/images/rachel.jpg"></b-img>
			</b-col>
		</b-row>
		<b-row class="App__inner">
			<b-col class="About__col">
				<p>
					Most recently I worked on a collaborative performance with dancers and circus performers at the Roundhouse in Camden (2018) as a Young Producer with Poet in the City (2017). I previously studied English Literature at the University of Cambridge, where I led Chameleon, the university’s creative writing society and was a Poetry Editor for the Mays anthology.
				</p>
				<p>
					My poetry has been published by The Poetry Book Society, the Poetry Society, Kindling journal and many more. I have performed on canal towpaths, in cellars underneath feminist pubs, in many a student bar and on the Roundhouse main stage.
				</p>
				<p>
					The ‘Performed and published’ section of this website is where you can read and listen to my published work. I’ll let it speak for itself and let you work out what it’s all about yourself.
				</p>
			</b-col>
		</b-row>

		<b-row class="App__inner">
			<b-col>
				<p>
					The ‘Performed and published’ section of this website is where you can read and listen to my published work. I’ll let it speak for itself and let you work out what it’s all about yourself.
				</p>
				<p>
					Do get in touch if you would like to work with me on any of the following:
				</p>
				<ul>
					<li>
						Performing at your event
					</li>
					<li>
						Hosting your event
					</li>
					<li>
						Running a creative writing workshop
					</li>
					<li>
						Commissioning a poem
					</li>
					<li>
						Collaborating on a creative project
					</li>
					<li>
						Chatting about poetry in general or in particular
					</li>
				</ul>
			</b-col>
		</b-row>

		<b-row class="App__inner">
			<p>
				List of awards:
			</p>
			<ul>
				<li
					v-for="award in awards"
					:key="award.name">
					<span v-text="award.date"/>
				</li>
				<li>
					2008 Winner, Dramatic Monologue Poetry Competition, judged by Glyn Maxwell
				</li>
				<li>
					Jun 2009 Winner, Daunt Books Short Story Competition
				</li>
				<li>
					Oct 2009, Highly commended in Foyle Young Poets of the Year Award (top 100 out of 12,000 entries)
				</li>
				<li>
					Mar 2011, Winner, Rudyard Kipling Society Essay Writing Competition
				</li>
				<li>
					May 2012, Winner, Girton College Humanities Writing Competition, won with 2 sonnets
				</li>
				<li>
					Oct 2012, Highly commended in Foyle Young Poets of the Year Award (top 100 out of 14,000 entries)
				</li>
				<li>
					Nov 2012, Third Place, Arts Richmond Young Writers Award
				</li>
				<li>
					May 2012, Highly commended, Thomas Campion Essay Prize, essay on Keats
				</li>
				<li>
					May 2013, Highly Commended, SCJ Poetry Prize, judged by Moniza Alvi and Catherine Smith
				</li>
				<li>
					Jan 2013, Highly commended, T. S. Eliot Prize Writing Competition, essay on new poets
				</li>
				<li>
					May 2014, Highly Commended, Words and Women ‘About’ Poetry Competition <b-link href="http://wordsandwomennorwich.blogspot.com/search/label/Young%20Women%20Writers">:Link to website</b-link>
				</li>
				<li>
					Jun 2014, Winner, Cape Farewell’s Poetry Competition with YPN, judged by Helen Mort
				</li>
				<li>
					Oct 2015, Highly Commended, Poetry Book Society Student Poetry Competition, judged by Andrew McMillan
				</li>
				<li>
					Jun 2016, Winner, ‘Ways to be Wilder’ YPN Competition, judged by Jen Hadfield <b-link href="http://poems.poetrysociety.org.uk/poems/twenty-tourists-in-a-motor-boat-watching-marine-plankton-bioluminesce/">:Link to website</b-link>
				</li>
			</ul>
		</b-row>
		<!-- eslint-enable max-len -->

		{{awards}}

	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			pageData: 'page/pageData'
		}),
		awards() {
			if (!this.pageData) return false;
			return this.pageData.awards;
		}
	},
	methods: {
		...mapActions({
			fetchPageData: 'page/fetchPageData'
		}),
		async fetch() {
			const result = await this.fetchPageData('about');
			return result;
		}
	},
	created() {
		this.fetch();
	}
};
</script>


<style lang="scss">
@import '../../settings';

.About{

	&__image {
		display: block;
		width: auto;
		max-width: 600px;
		margin: auto;
	}

	&__centerP {
		top: 50%;
		position: relative;
		transform: translateY(-50%);
		margin-bottom: 0;
	}

	.App__inner {
		margin-bottom: 2rem;
	}

}


</style>
