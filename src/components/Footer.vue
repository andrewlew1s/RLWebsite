<template>
    <div class="module-footer">
        <div class="inner">
            <menue :items="menuItems"></menue>
            <p> Andrew and Mike Ltd. Corp</p>
        </div>
    </div>
</template>

<script>
import Menue from './Menue';

export default {
	components: {
		Menue
	},
	data() {
		return {
			menuItems: [{ path: '/', text: 'Home' }
			]
		};
	}
};

</script>

<style lang="scss" scoped>
@import '../style';

.module-footer{
    $height: 100px;
    background: $Highlight;
  @include layout-frame-inner($Frame-Width);
  .inner{
      background: green;

  }
}

</style>
