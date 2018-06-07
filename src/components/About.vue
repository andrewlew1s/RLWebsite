<template>
    <div class="module-about">
        <div class="inner">
            <b-img src="../assets/images/rachel.jpg" class="rachel"></b-img>
            <p> Rachel Lewis is a 2014 winner of the Cape Farewell/Young Poets Network competition for poems exploring climate change.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../style';

.module-about{

$height: 300px;
background: $Highlight;
@include layout-frame-inner();

	.rachel{
        height: $height / 2;
		margin: auto;
        margin-top: $height / 10;
        display: block;
  }
  .inner{
  }
}

</style>
