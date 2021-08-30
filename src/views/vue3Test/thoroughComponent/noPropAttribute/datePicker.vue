<template>
    <select class="component-date-picker">
      <option value="1">Yesterday</option>
      <option value="2">Today</option>
      <option value="3">Tomorrow</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
</template>

<script>
/* message */
import { proxy2attr } from '@/js/utils';

export default {
  name: 'date-picker',
  data() {
    return {
    };
  },
  mounted() {
    // this.$attrs 是个 proxy
    console.log('date-picke mounted, $attrs:', this.$attrs, Object(this.$attrs));
    console.log(proxy2attr(this.$attrs));
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-date-picker{

    }
</style>
