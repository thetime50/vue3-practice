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
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    //
  },
};
</script>
