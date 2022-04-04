<script setup>

import Nav_bar1 from './use/Nav_bar1.vue';
import Des_label2 from './use/des_label2.vue';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Footer from './use/footer.vue';

const router = useRouter()
function back() {
    router.push("/Des_join")
}

let campus = ref(0);
let choices = ref({
    "1": ["开发", "产品", "小弘"],
    "2": ["办公室", "新媒体"],
    "3": ["易班", "运维"],
})
let choice1 = ref("请先选择志愿");
let choice2 = ref("请先选择志愿");

watch(campus, (newValue, oldValue) => {
    console.log(newValue, '--', oldValue);
    choice1.value = "请先选择志愿";
    choice2.value = "请先选择志愿";
})
watch(choice1, (newValue, oldValue) => {
    // console.log(newValue, '--', oldValue);
    console.log(choice1.value)
})
watch(choice2, (newValue, oldValue) => {
    // console.log(newValue, '--', oldValue);
    console.log(choice2.value)
})

</script>

<template>
    <!-- 组件内容 -->
    <Nav_bar1 page_now="4"></Nav_bar1>
    <div class="des_label1">报名表</div>
    <!-- <div class="box"> -->
    <div class="basic_info">
        <div class="item_name">姓名</div>
        <div class="item_content" contenteditable="true"></div>
        <div class="item_name">专业</div>
        <div class="item_content" contenteditable="true"></div>
        <div class="item_name">性别</div>
        <div class="item_content" contenteditable="true"></div>
        <!-- <select class="item_content">
            <option>男</option>
            <option>女</option>
        </select>-->
        <div class="item_name">联系电话</div>
        <div class="item_content" contenteditable="true"></div>
        <div class="item_name">学号</div>
        <div class="item_content" contenteditable="true"></div>
        <div class="item_name">QQ</div>
        <div class="item_content" contenteditable="true"></div>
        <div class="item_name">学院</div>
        <div class="item_content" contenteditable="true"></div>
        <div class="item_name">校区</div>
        <select class="item_content" v-model="campus">
            <option value="0" style="display: none;">选择后显示志愿</option>
            <option value="1">朝晖</option>
            <option value="2">屏峰</option>
            <option value="3">莫干山</option>
        </select>
    </div>
    <div class="other_info">
        <div
            style="padding: 20px 0;border-bottom: 1px black solid;display: flex;justify-content: space-between;"
        >
            <div class="item_name">第一志愿</div>
            <select
                class="item_content"
                v-model="choice1"
                :disabled="'true' ? campus == 0 : 'false'"
            >
                <option style="display: none;">请先选择志愿</option>
                <option
                    v-for="(item, index) in choices[campus]"
                    :value="index"
                    :disabled="'disabled' ? index == choice2 : 'true'"
                >{{ item }}</option>
            </select>

            <div class="item_name">第二志愿</div>
            <select
                class="item_content"
                v-model="choice2"
                :disabled="'true' ? campus == 0 : 'false'"
            >
                <option style="display: none;">请先选择志愿</option>
                <option
                    v-for="(item, index) in choices[campus]"
                    :value="index"
                    :disabled="'disabled' ? index == choice1 : 'true'"
                >{{ item }}</option>
            </select>
        </div>
        <div class="des_label2">来一段简单的自我介绍吧！</div>
        <div class="capability_2" contenteditable="true"></div>

        <div class="des_label2">最后，有什么想对精弘网络说的话，可以在这里畅所欲言哦~</div>
        <div class="capability_2" contenteditable="true"></div>
    </div>
    <div style="display:flex;justify-content: space-evenly">
        <div class="des_button1" @click="back">返回</div>
        <div class="des_button1">提交</div>
    </div>
    <!-- </div> -->
    <Footer></Footer>
</template>

<style>
/* 样式 */
template {
    min-width: 900px;
}
.other_info .item_name {
    width: 15%;
    height: 40px;
}

.other_info .item_content {
    width: 30%;
}

.other_info {
    width: 70%;
    margin: auto;
}
.other_info option {
    width: 10px;
}

.des_label1 {
    min-width: 120px;
    width: fit-content;
    height: 45px;
    padding: 0 20px;
    margin: 30px auto;
    border-radius: 20px;

    background-color: #d20001;

    color: white;
    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 0 5px 10px #999999; */
}
.des_label2 {
    width: fit-content;
    height: fit-content;
    margin: 10px 0;
    padding: 0 10px;
    border-radius: 5px;

    background-color: #d20001;

    color: white;
    font-size: 12px;
    line-height: 30px;
    text-align: left;

    display: flex;
    justify-content: center;
    align-items: center;

    /* box-shadow: 0 5px 10px #999999; */
}
.des_button1 {
    width: 150px;
    height: 40px;
    /* padding: 0 20px; */
    margin: 15px auto;
    border-radius: 20px;

    background-color: #d20001;

    color: white;
    font-size: 18px;
    line-height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 0 5px 10px #999999; */
}
</style>