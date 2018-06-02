<template>
<div class="wrapper">

  <div class="module-footer">
    <div class="inner">
     <p> Made by Andrew and Mike</p>
    </div>
  </div>

</div>
</template>

<style lang="scss" scoped>
@import '../style';

.module-footer{
  background: $Background;
  @include layout-frame-inner($Frame-Width);
  .inner{
      background: green;

  }
}

</style>
