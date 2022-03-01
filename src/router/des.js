import { createRouter, createWebHashHistory } from 'vue-router'

import Des_join from "../des/des_join.vue"
import Des_jishu_recruit from "../des/des_jishu_recruit.vue"
import Des_long_recruit from "../des/des_long_recruit.vue"
import Des_recruit from "../des/des_recruit.vue"
// import Des_jishu_recruit from "../des/Des_jishu_recruit.vue"
const routes= [

  { path: '/', component: Des_join },
  { path: '/Des_jishu_recruit', component: Des_jishu_recruit },
  { path: '/Des_long_recruit', component: Des_long_recruit },
  { path: '/Des_recruit', component: Des_recruit },
  // { path: '/Message', component: Message },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router