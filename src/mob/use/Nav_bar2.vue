<script >
export default {
    props: {
        // page_now: String
    },
    data() {
        return {
            // 滚动前，滚动条距文档顶部的距离
            oldScrollTop: 0,
            pages: [
                { name: "首页", href: "index.html" },
                { name: "我们的故事", href: "story.html" },
                { name: "我们的产品", href: "product.html" },
                { name: "我们的部门", href: "department.html" },
                { name: "加入我们", href: "join.html" },
            ],
            show: true,
            hide: false,
            slideNav: "mob_Nav-hide",
        }
    },
    mounted() {
        // 监听页面滚动事件
        this.oldScrollTop = window.pageYOffset || document.documentElement.scrollTop ||
            document.body.scrollTop
        window.addEventListener("scroll", this.scrolling)
    },
    methods: {
        scrolling() {
            // 滚动条距文档顶部的距离
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
                document.body.scrollTop
            // 滚动条滚动的距离
            let scrollStep = scrollTop - this.oldScrollTop;
            // 更新——滚动前，滚动条距文档顶部的距离
            this.oldScrollTop = scrollTop;
            if (scrollStep <= 0) {
                this.show = true;
                this.hide = false;
                // alert("滚动条向上滚动了！")
            } else {
                this.show = false;
                this.hide = true;
                // alert("滚动条向下滚动了！")
            }
        },
        show1() {
            console.log(123)
            this.slideNav = "mob_Nav-show";
            this.seen = true;
        },
        hide1() {
            this.slideNav = "mob_Nav-hide";
            this.seen = false;
        }
    }
}

</script>

<template>
    <div id="nav">
        <div
            v-bind:class="{ mob_topshow: show, mob_tophide: hide }"
            :style="{ 'background': scrollHeigh < 1 ? 'transparent' : '#D20001', 'box-shadow': scrollHeigh < 1 ? '' : '0 5px 10px #999999' }"
        >
            <div class="button-on" v-on:click="show1" @touchmove.prevent></div>
            <img class="img" src="/top/logo.png" />
        </div>

        <div v-bind:class="slideNav" @touchmove.prevent @mousewheel.prevent>
            <div
                v-bind:class="{ mob_topshow: show, mob_tophide: hide }"
                :style="{ 'background': '#D20001' }"
            >
                <div class="button-off" v-on:click="hide1"></div>
                <img class="img" src="/top/logo.png" />
            </div>
            <div class="mob-nav-list">
                <div>
                    <a href="index.html">首页</a>
                </div>
                <div>
                    <a href="story.html">我们的故事</a>
                </div>
                <div>
                    <a href="product.html">我们的产品</a>
                </div>
                <div>
                    <a href="department.html">我们的部门</a>
                </div>

                <div>
                    <a href="join.html">加入我们</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#nav * {
    border-radius: 0;
}
.img {
    float: left;
}
.button-on {
    position: relative;
    float: right;
    top: 1rem;
    right: 1rem;
    height: 2rem;
    width: 2rem;
    background-image: url(/svg/mulu.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90%;
}
.button-off {
    position: relative;
    float: right;
    top: 1rem;
    right: 1rem;
    height: 2rem;
    width: 2rem;
    background-image: url(/svg/关闭.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90%;
}
#nav img {
    height: 100%;
    float: left;
    transform: scale(0.8);
}

.mob_topshow {
    position: fixed;
    left: 0;
    top: 0rem;
    width: 100%;
    height: 4rem;
    /* background: #d20001; */
    transition: top linear 0.3s;
    z-index: 1000000;
    /* box-shadow: 0 1px 5px #999999; */
}
.mob_topshow img {
    margin: auto;
}
.mob_tophide {
    position: fixed;
    left: 0;
    top: -8rem;
    width: 100%;
    height: 4rem;
    /* background: #d20001; */
    transition: top linear 0.3s;
    z-index: 1000000;
    box-shadow: 0 1px 5px #999999;
}
.mob_Nav-hide {
    position: fixed;
    left: 0;
    top: -100%;
    width: 100%;
    height: 100%;
    background: white;
    transition: left linear 0.3s;
}
.mob_Nav-show {
    position: fixed;
    left: 0rem;
    top: 0;
    width: 100%;
    height: 100%;
    background: white;
    transition: left linear 0.3s;
    z-index: 1000001;
}

.mob-nav-list {
    margin: 4rem 4%;
    width: 92%;
    height: 45%;
}
.mob-nav-list div {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 0;
    border-bottom: 0.1rem solid #efefef;
}
a {
    color: black;
}
</style>