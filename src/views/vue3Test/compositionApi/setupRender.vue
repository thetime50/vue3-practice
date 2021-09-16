<!--
<template>
    <div class="component-setup-render">

    </div>
</template>
 -->
<script>
/* message */
import { ref, h } from 'vue'; // eslint-disable-line

export default {
  name: 'setup-render',
  setup(props, context) { // eslint-disable-line
    const numRef = ref(3);
    const render = () => (
        <div class="component-setup-render">
            {numRef.value}
            { (<input v-model={numRef.value}/>) }
        </div>
    );
    return render;
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-setup-render{

    }
</style>
