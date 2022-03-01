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
    <div id="body" ref="pronbit">
        <div class="start" id="start">
            <div class="start-content">
                <div class="content1">精弘网络,取精用弘</div>
                <div class="content2">
                    <div>向下滑动</div>
                    <div class="start-img"></div>
                    <div>探索精弘</div>
                </div>
            </div>
        </div>

        <div class="introduce">
            <img class="introduce-img2" src="../photo/index/taiquandao.png" />
            <div class="introduce-content">
                <div class="title">
                    <span>精弘网络⼁Jinghong Union</span>
                </div>
                <div class="content">
                    成立于2002年5月，
                    <br />精弘的名字取自工大学风“取精用弘”，
                    <br />是浙江工业大学的学术网络组织。
                    <br />精弘网络秉承着自由、共享、团结、创新的精神，
                    <br />全心全意为在校师生提供优质的服务
                    <br />和交流平台，收到了广泛好评。
                    <br />
                </div>
            </div>
            <img class="introduce-img1" src="../photo/index/muqiu.png" />
        </div>

        <div class="history">
            <div class="title-style">
                <h1>精弘大事记</h1>
            </div>
            <div class="qufudong">
                <div class="history-left">
                    <div
                        class="history-img"
                        v-bind:style="{ 'background-image': 'url(' + sites[now].img + ')' }"
                    ></div>
                    <div class="history-img-name">{{ sites[now].name }}</div>
                </div>
                <div class="history-right">
                    <div class="time">{{ sites[now].content[0] }}</div>
                    <div class="event">{{ sites[now].content[1] }}</div>
                    <div class="history-right-img"></div>
                </div>
            </div>
            <div class="history-choice">
                <div class="red-line"></div>
                <div class="choices" v-for="(site, index) in sites" v-on:click="now = index">
                    <div
                        :class="index == now ? 'big-ball' : 'ball'"
                        v-bind:style="{ 'background-image': 'url(' + site.img + ')', 'border-color': (index % 2 == 1 ? '#D20001' : '#fab3b3') }"
                    ></div>
                </div>
            </div>
        </div>

        <div class="story">
            <div class="img"></div>

            <div class="content">
                <a href="story.html">
                    <div class="story-title">
                        <div>我们的故事</div>
                        <div class="right-arrow"></div>
                    </div>
                </a>
                <div class="story-content">因梦想，我们齐聚一堂；因使命，我们同舟共济。</div>
            </div>
        </div>

        <div class="end">
            <div class="end-1">
                <a>
                    <div class="follow-img1"></div>
                </a>
                <div class>
                    <div class="title-font1">联系我们 | 关注我们</div>
                    <div class="title-font2">jhwl@zjut.edu.cn</div>
                </div>
                <a href="https://github.com/zjutjh" target="_blank">
                    <div class="follow-img2"></div>
                </a>
            </div>

            <div class="end-iron" id="end-iron"></div>

            <div class="end-recruit">
                <div class="title-font">精弘招聘</div>
                <a href="join.html">
                    <div class="recruit-button">加入我们</div>
                </a>
            </div>

            <div class="loading">
                <div class="loading-text">
                    <img src="../photo/index/2021.png" />
                </div>
                <div class="loading-border">
                    <div
                        id="loading-img"
                        class="loading-img"
                        v-bind:style="{ left: loading_width + '%' }"
                    ></div>
                </div>
                <div class="loading-text">
                    <img src="../photo/index/loading.png" />
                </div>
            </div>
        </div>

        <div class="footer">©2021 浙江工业大学-精弘网络</div>
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
    width: 75%;
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