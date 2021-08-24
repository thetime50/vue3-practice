<template>
  <div class="home">
    <h1>HELLO VUE3</h1>
    <div>
      <eli-edit style="width: 1em; height: 1em; margin-right: 8px;"  />
      <el-icon :size="18" color="#666"> <!-- 从elicon继承样式 -->
        <eli-edit />
      </el-icon>
      <div>
        <el-button type="primary" icon="el-icon-edit" >button icon test</el-button>
        <i>但是button组件里面的还是font icon</i>
      </div>
    </div>
    <div>
      <h2>vue3 list test</h2>
      <el-button type="primary" @click="listSplice">list.splice(1,2)</el-button>
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
  </div>
</template>

<script>
// @ is an alias to /src
import item from './item.vue';
import mEdit from './mEdit.vue';

export default {
  name: 'Home',
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
