var app = new Vue({
  el: "#body",
  data: {
    page_now: 0,
    pages: [
      { name: "首页", href: "index.html" },
      { name: "我们的故事", href: "story.html" },
      { name: "我们的产品", href: "product.html" },
      { name: "我们的部门", href: "department.html" },
      { name: "加入我们", href: "join.html" },
    ],

    slideNav: "Nav-hide",
    top: "topshow",
    scrollHeigh: 0,
    seen: false,

    loading_width: -100,
    speed: 0.2,

    now: 0,
    sites: [
      { img: "/index/story1.png", name: "精弘网络", content: ["2002年5月","精弘网络成立"] },
      {
        img: "/index/story2.png",
        name: "精弘论坛",
        content: ["2003年5月","推出精弘论坛\nbbs.zjut.com"]
      },
      {
        img: "/index/story3.png",
        name: "Feel电台",
        content: ["2004年10月","Feel电台创立\nradio.zjut.com"],
      },
      {
        img: "/index/story4.png",
        name: "学术邮箱",
        content: ["2005年5月","推出第一版学生邮箱\nmail.zjut.com"],
      },
      { img: "/index/story5.jpg", name: "精弘毅行", content: ["2012年3月","第一届精弘毅行"] },
      {
        img: "/index/story6.png",
        name: "百佳网站",
        content: ['2012年12月','荣获第五届"全国高校\n百佳网站"的荣誉称号'],
      },
      {
        img: "/index/story7.jpg",
        name: "网络安全宣传",
        content: ['2015年12月','承办浙江工业大学首届\n"网络安全宣传月"活动'],
      },
      {
        img: "/index/story8.jpg",
        name: "微信服务号",
        content: ['2016年8月','精弘网络微信服务号\n"获全国高校东部地区榜亚军"'],
      },
      { img: "/index/story9.png", name: "微精弘", content: ["2017年2月","微精弘改版正式上线"] },
      { img: "/index/story5.jpg", name: "精弘毅行", content: ["2020年","第十三届精弘毅行"] },
    ],
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrollx, true);
    let timer = setInterval((res) => {
      console.log(this.speed); //每秒运动的距离
      if (this.loading_width >= 0) {
        this.loading_width = -100;
      } else {
        this.loading_width += this.speed;
      }
    }, 10);
  },
  methods: {
    topshow() {
      console.log(100);
      this.top = "topshow";
    },
    tophide() {
      console.log(200);
      this.top = "tophide";
    },
    handleScrollx() {
      if (this.scrollHeigh > -this.$refs.pronbit.getBoundingClientRect().top) {
        this.topshow();
      } else {
        this.tophide();
      }
      this.scrollHeigh = -this.$refs.pronbit.getBoundingClientRect().top;
    },
  },
});
