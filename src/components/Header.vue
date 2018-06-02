<template>
<div class="wrapper">

  <div class="test">
    <div class="inner">
      words
    </div>
  </div>

</div>
</template>

<style lang="scss" scoped>
@import '../style';

.test{
  @include layout-frame-inner(1140px);
  .inner{
      background: green;

  }
}

</style>
