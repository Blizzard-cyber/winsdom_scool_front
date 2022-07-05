<template>
<div class="main">
  <div class="top-bg flex-col flex-x-center flex-y-center">
    <div class="index flex-col">
      <div class="index-head flex-row flex-left">
        <img src="../../../static/img/logo.png" alt="">
      </div>
      <div class="index-nav flex-row">
        <ul class="index-nav-ul flex-row flex-space-between">
          <li class="index-nav-li">
            <router-link :to="{path:'/First'}" class="index-nav-a">首页</router-link>
          </li>
          <li class="index-nav-li"  @mouseenter="fn1" @mouseleave="fn11">
            <span class="index-nav-a" >学校概况</span>
            <ul class="index-nav-hide flex-col flex-y-center flex-space-between" @mouseenter="fn1" @mouseleave="fn11" v-if="show1">
              <router-link :to="{path:'/SchoolProfile'}"><li>学校简介</li></router-link>
              <router-link :to="{path:'/History'}"><li>百年历史</li></router-link>
              <router-link :to="{path:'/Teacher'}"><li>师资力量</li></router-link>
              <router-link :to="{path:'/GiftedPerson'}"><li>培道英才</li></router-link>
              <router-link :to="{path:'/BeautifulSchool'}"><li>美丽培道</li></router-link>
            </ul>
          </li>
          <li class="index-nav-li" @mouseenter="fn2" @mouseleave="fn22">
            <span class="index-nav-a"  >校园动态</span>
            <ul class="index-nav-hide flex-col flex-y-center flex-space-between" @mouseenter="fn2" @mouseleave="fn22" v-if="show2">
              <router-link :to="{path:'/PhotoNews'}"><li> 图片新闻</li></router-link>
              <router-link :to="{path:'/LatestInformation'}"><li>最新咨询</li></router-link>
             <router-link :to="{path:'/SchoolNotice'}"><li>学校公告</li></router-link>
            </ul>
          </li>
          <li class="index-nav-li" @mouseenter="fn3" @mouseleave="fn33">
            <span class="index-nav-a"  >教育教学</span>
            <ul class="index-nav-hide flex-col flex-y-center flex-space-between" @mouseenter="fn3"  @mouseleave="fn33" v-if="show3">
              <router-link :to="{path:'/Achievement'}"><li> 教学成果</li></router-link>
              <router-link :to="{path:'/TeachingResearch'}"><li> 教学研究</li></router-link>
              <router-link :to="{path:'/EnvironmentalProtectionTeaching'}"><li> 环保教育</li></router-link>
              <router-link :to="{path:'/TeachingResource'}"><li> 教育资源</li></router-link>
            </ul>
          </li>
          <li class="index-nav-li"  @mouseenter="fn4" @mouseleave="fn44">
            <router-link :to="{path:'/BuildParty'}"><span class="index-nav-a" >建党天地</span></router-link>
          </li>
          <li class="index-nav-li"  @mouseenter="fn5" @mouseleave="fn55">
            <span class="index-nav-a" >招聘招生</span>
            <ul class="index-nav-hide flex-col flex-y-center flex-space-between" @mouseenter="fn5" @mouseleave="fn55" v-if="show5">
              <router-link :to="{path:'/GermanManagement'}"><li> 德育管理</li></router-link>
             <router-link :to="{path:'/SectionPage'}"><li> 科组主页</li></router-link>
             <router-link :to="{path:'/TeachingManagement'}"><li> 教学管理</li></router-link>
            </ul>
          </li>
          <li class="index-nav-li">
            <router-link :to="{path:'/ContactUs'}"><span class="index-nav-a">联系我们</span></router-link>
          </li>
        </ul>
      </div>
    </div>
    <!--第二部分文字-->
    <div class="words flex-row flex-space-between">
      <div class="words-left flex-col flex-y-center">
        <p>2017年12月18日 周一</p>
        <p>欢迎第3761708位访客</p>
      </div>
      <div class="words-right"></div>
    </div>
  </div>
</div>

</template>

<script>
let self;
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    };
  },
  created() {
    self = this;
  },
  methods: {
    fn1() {
      this.show1 = true;
    },
    fn11() {
      this.show1 = false;
    },
    fn2() {
      this.show2 = true;
    },
    fn22() {
      this.show2 = false;
    },
    fn3() {
      this.show3 = true;
    },
    fn33() {
      this.show3 = false;
    },
    fn4() {
      this.show4 = true;
    },
    fn44() {
      this.show4 = false;
    },
    fn5() {
      this.show5 = true;
    },
    fn55() {
      this.show5 = false;
    }
  }
};
</script>

