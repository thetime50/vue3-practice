<template>
    <div class="component-transitions-test">
        <h4>初始状态 appear</h4>
        <p>
            <el-switch v-model="appeatSw"></el-switch>
            <!-- v-if时判定已经渲染上了 -->
            <transition appear name="appeartest"
                appear-active-class="appeartest-appear-active"
                appear-to-class="appeartest-appear-to">
                <div class="item" v-if="appeatSw">item</div>
            </transition>
            <transition appear name="appeartest"
                appear-active-class="appeartest-appear-active"
                appear-to-class="appeartest-appear-to">
                <div class="item" v-show="appeatSw">item</div>
            </transition>
            <transition appear name="appeartest"
                appear-active-class="appeartest-appear-active"
                appear-to-class="appeartest-appear-to">
                <component class="item" :is="appeatSw ? 'v-b':'v-a'"></component>
            </transition>
        </p>
        <h4>多元素过渡</h4>
        <p>
            <el-radio-group v-model="moreEl">
              <el-radio label="a">a</el-radio>
              <el-radio label="b">b</el-radio>
              <el-radio label="c">c</el-radio>
            </el-radio-group> <br>
            v-if切换
            <transition name="moreel">
                <div v-if="moreEl=='a'" key="a" class="moreel">a el</div>
                <div v-else-if="moreEl=='b'" key="b" class="moreel">b el</div>
                <div v-else-if="moreEl=='c'" key="c" class="moreel">c el</div>
            </transition>
            key切换
            <transition name="moreel">
                <div :key="moreEl" class="moreel">{{moreEl}} el</div>
            </transition>
        </p>
        <h4>过渡模式</h4>
        <p>
            默认切换时同时进行，配置先in和out动作的执行顺序
            <el-radio-group v-model="modeSw">
              <el-radio label="a">a</el-radio>
              <el-radio label="b">b</el-radio>
              <el-radio label="c">c</el-radio>
            </el-radio-group> <br>
            mode out-in
            <transition name="transmode" mode="out-in">
                <div v-if="modeSw=='a'" key="a" class="transmode">a el</div>
                <div v-else-if="modeSw=='b'" key="b" class="transmode">b el</div>
                <div v-else-if="modeSw=='c'" key="c" class="transmode">c el</div>
            </transition>
            <transition name="transmode" mode="out-in">
                <component class="transmode" :is="'v-'+modeSw"></component>
            </transition>
            mode in-out
            <transition name="transmode" mode="in-out">
                <div v-if="modeSw=='a'" key="a" class="transmode">a el</div>
                <div v-else-if="modeSw=='b'" key="b" class="transmode">b el</div>
                <div v-else-if="modeSw=='c'" key="c" class="transmode">c el</div>
            </transition>
            <transition name="transmode" mode="in-out">
                <component class="transmode" :is="'v-'+modeSw"></component>
            </transition>
        </p>
        <h4>动态组件过渡</h4>
        <p>
            <el-radio-group v-model="moreComp">
              <el-radio label="a">a</el-radio>
              <el-radio label="b">b</el-radio>
              <el-radio label="c">c</el-radio>
            </el-radio-group> <br>
            <transition name="transmode" mode="in-out">
                <component class="transmode" :is="'v-'+moreComp"></component>
            </transition>
        </p>
    </div>
</template>

<script>
/* message */

export default {
  name: 'transitions-test',
  components: {
    'v-a': {
      // eslint-disable-next-line
      render: (r) => (<div>Component A</div>),
    },
    'v-b': {
      // eslint-disable-next-line
      render: (r) => (<div>Component B</div>),
    },
    'v-c': {
      // eslint-disable-next-line
      render: (r) => (<div>Component C</div>),
    },

  },
  data() {
    return {
      appeatSw: true,
      moreEl: 'a',
      modeSw: 'a',
      moreComp: 'a',
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-transitions-test{
    }
    h4{
        margin-bottom: 10px;
    }
    h4~p{
        margin-top: 10px;
    }
        .item{
            background: hsla(234, 100%, 60%,1);
            /* 应用于初始状态，因此此转换将应用于返回状态 */
            transition: background 1.8s linear;
        }
        .appeartest-enter-from{
            background-color: hsla(54, 100%, 60%, 0);
        }
        .appeartest-enter-active{}
        .appeartest-leave-active{
            background-color: hsla(54, 100%, 60%, 0);
        }
        .appeartest-appear-active{
            color: #f66;
            font-weight: 900;
            background: rgba(255, 97, 97, 0.5);
        }
        .appeartest-appear-to{
            color: #fff;
            font-weight: 200;
            transition: all 2.8s linear;
        }

        .moreel{
            background-color: #afa;
            transition: all 1.8s linear;
        }
        .moreel-enter-from{
            background-color: hsla(54, 100%, 60%, 0);
        }


        .transmode{
            background-color: rgb(255, 170, 220);
            transition: all 1.8s linear;
        }
        .transmode-enter-from{
            background-color: hsla(54, 100%, 60%, 0);
        }
</style>
