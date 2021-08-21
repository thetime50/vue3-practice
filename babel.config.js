module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    // element 按需引入配置
    // [
    //   'import',
    //   {
    //     libraryName: 'element-plus',
    //     customStyleName: (name) => {
    //       // 引入scss文件
    //       name = name.slice(3) // eslint-disable-line
    //       return `element-plus/packages/theme-chalk/src/${name}.scss`;
    //       // 引入css文件
    //       // return `element-plus/lib/theme-chalk/${name}.css`;
    //     },
    //   },
    // ],
  ],
};
