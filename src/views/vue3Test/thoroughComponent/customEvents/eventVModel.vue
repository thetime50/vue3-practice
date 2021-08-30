<template>
    <div class="component-event-v-model">
      <h3>自定义事件</h3>
      <h4>v-model 修饰符处理</h4>
      <div>
        <modelChild
          v-model.ma.mb="mvalue"
          v-model:arg.aa.ab="arg"
        />
        mvalue：{{mvalue}}<br/>
        arg：{{arg}}<br/>
      </div>

    </div>
</template>

<script>
/* message */
import modelChild from './modelChild.vue';

export default {
  name: 'event-v-model',
  components: {
    modelChild,
  },
  data() {
    return {
      mvalue: 'mvalue',
      arg: 'arg',
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .component-event-v-model{

  }
</style>
