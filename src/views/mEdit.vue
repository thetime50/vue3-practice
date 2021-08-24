<template>
    <div class="component-m-edit">
        <input type="text" v-model="val">
    </div>
</template>

<script>
/* message */

export default {
  name: 'm-edit',
  props: {
    modelValue: {},
    value: {},
  },
  emits: {
    'update:modelValue': [String],
    input: [String],
  },
  data() {
    return {
    };
  },
  computed: {
    val: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('update:modelValue', val);
        // this.$emit('input', val); // 这个不会触发v-model
        // this.$emit('input', { target: { value: val } }); // 这个不会触发v-model
      },
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-m-edit{

    }
</style>
