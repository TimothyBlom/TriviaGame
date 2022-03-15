import { createRouter, createWebHistory } from "vue-router"
import startPage from "./views/StartPage.vue"
import questionPage from "./views/QuestionPage.vue"
import resultPage from "./views/ResultPage.vue"

const routes = [
    {
        path: "/",
        component: startPage
    },
    {
        path: "/question",
        component: questionPage
    },
    {
        path: "/result",
        component: resultPage
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})