/**
 * 全部引入
 */

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn';

export default (app) => {
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
//   app.use(ElButton);
//   app.use(ElSelect);
// };
