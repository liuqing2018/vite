<template>
  <a-select
      ref="select"
      v-model:value="myselect"
      style="width: 120px"
      @focus="focus"
      @change="handleChange"
  >
    <a-select-option value="jack">Jack</a-select-option>
    <a-select-option value="lucy">Lucy</a-select-option>
    <a-select-option value="disabled" disabled>Disabled</a-select-option>
    <a-select-option value="Yiminghe">yiminghe</a-select-option>
  </a-select>
  <a-select v-model:value="value2" style="width: 120px" disabled>
    <a-select-option value="lucy">Lucy</a-select-option>
  </a-select>
  <a-select v-model:value="value3" style="width: 120px" loading>
    <a-select-option value="lucy">Lucy</a-select-option>
  </a-select>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'MySelect',
  setup() {
    return {
      myselect: ref(),
    }
  }
}
</script>

<style scoped>

</style>