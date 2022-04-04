<script setup>

import Nav_bar1 from './use/Nav_bar1.vue';
// import Des_label2 from './use/des_label2.vue';

import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Footer from './use/footer.vue';

const router = useRouter()
function back(){
    router.push("/Des_long_recruit")
}

let campus = ref(0);
</script>

<template>
    <!-- 组件内容 -->
    <Nav_bar1 page_now="4"></Nav_bar1>

    <div class="des_label1">开发部长期招新</div>
    <!-- <div class="box"> -->
    <div class="basic_info">
        <div class="item_name">姓名</div>
        <div class="item_content" contenteditable="true"></div>
        <div class="item_name">专业</div>
        <div class="item_content" contenteditable="true"></div>
        <div class="item_name">性别</div>
        <select class="item_content">
            <option>男</option>
            <option>女</option>
        </select>
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
            <option value="0" style="display: none;">选择校区</option>
            <option value="1">朝晖</option>
            <option value="2">屏峰</option>
            <option value="3">莫干山</option>
        </select>
    </div>
    <div class="other_info">
        <div class="label_2">必要能力勾选</div>
        <div style="padding-bottom: 20px;border-bottom: 1px black solid;">
            <div class="capability_1">
                <div>
                    <input type="checkbox" />能够独立开发api
                </div>
                <div>
                    <input type="checkbox" />能够使用前端框架
                </div>
                <div>
                    <input type="checkbox" />能够独立撰写说明文档
                </div>
                <div>
                    <input type="checkbox" />能够使用git进行团队协作交互
                </div>
            </div>
            <div class="des_label2">其他能力</div>
            <div class="capability_2" contenteditable="true"></div>
        </div>
        <div class="des_label2">有什么想对开发部说的话，可以在这里告诉我们</div>
        <div class="capability_2" contenteditable="true"></div>
    </div>
    <div style="display:flex;justify-content: space-evenly;">
        <div class="des_button1" @click="back">返回</div>
        <div class="des_button1">提交</div>
    </div>
    <!-- </div> -->
    <Footer></Footer>
</template>

<style>
/* 样式 */
template{
    min-width: 900px;
}

.basic_info {
    display: grid;
    width: 70%;
    grid-template-columns: 13% 33% 13% 33%;
    grid-template-rows: repeat(4, 30px);
    grid-gap: 20px 2.8%;

    margin: auto;
    padding-bottom: 20px;
    border-bottom: 1px black solid;
}
.item_name {
    background-color: #d20001;
    height: 30px;

    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 15px;
}
.item_content {
    /* background-color: #dfdfdf; */
    background-color: white;

    border-radius: 10px;
    text-align: left;

    box-sizing: border-box;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 600;
    border: none;
}

.other_info {
    width: 70%;
    margin: auto;
}


.capability_1 {
    width: 100%;
    height: 80px;
    /* background-color: #dfdfdf; */

    background-color: white;
    border-radius: 10px;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(2, 40px);
}
.capability_1 div {
    display: flex;
    align-items: center;
    margin: 20px;
    /* justify-content: center; */
}
.capability_2 {
    width: 100%;
    height: 100px;
    /* background-color: #dfdfdf; */
    background-color: white;

    border-radius: 10px;
    text-align: left;

    box-sizing: border-box;
    padding: 5px 5px;
    font-size: 12px;
    font-weight: 600;
}
</style>