var app = new Vue({
  el: "#body",
  data: {
    slideNav: "Nav-hide",
    top: "topshow",
    scrollHeigh: 0,
    seen: false,
    angle: (Math.atan(0.5) * 180) / Math.PI + "deg",
    angle2: (-Math.atan(0.5) * 180) / Math.PI + "deg",
    scale: 1 / Math.cos(Math.atan(0.5)),

    loading_width: -100,
    speed: 0.2,

    items: [
      {
        id: 0,
        img: "../photo/index/story1.png",
        content: "2002年5月\n精弘网络成立",
      },
      {
        id: 1,
        img: "../photo/index/story2.png",
        time: "2003年5月",
        content: "推出精弘论坛\nbbs.zjut.com",
      },
      {
        id: 2,
        img: "../photo/index/story3.png",
        time: "2004年10月",
        content: "Feel电台创立\nradio.zjut.com",
      },
      {
        id: 3,
        img: "../photo/index/story4.png",
        time: "2006年5月",
        content: "推出第一版学生邮箱\nmail.zjut.com",
      },
      {
        id: 4,
        img: "../photo/index/story5.jpg",
        time: "2012年3月",
        content: "第一届精弘毅行",
      },
      {
        id: 5,
        img: "../photo/index/story6.png",
        time: "2012年12月",
        content: '荣获第五届\n"全国高校百佳网站"\n荣誉称号',
      },
      {
        id: 6,
        img: "../photo/index/story7.jpg",
        time: "2015年12月",
        content: '承办浙江工业大学首届\n"网络安全宣传月"活动',
      },
      {
        id: 7,
        img: "../photo/index/story8.jpg",
        time: "2016年8月",
        content: '精弘网络微信服务号获\n"全国高校东部地区榜亚军"',
      },
      {
        id: 8,
        img: "../photo/index/story9.png",
        time: "2017年2月",
        content: "微精弘改版正式上线",
      },
      {
        id: 9,
        img: "../photo/index/story5.jpg",
        time: "2020年2月",
        content: "第十三届精弘毅行",
      },
    ],
    top_d: "0px",
    top111: 0,

    introduce_content:
      "成立于2002年5月，\n精弘的名字取自工大学风“取精用弘”，\n是浙江工业大学的学术网络组织。\n精弘秉承着自由、共享、团结、创新的精神，\n全心全意为在校师生提供优质的服务\n和交流平台，收到了广泛好评。",
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrollx, true);
    let timer = setInterval((res) => {
      if (this.loading_width >= 0) {
        this.loading_width = -100;
      } else {
        this.loading_width += this.speed;
      }
    }, 10);
  },
  methods: {
    show(e) {
      this.slideNav = "Nav-show";
      this.seen = true;

    },
    hide() {
      this.slideNav = "Nav-hide";
      this.seen = false;
    },
    topshow() {
      this.top = "topshow";
      console.log(1);
    },
    tophide() {
      this.top = "tophide";
    },
    handleScrollx() {
      if (this.scrollHeigh > -this.$refs.pronbit.getBoundingClientRect().top) {
        this.topshow();
      } else {
        this.tophide();
      }
      this.scrollHeigh = -this.$refs.pronbit.getBoundingClientRect().top;
      let h =
        document.documentElement.clientHeight || document.body.clientHeight;
      this.top_d =
        h - this.$refs.history.getBoundingClientRect().top - 100 + "px";

      this.top111 = this.$refs.historyline.getBoundingClientRect().top;
      console.log(this.scrollHeigh);
      // console.log(this.$refs.historyline.getBoundingClientRect().top);
      // this.nextTick(function(){ console.log('v-for渲染已经完成') })
    },
    scrollToTop() {
      document.getElementById("introduce").scrollIntoView({
        behavior: "smooth",
      });
      let timer = setInterval((res) => {
        // if()
      }, 10);
    },
  },
});
