<template>
    <div class="component-ca-child">
        <p>
            ca-child
        </p>
        <h4>ref test</h4>
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


        <h4>reactive test</h4>
        <el-form >
            <el-form-item label="objReat">{{objReat}} </el-form-item>
            <el-form-item label="objReat.str">{{objReat.str}} <input v-model="objReat.str"/> </el-form-item>
            <el-form-item label="objReatStrRef">{{objReatStrRef}} <!-- <input v-model="objReatStrRef"/> --> </el-form-item>
            <el-form-item label="objReatValRef">{{objReatValRef}} <!-- <input v-model="objReatValRef"/> --> </el-form-item>
            <el-form-item label="">
                <button type="button" @click="objReatValRefRandom">objReatValRefRandom</button> 响应式会同步更新到objReat里的属性
            </el-form-item>

        </el-form>
        <h4>setup render test</h4>
        <setupRender />

        <h4>watch test</h4>
        <el-form>
          <el-form-item label="watchStrRef">{{watchStrRef}}<input v-model="watchStrRef"/></el-form-item>
          <el-divider>多个值监听</el-divider>
          <el-form-item label="watchStr1Ref">{{watchStrRef}}<input v-model="watchStr1Ref"/></el-form-item>
          <el-form-item label="watchStr2Ref">{{watchStrRef}}<input v-model="watchStr2Ref"/></el-form-item>
          <button type="button" @click="changeWatchValues">changeWatchValues</button>
          <el-divider>数组监听</el-divider>
          <el-form-item label="watchArrRef">{{JSON.stringify(watchStrRef)}}</el-form-item>
          <button type="button" @click="changeWatchArr">changeWatchArr</button>
        </el-form>
        <h4>computed test</h4>
        <h4>watch test</h4>
        <el-form>
          <el-form-item label="compVal1Ref">{{compVal1Ref}}<input type="number" v-model="compVal1Ref"/></el-form-item>
          <el-form-item label="compVal2Ref">{{compVal2Ref}}<input type="number" v-model="compVal2Ref"/></el-form-item>
          <el-form-item label="compValSumComputed">{{compValSumComputed}}</el-form-item>
        </el-form>
    </div>
</template>

<script>
/* message */
import {
  ref, reactive, toRefs,
  onMounted, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered,
  watch, computed,
} from 'vue';
import { ElMessage } from 'element-plus';
import setupRender from './setupRender.vue';

function refSetup(props, context) { // eslint-disable-line
  /* ref */
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

  /* reactive */
  const objReat = reactive({
    str: 'this is reactive obj',
    val: 0,
  });
  const { str: objReatStrRef, val: objReatValRef } = toRefs(objReat);

  function objReatValRefRandom() {
    const val = parseInt(Math.random() * 100);
    objReatValRef.value = val;
  }
  // reactive ref 互相嵌套时会互相更新
  // 用ref 初始化reactive 或者赋值作为reactive属性时会自动解包

  return {
    strRef,
    refObj,
    refObjRandom,
    refObjAttrRandom,

    objReat,
    objReatStrRef,
    objReatValRef,
    objReatValRefRandom,
  };
}

function hookSetup(props, context) { // eslint-disable-line
  onMounted((...args) => {
    console.log('onMounted', ...args);
  });
  onBeforeUnmount((...args) => {
    console.log('onBeforeUnmount', ...args);
  });
  onUnmounted((...args) => {
    console.log('onUnmounted', ...args);
  });
  onRenderTracked((...args) => {
    console.log('onRenderTracked', ...args);
  });
  onRenderTriggered((...args) => {
    console.log('onRenderTriggered', ...args);
  });
  return {};
}

function watchSetup(props, context) { // eslint-disable-line
  function delay(ms) {
    return new Promise((resolve, reject) => { // eslint-disable-line
      setTimeout(resolve, ms);
    });
  }


  const watchStrRef = ref('aaa');
  watch(watchStrRef, (after, before) => {  // eslint-disable-line
    ElMessage({
      message: `watchStrRef change ${after}`,
      type: 'success',
    });
  });

  // 监听多个值
  const watchStr1Ref = ref('watch str1');
  const watchStr2Ref = ref('watch str2');
  watch([watchStr1Ref,watchStr2Ref], (after, before) => {  // eslint-disable-line
    ElMessage({
      message: `watchStr1Ref watchStr2Ref change ${JSON.stringify(after)}`,
      type: 'success',
    });
  });
  function changeWatchValues() { // 只触发一次
    const val = parseInt(Math.random() * 100);
    watchStr1Ref.value = `watch str1 ${val}`;
    watchStr2Ref.value = `watch str2 ${val}`;
  }
  // 数组监听
  const watchArrRef = reactive([1, 2, 3, 4, 5]);
  watch(watchArrRef,
    (after, before) => {  // eslint-disable-line
      ElMessage({
        message: `watchArrRef change ${JSON.stringify(after)}`,
        type: 'success',
      });
    },
    {
      deep: true,
    });
  // 监视源只能是 getter/effect 函数、ref、reactive对象或这些类型的数组。
  watch(()=>[...watchArrRef], async (after, before) => {  // eslint-disable-line

    await delay(100);
    ElMessage({
      message: `结构 watchArrRef change ${JSON.stringify(after)}`,
      type: 'success',
    });
  });
  function changeWatchArr() {
    const val = parseInt(Math.random() * 100);
    watchArrRef[0] = val;
  }
  return {
    watchStrRef,
    watchStr1Ref,
    watchStr2Ref,
    changeWatchValues,
    changeWatchArr,
  };
}

function computedSetup(props, context) { // eslint-disable-line
  const compVal1Ref = ref(10);
  const compVal2Ref = ref(12);
  const compValSumComputed = computed(() => compVal1Ref.value + compVal2Ref.value);
  return {
    compVal1Ref,
    compVal2Ref,
    compValSumComputed,
  };
}

export default {
  name: 'ca-child',
  components: {
    setupRender,
  },
  setup(props, context) {
    console.log('composition api test');
    const refRes = refSetup(props, context);
    const hookRes = hookSetup(props, context);
    const watchRes = watchSetup(props, context);
    const computedRes = computedSetup(props, context);
    return {
      ...refRes,
      ...hookRes,
      ...watchRes,
      ...computedRes,
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-ca-child{

    }
</style>
