import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import Quiz from './components/resources/QuizResources.vue'

const app = createApp(App)

app.use(store);
app.component('quiz-resources', Quiz)
app.mount('#app')


