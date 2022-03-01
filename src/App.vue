<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import desindex from "./des/index.vue"
import desjoin from "./des/des_join.vue"
import deslong_recruit from "./des/des_long_recruit.vue";
import desJishu_recruit from "./des/des_jishu_recruit.vue";
import desRecruit from "./des/des_recruit.vue";
// import Mob_recruit from "./mob/mob_recruit.vue";
// import Nav_bar2 from "./mob/use/Nav_bar2.vue";
// import Mob_join from "./mob/mob_join.vue";
// import Mob_long_recruit from "./mob/mob_long_recruit.vue";
// import Mob_jishu_recruit from "./mob/mob_jishu_recruit.vue";
import { onMounted } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter()

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
    <router-view></router-view>
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
