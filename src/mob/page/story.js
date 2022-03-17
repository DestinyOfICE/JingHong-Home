var app = new Vue({
  el: "#body",
  data: {
    slideNav: "Nav-hide",
    top: "topshow",
    scrollHeigh: 0,
    seen: false,

    num: 1,
    max: 2,

    now: 0,
    persons: [
      {
        n: 1,
        name: "小树",
        realname: "小树",
        img: "../photo/story/jiyu/小树.jpg",
        introduction:
          "前精弘设计总监\n预计于2022年\n毕业于浙工大\n现就读于浙江工业大学",
        content:
          "大三的时候加入精弘，是我纠结了很久做的一个决定，现在想想倒觉得很庆幸。光是能够遇见你们，就已经很美好了。\n       没有当客服的经验，从新生群同意每一个新生宝宝的入群验证到后来与他们的 见面，对我来说都是新奇的体验。在很多 新生的身上，我都能看到刚收到录取通知 书时我的样子。不耐烦的回答一个个问 题，也是希望她们能少走弯路。\n       深入接触后，发现精弘网络其实是一 个很温暖的组织，可以说很多人都是“为 爱发电”，有着很强的责任心。\n        希望大家在精弘的日子里可以收获到 属于自己的美好。",
      },
      {
        n: 2,
        name: "小花仙",
        realname: "小花仙",
        img: "../photo/story/jiyu/小花仙.jpg",
        introduction:
          "前精弘开发部副部\n2021年毕业于浙工大\n现工作于腾讯(深圳)\nIEG技术运营部",
        content:
          "在开发部，我认识了许多好朋友，和自己喜欢的男孩子在一起，并且找到了自己理想的工作。希望大家能记得自己进入精弘的初心，并且为之努力，每个人都有 自己的理想，进入精弘可能是你实现理想中的某一个很小的步骤，但是也⼗分的重要，在精弘希望大家都可以好好提升自己，并且能够对精弘做出一些贡献~",
      },
      {
        n: 3,
        name: "大可爱",
        realname: "大可爱",
        img: "../photo/story/jiyu/周依佳.jpg",
        introduction:
          "前精弘屏峰校区副会长\n兼常务总监\n2020年毕业于浙工大\n现就读于中国人民大学",
        content:
          "在精弘的两年半时光里，是我大学里最珍贵和幸福的回忆。在这里，我提升了各方面的能力，并收获了美好的友谊，真的很值得怀念。这里有温暖的人，温暖的事，希望大家都能在这里有所成长，有所收获，和精弘一起越来越好！",
      },
      {
        n: 4,
        name: "寒假",
        realname: "寒假",
        img: "../photo/product/3.jpg",
        introduction: "2017届新媒体总监\n2019年毕业于浙工大\n现工作于华安证券",
        content:
          "转眼已经从精弘“毕业”好多年，从大一的办公室干事，到大二的活动部部长，再到大三的新媒体总监，在精弘，你会遇见一群最青春可爱的人，拥有最深刻独特的集体归属感，也会发掘自己无限的可能性。精弘大家庭欢迎你的到来！",
      },
    ],
    person_selected: 0,

    yixing_imgs: [
      "../photo/yixing/1.jpg",
      "../photo/yixing/2.jpg",
      "../photo/yixing/3.jpg",
    ],
    yixing_classes: ["left", "center", "right"],
    // yuren_imgs:["../photo/wangan/1.jpg", "../photo/wangan/2.jpg", "../photo/wangan/3.jpg", "../photo/wangan/4.jpg", "../photo/wangan/5.jpg"],
    // yuren_classes:['left', 'center', 'right', 'after1', 'after2'],
    yuren_imgs: [
      "../photo/wangan/1.jpg",
      "../photo/wangan/2.jpg",
      "../photo/wangan/3.jpg",
    ],
    yuren_classes: ["left", "center", "right"],
    timer: null,

    product_imgs: [
      "../photo/product/2.png",
      "../photo/product/1.png",
      "../photo/product/3.jpg",
      "../photo/product/5.png",
      "../photo/product/6.png",
    ],

    startx: 0,
    // starty: 0,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrollx, true);

    // 1
    this.timer = setInterval(() => {
      this.before("yixing_classes");
      this.before("yuren_classes");
    }, 3000);

    /***禁止滑动***/

    //禁止页面滑动
    document
      .getElementById("carousel")
      .addEventListener("touchmove", this.mo, { passive: false });
    document
      .getElementById("carousel2")
      .addEventListener("touchmove", this.mo, { passive: false });
  },
  // 2
  beforedestroy() {
    clearInterval(this.timer);
  },

  methods: {
    mo(e) {
      e.preventDefault();
    },
    right() {
      var num = this.num + 1;
      if (num == this.max + 1) {
        this.num = 1;
      } else {
        this.num = num;
      }
    },
    left() {
      var num = this.num - 1;
      if (num == 0) {
        this.num = this.max;
      } else {
        this.num = num;
      }
    },
    a() {
      this.now = 2;
    },
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

    // 3
    before(className) {
      clearInterval(this.timer);
      let i = 0;
      this.timer = setInterval(() => {
        if (i > 0) {
          this.before("yixing_classes");
          this.before("yuren_classes");
        }
        i++;
      }, 1500);

      console.log(className);
      let last = this[`${className}`].pop();
      this[`${className}`].unshift(last);
    },
    after(className) {
      clearInterval(this.timer);
      let i = 0;
      this.timer = setInterval(() => {
        if (i > 0) {
          this.before("yixing_classes");
          this.before("yuren_classes");
        }
        i++;
      }, 1500);

      console.log(className);
      let first = this[`${className}`].shift();
      this[`${className}`].push(first);
    },

    change(e, className) {
      // this.before("yixing_classes");
      // this.before("yuren_classes");
      if (e.target.parentNode.classList.contains("left")) {
        this.after(className);
      } else if (e.target.parentNode.classList.contains("right")) {
        this.before(className);
      } else {
        return false;
      }
    },

    touchstart(e) {
      startx = e.touches[0].pageX;
      // starty = e.touches[0].pageY;
      console.log("start:" + startx);
    },
    touchmove(e, className) {
      endx = e.changedTouches[0].pageX;
      // endy = e.changedTouches[0].pageY;
      console.log("end:" + endx);
      if (startx < endx) {
        this.after(className);
      } else {
        this.before(className);
      }
      console.log(className);
    },
  },
});
