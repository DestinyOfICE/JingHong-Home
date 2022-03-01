import { createRouter, createWebHashHistory } from 'vue-router'

import Mob_join from "../mob/mob_join.vue"
import Mob_jishu_recruit from "../mob/mob_jishu_recruit.vue"
import Mob_long_recruit from "../mob/mob_long_recruit.vue"
import Mob_recruit from "../mob/mob_recruit.vue"
// import Mob_jishu_recruit from "../mob/Mob_jishu_recruit.vue"
const routes= [

  { path: '/', component: Mob_join },
  { path: '/Mob_jishu_recruit', component: Mob_jishu_recruit },
  { path: '/Mob_long_recruit', component: Mob_long_recruit },
  { path: '/Mob_recruit', component: Mob_recruit },
  // { path: '/Message', component: Message },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router