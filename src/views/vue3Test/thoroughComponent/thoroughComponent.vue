<template>
    <div class="component-thorough-component">
        <h2>深入组件</h2>
        <noPropAttribute/>
        <eventVModel/>
    </div>
</template>

<script>
/* message */
import noPropAttribute from './noPropAttribute/noPropAttribute.vue';
import eventVModel from './customEvents/eventVModel.vue';

export default {
  name: 'thorough-component',
  components: {
    noPropAttribute,
    eventVModel,
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
