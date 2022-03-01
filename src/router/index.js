import { createRouter, createWebHashHistory } from 'vue-router'

import Des_join from "../des/des_join.vue"
import Des_jishu_recruit from "../des/des_jishu_recruit.vue"
import Des_long_recruit from "../des/des_long_recruit.vue"
import Des_recruit from "../des/des_recruit.vue"

import Des_index from "../des/des_index.vue"
import Mob_index from "../mob/mob_index.vue"

import Mob_join from "../mob/mob_join.vue"
import Mob_jishu_recruit from "../mob/mob_jishu_recruit.vue"
import Mob_long_recruit from "../mob/mob_long_recruit.vue"
import Mob_recruit from "../mob/mob_recruit.vue"
const routes= [

  { path: '/', component: Des_index },
  { path: '/Des_index', component: Des_index },
  { path: '/Mob_index', component: Mob_index },

  { path: '/Des_join', component: Des_join },
  { path: '/Des_jishu_recruit', component: Des_jishu_recruit },
  { path: '/Des_long_recruit', component: Des_long_recruit },
  { path: '/Des_recruit', component: Des_recruit },

  { path: '/Mob_join', component: Mob_join },
  { path: '/Mob_jishu_recruit', component: Mob_jishu_recruit },
  { path: '/Mob_long_recruit', component: Mob_long_recruit },
  { path: '/Mob_recruit', component: Mob_recruit },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router