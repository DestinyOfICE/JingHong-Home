var app = new Vue({
  el: "#body",
  data: {
    page_now: 2,
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

    products: [
      { wh:["1/2","1/2"], img: [["../photo/product/10.png","浙江工业大学精弘网络"],["../photo/product/11.png","精小弘在线"]], title: "/微信公众号/", introduce:"浙江工业大学精弘网络微信公众号,提供结合精弘网络产品的实用功能,推出微精弘板块等系列服务,是工大学子学习生活的好帮手。", n: 0 },
      { wh:["2/3","1/3"], img: [["../photo/product/1.png","微精弘小程序"]], title: "/微精弘/", introduce:"微精弘是专属于zjuter的微信小程序,集课表、成绩查询、考试安排、空教室查询、一卡通、借阅等功能于一身，是工大学子必不可少的一体化校园移动门户。", n: 1 },
      { wh:["1/2","2/4"], img: [["../photo/product/13.png",""]], title: "/视觉影像/", introduce:"校园学习生活、学校各类大型活动的记录团队，专注于摄影、视频前期拍摄和后期剪辑,致力于用最优秀的制作呈现最美的工大人、工大景。视觉影像像期待用最用心的摄制给你带来最高级的视听盛宴!\n欢迎关注 b站:浙江工业大学精弘网络\n微信视频号:精小弘在线。", n: 2 },
      { wh:["2/3","3/4"], img: [["../photo/product/4.png","邮箱网址：mail.zjut.edu.cn"]], title: "/学生邮箱/", introduce:"学校为每一位学生提供邮箱,由精弘网络提供运营服务,是你参与学校工作、学习、生活等各类活动的官方邮箱,伴随你的大学四年乃至一生,毕业后仍可享受校方的服务。", n: 3 },
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
    
    product_show(n) {
      this.seen_pro = true;
      this.now = n;
      console.log(this.now);
    },
    product_hide() {
      this.seen_pro = false;
    },

  },
});
