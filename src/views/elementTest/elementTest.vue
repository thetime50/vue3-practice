<template>
    <div class="component-element-test">
      <h1>element pluse test</h1>

      <p>
        If Element Plus is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button type="primary">el-button</el-button>

      <eli-edit style="width: 1em; height: 1em; margin-right: 8px;"  />
      <el-icon :size="18" color="#666"> <!-- 从elicon继承样式 -->
        <eli-edit />
      </el-icon>
      <div>
        <el-button type="primary" icon="el-icon-edit" >button icon test</el-button>
        <i>但是button组件里面的还是font icon</i>
      </div>

    </div>
</template>

<script>
/* message */

export default {
  name: 'element-test',
  data() {
    return {
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-element-test{

    }
</style>
