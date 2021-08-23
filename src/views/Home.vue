<template>
  <div class="home">
    <h1>HELLO VUE3</h1>
    <div>
      {{size}}
      {{color}} <br>
      <eli-edit style="width: 1em; height: 1em; margin-right: 8px;"  />
      <el-icon :size="size" :color="color"> <!-- 从elicon继承样式 -->
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
  </div>
</template>

<script>
// @ is an alias to /src
import item from './item.vue';

export default {
  name: 'Home',
  components: {
    item,
  },
  data() {
    return {
      list: Array.from({ length: 8 }, (v, i) => ({ val: i })),
    };
  },
  methods: {
    listSplice() {
      this.list.splice(1, 2);
    },
  },
};
</script>
