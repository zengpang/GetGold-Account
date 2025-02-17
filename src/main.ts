import { routes } from './config/routes';
import { createApp } from 'vue'
import { App } from './App.js'
import { createRouter } from 'vue-router';
import { history } from './shared/history';

import { createPinia,storeToRefs } from 'pinia';
import { useMeStore } from './stores/useMeStore';
const router = createRouter({ history, routes });
const pinia=createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
const meStore = useMeStore()
const { mePromise } = storeToRefs(meStore)
meStore.fetchMe()

//路径白名单（键值对）
const whiteList: Record<string, 'exact' | 'startsWith'> = {
    '/': 'exact',
    '/start': 'exact',
    '/welcome': 'startsWith',
    '/main/login': 'startsWith'
}

//路由守卫
router.beforeEach((to, from) => {
//遍历所有路径白名单键值
    for (const key in whiteList) {
 //通过键值获取路径白名单的值
      const value = whiteList[key]
      if (value === 'exact' && to.path === key) {
        return true
      }
      if (value === 'startsWith' && to.path.startsWith(key)) {
        return true
      }
    }
    return mePromise!.value!.then(
        ()=>true,
        () => '/main/login?return_to=' + to.path
    )
})


