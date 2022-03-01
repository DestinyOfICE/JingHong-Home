<script setup>


import Des_label2 from './use/des_label2.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

function back() {
    router.push("/")
}
</script>

<template>
    <!-- 组件内容 -->

    <div style="margin-top: 80px;"></div>
    <div class="mob_label_1">报名表</div>
    <div style="width: 90%;margin: auto;">
        <div class="mob_basic_info">
            <div class="mob_item_name">姓名</div>
            <div class="mob_item_content" contenteditable="true"></div>
            <div class="mob_item_name">专业</div>
            <div class="mob_item_content" contenteditable="true"></div>
            <div class="mob_item_name">性别</div>
            <select class="mob_item_content">
                <option>男</option>
                <option>女</option>
            </select>
            <div class="mob_item_name">联系电话</div>
            <div class="mob_item_content" contenteditable="true"></div>
            <div class="mob_item_name">学号</div>
            <div class="mob_item_content" contenteditable="true"></div>
            <div class="mob_item_name">QQ</div>
            <div class="mob_item_content" contenteditable="true"></div>
            <div class="mob_item_name">学院</div>
            <div class="mob_item_content" contenteditable="true"></div>
            <div class="mob_item_name">校区</div>
            <select class="mob_item_content">
                <option>朝晖</option>
                <option>屏峰</option>
                <option>莫干山</option>
            </select>
        </div>
        <div class="mob_other_info">
            <div class="mob_choice">
                <div class="mob_item_name">第一志愿</div>
                <select class="mob_item_content">
                    <option>朝晖</option>
                    <option>屏峰</option>
                    <option>莫干山</option>
                </select>

                <div class="mob_item_name">第二志愿</div>
                <select class="mob_item_content">
                    <option>朝晖</option>
                    <option>屏峰</option>
                    <option>莫干山</option>
                </select>
            </div>
            <div class="mob_label_2">来一段简单的自我介绍吧！</div>
            <div class="mob_capability_2" contenteditable="true"></div>

            <div class="mob_label_2">最后，有什么想对精弘网络说的话，可以在这里畅所欲言哦~</div>
            <div class="mob_capability_2" contenteditable="true"></div>
        </div>
        <div style="display:flex;">
            <div class="mob_button1" @click="back">返回</div>
            <div class="mob_button1">提交</div>
        </div>
    </div>
</template>

<style>
/* 样式 */

.mob_capability_2 {
    width: 100%;
    height: 100px;
    background-color: #dfdfdf;

    border-radius: 10px;
}

.mob_choice {
    padding: 20px 0;
    border-bottom: 1px black solid;

    display: grid;
    justify-content: center;
    grid-template-columns: 30% 60%;
    grid-template-rows: repeat(2, 30px);
    grid-gap: 10px 2.8%;
}
</style>