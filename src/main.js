import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import './assets/style.css';
import router from './router/router-view';

const app = createApp(App);
app.use(router);
app.mount('#app');
