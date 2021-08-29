<template>
    <div class="component-vue3-test">
      <h2>vue3 list test</h2>
      <el-button type="primary" @click="listSplice">list.splice(1,2)</el-button>
      <!-- eslint-disable-next-line -->
      <template v-for="(item,index) in list">
        <!-- eslint-disable-next-line -->
        <item :obj="item" />
      </template>
    </div>
    <div>
      <h2>组件数据双向同步测试</h2>
      <m-edit v-model="mval"/><br>
      <!-- <m-edit :value="mval" @input="inputCb"/><br> -->
      <m-edit :modelValue="mval" @update:modelValue="updateModelValueCb"/><br>
      <!-- mval = $event -->
    </div>
</template>

<script>
/* message */
import item from './item.vue';
import mEdit from './mEdit.vue';

export default {
  name: 'vue3-test',
  components: {
    item,
    mEdit,
  },
  data() {
    return {
      list: Array.from({ length: 8 }, (v, i) => ({ val: i })),
      mval: '',
    };
  },
  methods: {
    listSplice() {
      this.list.splice(1, 2);
    },
    inputCb(val) {
      console.log('inputCb', val);
      this.mval = val;
    },
    updateModelValueCb(val) {
      console.log('updateModelValueCb', val);
      this.mval = val;
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-vue3-test{

    }
</style>
