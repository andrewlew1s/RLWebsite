<template>
<div class="wrapper">

  <div class="module-header">
    <div class="inner">

      <b-img thumbnail src="../assets/logo.png" class="logo"></b-img>

      <h1 class="title">RL Website</h1>

      <div class="menu">
        <b-link to="/" exact>Home</b-link>
        <b-link to="/about" exact>About</b-link>
      </div>

    </div>
  </div>

</div>
</template>

<style lang="scss" scoped>
@import '../style';

.module-header{
  background: $Background;
  height: 120px;
  @include layout-frame-inner($Frame-Width);
  .logo{
    height: 100px;
    float: left;
    margin: 10px 30px;
  }
  .title{
    font-size: 40px;
    color: $Text;
    margin-top: 40px;
    float: left;
  }
  .menu{
    font-size: 20px;
    margin-top: 60px;
    .active{
      font-weight: bold;
    }
  }
}

</style>
