import { createApp } from 'vue';
import { Button, Input, message } from 'ant-design-vue';
import App from './App.vue';

const app = createApp(App);
app.use(Button);
app.use(Input);

app.config.globalProperties.$message = message;
app.mount('#app');
