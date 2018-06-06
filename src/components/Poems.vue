<template>
    <div class="module-poems">
        <div class="inner">
            {{ poems }}
            <b-img thumbnail src="../assets/20Tourists.png" class="logo"></b-img>
        </div>
    </div>
</template>

<script>
import tigerless from '../assets/tigerless';

export default {
	data() {
		return {
			poems: [
				tigerless
			]
		};
	}
};
</script>

