/**
 * 全部引入
 */

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn';

const elComponentImport = (app) => {
  app.use(ElementPlus, { locale });
};


/**
 * 按需引入
 * 
 * 
 * 需要 babel.config.js 配置 scss 的引入
 */

// import { ElButton, ElSelect } from 'element-plus';
// // 如果要使用.scss样式文件，则需要引入base.scss文件
// // import 'element-plus/packages/theme-chalk/src/base.scss'

// export default (app) => {
//   app.component(ElButton.name, ElButton);
//   app.component(ElSelect.name, ElSelect);
//   // 或者 
//   // 推荐使用use 可以同时注册一些指令
//   app.use(ElButton);
//   app.use(ElSelect);
// };


/**
 * 引入icon
 */

// eslint-disable-next-line
import * as icons from '@element-plus/icons';

console.log(icons);
// for (const i in icons) {
//   console.log(i, icons[i]);
// }
const elIconsImport = (app) => {
  Object.entries(icons).forEach(([key, v]) => { // eslint-disable-line
    if (v.render) {
      app.component(`eli${v.name}`, v);
    } else {
      // console.log('*', key, v);
    }
  });
};



export default (app) => {
  elComponentImport(app);
  elIconsImport(app);
};
