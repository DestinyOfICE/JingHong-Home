<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Nav_bar1 from './use/Nav_bar1.vue';
import des_label1 from './use/des_label1.vue';
import Des_label1 from './use/des_label1.vue';
import des_label2 from './use/des_label2.vue';
import start from './use/start.vue';
// import Test from '../components/test.vue';
</script>

<template>
  <Nav_bar1 page_now="0"></Nav_bar1>
  <!-- <Des_label1 photo="/svg/部门.svg" content="我们的故事"></Des_label1> -->
  <!-- <des_label2 content="我们的故事"></des_label2>
  <Text1 content="12345"></Text1>-->
  <start></start>

  <!-- <div id="body" ref="pronbit">
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
        <div class="choices" v-for="(site,index) in sites" v-on:click="now = index">
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
          <div id="loading-img" class="loading-img" v-bind:style="{ left: loading_width + '%' }"></div>
        </div>
        <div class="loading-text">
          <img src="../photo/index/loading.png" />
        </div>
      </div>
    </div>

    <div class="footer">©2021 浙江工业大学-精弘网络</div>
  </div>-->
</template>

<style>
body {
  /* padding: 0 10%; */
}
</style>
