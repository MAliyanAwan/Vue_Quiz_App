import { createStore } from "vuex";
import questionsModules from './modules/questionsstore/index.js'

const store = createStore({
    modules: {
        questions: questionsModules,
    },
});


export default store;