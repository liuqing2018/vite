<template>
  <div class="my-input">
    <label>请输入你的信息: {{info}}</label>
    <a-input v-model:value="info"></a-input>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'MyInput',
  setup() {
    return {
      info: ref('我是默认值'),
    }
  }
}
</script>

<style scoped>
.my-input {
  border: 1px solid blue;
  padding: 20px;
}
</style>