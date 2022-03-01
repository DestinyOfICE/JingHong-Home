var app = new Vue({
  el: "#body",
  data: {
    page_now: 3,
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

    departments: [
      { img: "../photo/svg/常务.svg", name: "常务板块", href: "./department/changwu.html" },
      { img: "../photo/svg/技术.svg", name: "技术板块", href: "./department/jishu.html" },
      { img: "../photo/svg/运营.svg", name: "运营板块", href: "./department/yunying.html" },
      { img: "../photo/svg/设计.svg", name: "设计板块", href: "./department/sheji.html" },
      { img: "../photo/svg/新媒体.svg", name: "新媒体板块", href: "./department/xinmeiti.html" },
      { img: "../photo/svg/易班.svg", name: "易班文化工作站", href: "./department/yiban.html" },
    ],
  },
  mounted() {
      window.addEventListener("scroll", this.handleScrollx, true);
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
      this.height = this.scrollHeigh;
    },
  },
});
