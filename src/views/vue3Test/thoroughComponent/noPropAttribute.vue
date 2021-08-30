<template>
    <div class="component-no-prop-attribute">
      <h3>非 Prop 的 Attribute</h3>
      <datePicker :size="7" @change="onChange"/>
    </div>
</template>

<script>
/* message */
import datePicker from './datePicker.vue';

export default {
  name: 'no-prop-attribute',
  components: {
    datePicker,
  },
  data() {
    return {
      // 
    };
  },
  methods: {
    onChange(e) {
      console.log('date-picker change', e.target.value, e);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-no-prop-attribute{

    }
</style>
