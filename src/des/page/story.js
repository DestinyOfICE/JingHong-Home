var app = new Vue({
  el: "#body",
  data: {
    page_now: 1,
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

    num: 1,
    max: 2,

    now: 1,
    persons: [
      {
        n: 1,
        name: "小树",
        img: "../photo/story/jiyu/小树.jpg",
        introduction:
          "小树\n\n前精弘设计总监\n预计于2022年毕业于浙工大\n现就读于浙江工业大学",
        content:
          "大三的时候加入精弘，是我纠结了很久做的一个决定，现在想想倒觉得很庆幸。光是能够遇见你们，就已经很美好 了。\n       没有当客服的经验，从新生群同意每一个新生宝宝的入群验证到后来与他们的见面，对我来说都是新奇的体验。在很多新生的身上，我都能看到刚收到录取通知书时我的样子。不耐烦的回答一个个问题，也是希望她们能少走弯路。\n       深入接触后，发现精弘网络其实是一个很温暖的组织，可以说很多人都是“为爱发电”，有着很强的责任心。\n        希望大家在精弘的日子里可以收获到属于自己的美好。",
      },
      {
        n: 2,
        name: "小花仙",
        img: "../photo/story/jiyu/小花仙.jpg",
        introduction:
          "小花仙\n\n前精弘开发部副部\n2021年毕业于浙工大\n现工作于腾讯(深圳)IEG技术运营部",
        content:
          "在开发部，我认识了许多好朋友，和自己喜欢的男孩子在一起，并且找到了自己理想的工作。希望大家能记得自己进入精弘的初心，并且为之努力，每个人都有自己的理想，进入精弘可能是你实现理想中的某一个很小的步骤，但是也⼗分的重要，在精弘希望大家都可以好好提升自己，并且能够对精弘做出一些贡献~",
      },
      {
        n: 3,
        name: "大可爱",
        img: "../photo/story/jiyu/周依佳.jpg",
        introduction:
          "大可爱\n\n前精弘屏峰校区副会长兼常务总监\n2020年毕业于浙工大\n现就读于中国人民大学",
        content:
          "在精弘的两年半时光里，是我大学里最珍贵和幸福的回忆。在这里，我提升了各方面的能力，并收获了美好的友谊，真的很值得怀念。这里有温暖的人，温暖的事，希望大家都能在这里有所成长，有所收获，和精弘一起越来越好！",
      },
      {
        n: 4,
        name: "寒假",
        img: "../photo/product/3.jpg",
        introduction:
          "寒假\n\n2017届新媒体总监\n2019年毕业于浙工大\n现工作于华安证券",
        content:
          "转眼已经从精弘“毕业”好多年，从大一的办公室干事，到大二的活动部部长，再到大三的新媒体总监，在精弘，你会遇见一群最青春可爱的人，拥有最深刻独特的集体归属感，也会发掘自己无限的可能性。精弘大家庭欢迎你的到来！",
      },
    ],
    index: 3,
    jiyu_classes: ["jiyuleft", "jiyucenter", "jiyuright", "jiyuafter"],

    photos: [
      [170, 26, 164, 102, "../photo/story/shenghuo/1.jpg", 3],
      [306, 0, 280, 177, "../photo/story/shenghuo/2.jpg", 1],
      [601, 89, 111, 67, "../photo/story/shenghuo/3.jpg", 5],
      [25, 89, 252, 156, "../photo/story/shenghuo/4.jpg", 2],
      [241, 205, 134, 83, "../photo/story/shenghuo/5.jpg", 6],
      [444, 124, 186, 116, "../photo/story/shenghuo/6.jpg", 4],
      [537, 177, 204, 127, "../photo/story/shenghuo/7.jpg", 12],
      [0, 225, 200, 125, "../photo/story/shenghuo/8.jpg", 8],
      [95, 324, 189, 118, "../photo/story/shenghuo/9.jpg", 7],
      [306, 262, 283, 176, "../photo/story/shenghuo/10.jpg", 11],
      [256, 405, 164, 102, "../photo/story/shenghuo/11.jpg", 9],
      [507, 375, 159, 102, "../photo/story/shenghuo/12.jpg", 10],
    ],
    shenghuo_seen: false,
    shenghuo_selected: null,

    yixing_imgs: [
      "../photo/yixing/1.jpg",
      "../photo/yixing/2.jpg",
      "../photo/yixing/3.jpg",
    ],
    yixing_classes: ["left", "center", "right"],
    yuren_imgs: [
      "../photo/wangan/1.jpg",
      "../photo/wangan/2.jpg",
      "../photo/wangan/3.jpg",
      "../photo/wangan/4.jpg",
      "../photo/wangan/5.jpg",
    ],
    yuren_classes: ["left", "center", "right", "after1", "after2"],
    timer: null,

    product_imgs: [
      "../photo/product/2.png",
      "../photo/product/1.png",
      "../photo/product/3.jpg",
      "../photo/product/5.png",
      "../photo/product/6.png",
    ],
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrollx, true);

    this.timer = setInterval(() => {
      this.yixing_before();
    }, 3000);
    this.timer2 = setInterval(() => {
      this.yuren_before();
    }, 3000);

    // setInterval(() => {
    //   this.jiyu_after();
    //   setInterval(() => {
    //     this.jiyu_before();
    //   }, 2000);
    // }, 2000);
  },

  beforedestroy() {
    clearInterval(this.timer);
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
    toggle_on(n) {
      console.log(1);
      this.shenghuo_seen = true;
      this.shenghuo_selected = n;
      // $(".toggle .timg").fadeIn(600);
      // $("html").css("overflow", "hidden"); //防止页面滑动
    },
    toggle_off() {
      console.log(1);
      // $(".toggle .timg").css("display", "none");
      this.shenghuo_seen = false;
      // $("html").css("overflow", "");
    },

    yixing_before() {
      clearInterval(this.timer);
      let i = 0;
      this.timer = setInterval(() => {
        if (i > 0) {
          this.yixing_before();
        }
        i++;
      }, 1500);

      let last = this.yixing_classes.pop();
      this.yixing_classes.unshift(last);
    },
    yixing_after() {
      clearInterval(this.timer);
      let i = 0;
      this.timer = setInterval(() => {
        if (i > 0) {
          this.yixing_before();
        }
        i++;
      }, 1500);

      let first = this.yixing_classes.shift();
      this.yixing_classes.push(first);
    },
    yuren_before() {
      clearInterval(this.timer2);
      let i = 0;
      this.timer2 = setInterval(() => {
        if (i > 0) {
          this.yuren_after();
        }
        i++;
      }, 1500);

      let last = this.yuren_classes.pop();
      this.yuren_classes.unshift(last);
    },
    yuren_after() {
      clearInterval(this.timer2);
      let i = 0;
      this.timer2 = setInterval(() => {
        if (i > 0) {
          this.yuren_before();
        }
        i++;
      }, 1500);

      let first = this.yuren_classes.shift();
      this.yuren_classes.push(first);
    },
    change(e) {
      if (e.target.parentNode.classList.contains("left")) {
        this.yixing_after();
      } else if (e.target.parentNode.classList.contains("right")) {
        this.yixing_before();
      } else {
        return false;
      }
    },

    jiyu_before() {
      this.jiyu_classes[this.index] = "jiyubefore";
      let last = this.jiyu_classes.pop();
      this.jiyu_classes.unshift(last);
      this.index = (this.index + 1) % 4;

      setTimeout(() => {
        let last = this.jiyu_classes.shift();
        this.jiyu_classes.unshift(last);
        this.jiyu_classes[this.index] = "jiyuafteractive";
      }, 500);
    },

    jiyu_after() {
      let last = this.jiyu_classes.shift();
      this.jiyu_classes.unshift(last);
      this.jiyu_classes[this.index] = "jiyubeforeactive";
      setTimeout(() => {
        this.jiyu_classes[this.index] = "jiyuafter";
        let last = this.jiyu_classes.shift();
        this.jiyu_classes.push(last);
        this.index = (this.index + 3) % 4;   //[0,3]
        console.log(this.index)
        console.log(this.jiyu_classes[this.index])
      }, 10);
    },
  },
});
