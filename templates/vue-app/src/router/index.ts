import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Dashboard from "../../layout/dashboard.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../pages/Home.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
