<template>
    <div class="component-composition-Api">
        composition-Api
        <caChild />
    </div>
</template>

<script>
/* message */
import caChild from './caChild.vue';


export default {
  name: 'composition-Api',
  components: {
    caChild,
  },
  data() {
    return {
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-composition-Api{

    }
</style>
