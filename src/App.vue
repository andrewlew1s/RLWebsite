<template>
  <div id="app">
    <Header></Header>
    <router-view class="wrapper"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
	name: 'App',
	components: {
		Header,
		Footer
	}
};
</script>

<style lang="scss" scoped>
@import './styles/reset';
@import './Style';

#app {
    .wrapper{
        padding-top: 200px;
    }
    > * {
        float: left;
    }

}

</style>
