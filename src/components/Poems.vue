<template>
    <div class="module-poems">
        <div class="inner">

           <div v-bind:key="poem.title" v-for="poem in poems" class="mb-3">
				<h2>{{poem.title}}</h2>
				<p v-if="poem.text">
					{{poem.text}}
				</p>
				<p v-if="poem.image">
					<img thumbnail :src="poem.image"/>
				</p>
				<iframe v-if="poem.video" :src="poem.video" width="640" height="360" frameborder="0"
					webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				<br>
				<br>
			</div>

        </div>
    </div>
</template>

<script>
import tigerless from '../assets/poems/tigerless';
import thedecision from '../assets/poems/thedecision';
import ilium from '../assets/poems/ilium';
import twentyTourists from '../assets/poems/20tourists';
import It from '../assets/poems/It';

export default {
	data() {
		return {
			poems: [
				tigerless,
				ilium,
				thedecision,
				twentyTourists,
				It
			]
		};
	}
};
</script>

<style lang="scss" scoped>
@import '../style';
.module-poems{
	@include layout-frame-inner;
}

</style>
