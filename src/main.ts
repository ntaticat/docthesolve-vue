import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { VueSignalR } from '@dreamonkey/vue-signalr'
import { HubConnectionBuilder } from '@microsoft/signalr'

const connection = new HubConnectionBuilder()
  .withUrl('http://localhost:5217/incidenceHub')
  .build();

const app = createApp(App);

app.use(router);
app.use(VueSignalR, {connection});

app.mount('#app')
