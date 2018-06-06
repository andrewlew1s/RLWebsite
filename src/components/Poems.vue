<template>
    <div class="module-poems">
        <div class="inner">
            {{ poems }}
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

