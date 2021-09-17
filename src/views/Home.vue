<template>
  <div class="home">
    <h1>HELLO VUE3</h1>
    <ul>
       <template v-for="(item, index) in menu" :key="index">
          <li>
            <router-link :to="item.path">
              {{item.name}}
            </router-link>
          </li>
       </template>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      menu: [
        { name: 'element test', path: '/elementtest' },

        { name: 'vue3 test', path: '/vue3test' },
        { name: 'vue3 深入组件', path: '/vue3test/thoroughComponent' },
        { name: 'vue3 过渡 动画', path: '/vue3test/transitionsTest' },
        { name: 'vue3 列表过渡', path: '/vue3test/transitionsListTest' },
        { name: 'vue3 composition API', path: '/vue3test/compositionApi' },

        { name: 'vue echarts test', path: '/vueEchartsTest' },
      ],
    };
  },
  methods: {
    // 
  },
};
</script>
