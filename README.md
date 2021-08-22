# vue3-practice
vue3-practice

[TOC]

## Project setup
```
npm install
```

- Compiles and hot-reloads for development
```
npm run serve
```

- Compiles and minifies for production
```
npm run build
```

- Run your unit tests
```
npm run test:unit
```

- Run your end-to-end tests
```
npm run test:e2e
```

- Lints and fixes files
```
npm run lint
```

- Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## note

 (*) Choose Vue version
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support        
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
 (*) Unit Testing
>(*) E2E Testing

ESLint + Airbnb config
Mocha + Chai
Cypress (Chrome only)


## element-plus vue3

[github](https://github.com/element-plus/element-plus)  
[element-plus.org](https://element-plus.gitee.io/#/zh-CN/component/installation)

**todo**

- [ ] element-plus vue3
    - [ ] 项目模板 https://github.com/element-plus/element-plus-starter
    - [x] 按需引入  
        除了app.use添加组件外 还要配置 babel.config.js 来引入样式文件
    - 主题 [->](https://element-plus.gitee.io/#/zh-CN/component/custom-theme)
        - 配置主题色 https://element-plus.gitee.io/#/zh-CN/component/custom-theme
        - 改变scss变量  
            $--font-path: '~element-plus/lib/theme-chalk/fonts';   
            @import "~element-plus/packages/theme-chalk/src/index";
        - 命令行工具  
            npm i element-theme-chalk -D  
            et -i [可以自定义变量文件] // 初始化变量文件  
            et // 编译主题
    - Icon
        - Font Icon 将会在第一个正式发布被废弃
        需要安装 npm install @element-plus/icons
    - \* Space 新增的组件，一个flex的容器
    - \* Scrollbar 原来的element里有但是没有开放出来的组件
    - Config Provider 全局切换语言
    - \* el-select-v2 处理大量选项问题
    - o Skeleton 骨架屏 el-skeleton el-skeleton-item
    - \* Affix 固钉 将页面元素固定在特定可视区域。



- [import type 含义](https://segmentfault.com/q/1010000015563961)
- [Announcing Import Type](https://flow.org/blog/2015/02/18/Import-Types/)
- [Module Types](https://flow.org/en/docs/types/modules/#importing-and-exporting-types-)

引入类型定义


