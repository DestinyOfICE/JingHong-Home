var app = new Vue({
  el: "#body",
  data: {
    slideNav: "Nav-hide",
    top: "topshow",
    scrollHeigh: 0,
    seen: false,
    seen_pro:false,

    products: [
      { img: "../photo/product/1.png", title: "微信小程序", n: 0 },
      { img: "../photo/product/2.png", title: "微信服务号", n: 1 },
      { img: "../photo/product/3.jpg", title: "视觉影像", n: 2 },
      { img: "../photo/product/4.png", title: "学生邮箱", n: 3 },
    ],
    now: 0,
    product_details: [
      { title: "微精弘", img: "../photo/product/1.png", content:  "微精弘是专属于zjuter的微信小程序，集课表、成绩查询、考试安排、空教室查询、一卡通、借阅等功能于一身，是工大学子必不可少的一体化校园移动门户。"},
      { title: "微信服务号", img: "../photo/product/2.png", content:"浙江工业大学精弘网络微信公众号，提供结合精弘网络产品的实用功能，推出微精弘板块等系列服务，是工大学子学习生活的好帮手。"  },
      { title: "视觉影像", img: "../photo/product/3.jpg", content: "校园学习生活、学校各类大型活动的记录团队，专注于摄影、视频前期拍摄和后期剪辑，致力于用最优秀的制作呈现最美的工大人、工大景。视觉影像像期待用最用心的摄制给你带来最高级的视听盛宴!" },  //欢迎关注 b站:浙江工业大学精弘网络微信视频号:精小弘在线。
      { title: "学术邮箱", img: "../photo/product/4.png", content: "学校为每一位学生提供邮箱，由精弘网络提供运营服务，是你参与学校工作、学习、生活等各类活动的官方邮箱，伴随你的大学四年乃至一生，毕业后仍可享受校方的服务。" },
    ],
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrollx, true);
  },
  methods: {
      show() {
        console.log(0);
        this.slideNav = "Nav-show";
        this.seen = true;
      },
      hide() {
        console.log(1);
        this.slideNav = "Nav-hide";
        this.seen = false;
      },
      topshow() {
        console.log(0);
        this.top = "topshow";
      },
      tophide() {
        console.log(1);
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
