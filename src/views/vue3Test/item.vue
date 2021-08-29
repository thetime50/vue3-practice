<template>
    <div class="component-component_name">
        {{
            JSON.stringify(obj,null, '  ')
        }}
    </div>
</template>

<script>
export default {
  name: 'component_name',
  props: {
    obj: { type: Object },
  },
  data() {
    return {
    };
  },
  watch: {
    obj(after) {
      console.log(Object.assign(after));
    },
  },
};
</script>

<style lang="scss">
</style>
