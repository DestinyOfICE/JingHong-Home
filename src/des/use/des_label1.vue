<script >
export default {
    props: {
        photo: String,
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
    <div class="title-style">
        <img class="title-img" :src="photo" />{{content}}
    </div>
</template>

<style>
/* 样式 */
.title-style {
    width: 20%;
    padding: 20px 0;
    background-color: #d20001;
    border-radius: 10px;

    color: white;
    font-size: 20px;
    line-height: 30px;

    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* box-shadow: 0 5px 10px #999999; */
}
.title-img {
    width: 30px;
    height: 30px;
    margin: 0 15px 0 20px;
    /* background: url(../photo/svg/mulu.svg) no-repeat; */
}
</style>