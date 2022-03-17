var app = new Vue({
    el: "#body",
    data: {
      slideNav: "Nav-hide",
    top: "topshow",
    scrollHeigh: 0,
    seen: false,

      departments:[
          {img:"../photo/svg/常务copy.svg", name:"常务板块", href:"./department/changwu.html"},
          {img:"../photo/svg/技术copy.svg", name:"技术板块", href:"./department/jishu.html"},
          {img:"../photo/svg/设计copy.svg", name:"设计板块", href:"./department/sheji.html"},
          {img:"../photo/svg/运营copy.svg", name:"运营板块", href:"./department/yunying.html"},
          {img:"../photo/svg/新媒体copy.svg", name:"新媒体板块", href:"./department/xinmeiti.html"},
          {img:"../photo/svg/易班copy.svg", name:"易班文化工作站", href:"./department/yiban.html"},
        ]
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
    },
  });
  