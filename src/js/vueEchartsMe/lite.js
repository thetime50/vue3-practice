import * as ECharts from 'echarts/lib/echarts';
// import Wrapper from 'vue-echarts-v3/src/wrapper';
import Wrapper from './wrapper';

const IEcharts = Wrapper(ECharts);
IEcharts.__echarts__ = ECharts; // eslint-disable-line
export default IEcharts;

// const install = function(Vue, opts) {
//   Vue.component(IEcharts.name, IEcharts);
// };

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

// const API = {
//   // version: '2.7.0',
//   install,
//   IEcharts
// };

// export default API;
