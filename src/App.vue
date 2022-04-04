<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup


import { nextTick, onMounted, provide, ref } from "vue";
import { useRouter } from 'vue-router';
import Mob_jishu_recruit from "./mob/mob_jishu_recruit.vue";
import Mob_recruit from "./mob/mob_recruit.vue";
import Nav_bar2Vue from "./mob/use/Nav_bar2.vue";
const router = useRouter()
// let isRouterAlive = ref(true)

// provide('isRouterAlive', isRouterAlive.value)

// function reload() {
//     isRouterAlive.value = false

//     nextTick(() => {
//         isRouterAlive.value = true
//     })
// }

onMounted(() => {

    if (_isMobile()) {
        // alert("手机端");
        router.push('/Mob_index');
    } else {
        // alert("pc端");
        document.getElementById("app").style.wid
        router.push('/Des_index');
    }

})

function _isMobile() {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag;
}

</script>

<template>
    <!-- <router-view ></router-view> -->
    <Mob_recruit></Mob_recruit>
    
</template>

<style>
#app {
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
