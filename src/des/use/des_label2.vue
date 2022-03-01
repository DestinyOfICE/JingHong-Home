<script >
export default {
    props: {
        content: String
    },
    data() {
        return {
            //返回数据
        }
    },
    mounted() {
        //初始化
        console.log(this.photo)
    },
    methods: {
        //所有调用的函数
    }
}

</script>

<template>
    <!-- 组件内容 -->
    <div class="des_title-style2">{{content}}</div>
</template>

<style>
/* 样式 */
.des_title-style2 {
    width: 180px;
    height: 60px;

    background-color: #d20001;

    color: white;
    font-size: 20px;
    line-height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 0 5px 10px #999999; */

    position: relative;
    left: -50px;
}
</style>