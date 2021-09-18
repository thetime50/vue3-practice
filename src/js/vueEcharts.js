import IEcharts from 'vue-echarts-v3/src/full';
// import IEcharts from 'vue-echarts-v3/src/lite';
// import IEcharts from '@/js/vueEchartsMe/lite';

/* 
// import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
// import 'echarts/lib/chart/pie';
// import 'echarts/lib/chart/scatter';
// import 'echarts/lib/chart/radar';

// import 'echarts/lib/chart/map';
// import 'echarts/lib/chart/treemap';
// import 'echarts/lib/chart/graph';
// import 'echarts/lib/chart/gauge';
// import 'echarts/lib/chart/funnel';
// import 'echarts/lib/chart/parallel';
// import 'echarts/lib/chart/sankey';
// import 'echarts/lib/chart/boxplot';
// import 'echarts/lib/chart/candlestick';
// import 'echarts/lib/chart/effectScatter';
// import 'echarts/lib/chart/lines';
// import 'echarts/lib/chart/heatmap';

// import 'echarts/lib/component/graphic';
import 'echarts/lib/component/grid';
// import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/polar';
// import 'echarts/lib/component/geo';
// import 'echarts/lib/component/parallel';
// import 'echarts/lib/component/singleAxis';
// import 'echarts/lib/component/brush';

import 'echarts/lib/component/title';

// import 'echarts/lib/component/dataZoom';
// import 'echarts/lib/component/visualMap';

// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markArea';

// import 'echarts/lib/component/timeline';
// import 'echarts/lib/component/toolbox';

// import 'zrender/lib/vml/vml';
 */

// import * as ECharts from 'echarts'; // full
// import * as ECharts from 'echarts/lib/echarts'; // lite


import {
  toRaw,
} from 'vue';

/* eslint-disable */
IEcharts.render = function (h) {
    const that = this;
    return ( < div style = {that.styles}/>);
}

// IEcharts.watch.option.handler = function (option) {
//   const that = this;
//   console.log('IEcharts.watch.option.handler', option, toRaw(option))
//   that.instance.setOption(toRaw(option), that.notMerge, that.lazyUpdate);
// }

IEcharts.methods.init = function () {
  const that = this;
  if (!that.instance) {
    const dom = that.$el;
    let instance = IEcharts.__echarts__.getInstanceByDom(dom);
    // console.log('IEcharts.init', that.initOpts, toRaw(that.initOpts),)
    if (!instance) {
      instance = IEcharts.__echarts__.init(dom, that.theme, toRaw(that.initOpts || this.option));
    }
    instance.group = that.group;
    that.instance = instance;
    that.$emit('ready', instance, IEcharts.__echarts__);
    setTimeout(function () {
      that.ifLoading(that.loading);
      that.update(); // 这里报错的
      // that.watch();
      that.bind();
      that.initResize(dom);
    },10);
  }
}
/* eslint-enable */
export default IEcharts;
