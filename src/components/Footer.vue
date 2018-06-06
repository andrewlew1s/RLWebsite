<template>
    <div class="module-footer">
        <div class="inner">
            <p> Andrew and Mike Ltd. Corp</p>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../style';

.module-footer{
    $height: 100px;
    background: $Highlight;
  @include layout-frame-inner();
  .inner{
      p{ padding-top: 0.8em;}
  }
}

</style>
