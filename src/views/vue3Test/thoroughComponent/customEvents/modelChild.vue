<template>
    <div class="component-model-child">
      modelValue： <input type="text" v-model="modelValue_"> <br>
      arg： <input type="text" v-model="arg_"> <br>
    </div>
</template>

<script>
/* message */
// import { proxy2attr } from '@/js/utils';

export default {
  name: 'model-child',
  props: {
    modelValue: { type: String },
    modelModifiers: { default: () => ({}) },
    arg: { type: String },
    argModifiers: { default: () => ({}) },
  },
  data() {
    return {
      // 
    };
  },
  mounted() {
    console.log('model-child mounted');
    console.log('modelValue', this.modelValue, 'modelModifiers', this.modelModifiers);
    console.log('arg', this.arg, 'argModifiers', this.argModifiers);
  },
  computed: {
    modelValue_: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('update:modelValue', val);
      },
    },
    arg_: {
      get() {
        return this.arg;
      },
      set(val) {
        this.$emit('update:arg', val);
      },
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .component-model-child{

  }
</style>
