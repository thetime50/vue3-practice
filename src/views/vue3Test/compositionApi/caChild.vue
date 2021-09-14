<template>
    <div class="component-ca-child">
        <p>
            ca-child
        </p>
        <el-form >
            <el-form-item label="strRef">{{strRef}} <input v-model="strRef"/> </el-form-item>
            <el-divider />
            <el-form-item label="refObj">{{refObj}}</el-form-item>
            <el-form-item label="refObj.val">
                {{refObj.val}}
                <!-- <input v-model="refObj.val"/> -->
            </el-form-item>
            <el-form-item label="refObj.str">
                {{refObj.str}}
                <!-- <input v-model="refObj.str"/> -->
            </el-form-item>
            <el-form-item label="">
                <button type="button" @click="refObjRandom">refObjRandom</button>
                <button type="button" @click="refObjAttrRandom">refObjAttrRandom</button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
/* message */
import { ref } from 'vue';

function refSetup(props, context) { // eslint-disable-line
  const strRef = ref('hello');

  console.log('* strRef');
  console.log(strRef); // { value: 0 }
  console.log(strRef.value); // 0

  strRef.value += ' world';
  console.log(strRef.value); // 1

  const refObj = ref({
    str: 'this is ref obj',
    val: 0,
  });
  console.log('* refObj');
  console.log(refObj);
  console.log('refObj.val', refObj.value.val);

  function refObjRandom() {
    const val = parseInt(Math.random() * 100);
    refObj.value = {
      str: `refObj random ${val}`,
      val,
    };
  }
  function refObjAttrRandom() {
    const val = parseInt(Math.random() * 100);
    refObj.value.str = `refObj attr random ${val}`;
    refObj.value.val = val;
  }
  return {
    strRef,
    refObj,
    refObjRandom,
    refObjAttrRandom,
  };
}

export default {
  name: 'ca-child',
  setup(props, context) {
    console.log('composition api test');
    const refRes = refSetup(props, context);
    return {
      ...refRes,
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-ca-child{

    }
</style>
