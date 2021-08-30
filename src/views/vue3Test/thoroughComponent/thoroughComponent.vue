<template>
    <div class="component-thorough-component">
        <h2>深入组件</h2>
        <noPropAttribute/>
    </div>
</template>

<script>
/* message */
import noPropAttribute from './noPropAttribute.vue';

export default {
  name: 'thorough-component',
  components: {
    noPropAttribute,
  },
  data() {
    return {
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-thorough-component{

    }
</style>
