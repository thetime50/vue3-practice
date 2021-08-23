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


## vue3

### 列表渲染

```html
<!-- v-for 遍历对象 -->
<!-- 不能保证它在不同 JavaScript 引擎下的顺序都一致。 -->
<li v-for="(value, name, index) in myObject">
  {{ index }}. {{ name }}: {{ value }}
</li>
```

- 使用v-for 时如果数组顺序发生变化，vue默认会更改当前位置的元素 // todo 测试  
    *只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出 ?*
- 绑定key属性可以重新排序元素
- 应使用字符串、数字等基本类来作为key

#### 数组变更检测

- 数组变更方法 会改变元素数组的方法 被vue重新包裹

1. push()
2. pop()
3. shift()
4. unshift()
5. splice()
6. sort()
7. reverse()

- 替换数组

使用时需要 this.arr = this.arr.concat(xxx)  
vue会识别有相同元素的数组使dom重用

1. filter()
2. concat() 
3. slice()

### 事件处理

```html

<!-- $event 传递事件参数 -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- 绑定多个事件 用,分隔 -->
<button @click="one($event), two($event)">
  Submit
</button>
```

事件修饰符

- .stop 停止冒泡
- .prevent 禁止默认事件
- .capture 捕获阶段
- .self 自身事件
- .once 触发一次
- .passive 不会调用 preventDefault() 滚动事件提高效率

#### 按键修饰符
**按键别名**

- .enter
- .tab
- .delete (捕获“删除”和“退格”键)
- .esc
- .space
- .up
- .down
- .left
- .right

**系统修饰键**
- .ctrl
- .alt
- .shift
- .meta  
    Mac 系统键盘上，meta 对应 command 键 (⌘)。  
    在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。  
    在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)
- **.exact** 精确匹配系统修饰符组合触发的事件

**鼠标按钮修饰符**
.left
.right
.middle
