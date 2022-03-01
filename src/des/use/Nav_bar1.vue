<script >
export default {
    props: {
        page_now: String
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
    }
}

</script>

<template>
    <div v-bind:class="{ topshow: show, tophide: hide }">
        <img src="/top/logo.png" />
        <nav>
            <div class="nav-list">
                <div
                    v-for="page,index in pages"
                    :class="page_now == index ? 'page_selected' : 'page_unselected'"
                >
                    <a :href="page.href" style="height: 100%">{{ page.name }}</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>
a {
    text-decoration: none;
}
.topshow {
    position: sticky;
    /* left: 0; */
    left: auto;
    top: 0rem;
    width: 100%;
    min-width: 900px;
    height: 96px;
    transition: top linear 0.3s;
    border-radius: 0;
    background-color: #d20001;
    z-index: 10;
}
.topshow img,
.tophide img {
    width: 139px;
    height: 58px;
    margin-top: 20px;
    margin-left: 36px;
    float: left;
    transform: scale(1.2);
}
.tophide {
    position: sticky;
    left: 0;
    top: -16vh;
    width: 100%;
    min-width: 1000px;
    height: 16vh;
    /* background: white; */
    transition: top linear 0.3s;
    border-radius: 0;
    background-color: #d20001;

    z-index: 10;
}
img {
    float: left;
    height: 100%;
}
nav {
    width: 70%;
    height: 100%;
    float: right;
    display: flex;
}
.nav-list {
    margin-right: 30px;
    display: flex;
    align-items: center;
    width: 100%;
}
.nav-list div {
    width: 20%;
    position: relative;
    border-radius: 8vh;
    font-size: 18px;
    margin: 1rem;
    padding: 3px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.page_unselected a {
    color: white;
    font-family: song;
    text-align: center;
    line-height: 18px;
}
.page_selected {
    background: white;
}
.page_selected a {
    color: #d20001;
    font-family: song;
}
.page_selected::after {
    display: block;
    content: "";
    width: 80%;
    position: absolute;
    bottom: -10px;
    border-bottom: 3px solid white;
}
</style>