<template>
    <div class="component-vue-echarts-test">
        <h4>vue-echarts-v3 test</h4>
        <a href="https://github.com/xlsdg/vue-echarts-v3">vue-echarts-v3 github</a>

        <h5>options api render test</h5>
        <optionsApiRender />
        <IEcharts
            :option="bar"
            :loading="loading"
            @ready="onReady"
            @click="onClick"
        />
        <button @click="doRandom">Random</button>

    </div>
</template>

<script>
/* message */
import { ref } from 'vue';
// import IEcharts from 'vue-echarts-v3/src/full';
// import IEcharts from 'vue-echarts-v3/src/lite';
// import IEcharts from '@/js/vueEchartsMe/lite';
import IEcharts from '@/js/vueEcharts';
import optionsApiRender from './optionsApiRender.vue';

console.log('IEcharts', IEcharts);
console.log('optionsApiRender', optionsApiRender, optionsApiRender.render.toString());

export default {
  name: 'vue-echarts-test',
  components: {
    IEcharts,
    optionsApiRender,
  },
  props: {
  },


  setup(props, context) { // eslint-disable-line
    const symbolSize = 20;
    const loading = ref(false);
    const bar = ref({
      title: {
        text: 'Try Dragging these Points',
      },
      tooltip: {
        triggerOn: 'none',
        formatter(params) {
          return `X: ${params.data[0].toFixed(2)}<br>Y: ${params.data[1].toFixed(2)}`;
        },
      },
      grid: {
      },
      xAxis: {
        min: -100,
        max: 80,
        type: 'value',
        axisLine: { onZero: false },
      },
      yAxis: {
        min: -30,
        max: 60,
        type: 'value',
        axisLine: { onZero: false },
      },
      dataZoom: [
        {
          type: 'slider',
          xAxisIndex: 0,
          filterMode: 'empty',
        },
        {
          type: 'slider',
          yAxisIndex: 0,
          filterMode: 'empty',
        },
        {
          type: 'inside',
          xAxisIndex: 0,
          filterMode: 'empty',
        },
        {
          type: 'inside',
          yAxisIndex: 0,
          filterMode: 'empty',
        },
      ],
      series: [
        {
          id: 'a',
          type: 'line',
          smooth: true,
          symbolSize,
          data: [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]],
        },
      ],
    });


    function doRandom() {
      const data = [];
      for (let i = 0, min = 5, max = 99; i < 6; i += 1) {
        data.push(Math.floor(Math.random() * (max + 1 - min) + min));
      }
      loading.value = !loading.value;
      bar.value.series[0].data = data;
    }
    function onReady(instance, ECharts) {
      console.log(instance, ECharts);
    }
    function onClick(event, instance, ECharts) {// eslint-disable-line
      console.log(arguments);// eslint-disable-line
    }
    return {
      loading,
      bar,
      doRandom,
      onReady,
      onClick,
    };
  },


  // data: () => ({
  //   loading: true,
  //   bar: {
  //     title: {
  //       text: 'ECharts Hello World',
  //     },
  //     tooltip: {},
  //     xAxis: {
  //       data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks'],
  //     },
  //     yAxis: {},
  //     series: [{
  //       name: 'Sales',
  //       type: 'bar',
  //       data: [5, 20, 36, 10, 10, 20],
  //     }],
  //   },
  // }),
  // methods: {
  //   doRandom() {
  //     const that = this;
  //     const data = [];
  //     for (let i = 0, min = 5, max = 99; i < 6; i += 1) {
  //       data.push(Math.floor(Math.random() * (max + 1 - min) + min));
  //     }
  //     that.loading = !that.loading;
  //     that.bar.series[0].data = data;
  //   },
  //   onReady(instance, ECharts) {
  //     console.log(instance, ECharts);
  //   },
  //   onClick(event, instance, ECharts) {// eslint-disable-line
  //     console.log(arguments);// eslint-disable-line
  //   },
  // },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-vue-echarts-test{
        .echarts {
            width: 400px;
            height: 400px;
        }

    }
</style>
