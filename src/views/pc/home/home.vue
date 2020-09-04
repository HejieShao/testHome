/**
*@Time : 2020/9/2 下午1:28
*@Author : Hejie Shao
*/
<template>
  <div class="home-container">
    <img v-lazy="picPath+'/pc/home/logo.png'" class="logo-icon" key="company-logo">
    <prodWarpper>
      <prod-item link="https://youxi.ihapi.com" background="linear-gradient(270deg, #6EE1E1 0%, #59B3C3 100%)" link-color="#1F6290">
        <img v-lazy="picPath+'/pc/home/youxi-logo.png'"  key="youxi-logo" slot="prologo">
        <div slot="protitle">世界很大<br>你我有戏</div>
        <div slot="protext">有戏提供多样化的沉浸式氛围和舒适无压力的聊天环境，帮助你轻松地与有共同兴趣的伙伴开展话题，开始一段愉快的闲聊时光。</div>
        <img slot="proimage" v-lazy="picPath+'/pc/home/youxi-desc-img.png?v=1'" class="prod-img" key="youxi-img">
        <div slot="linkdetail">
          <span>了解详情</span>
          <img v-lazy="picPath+'/pc/home/youxi-arrow.png'"  key="youxi-arrow">
        </div>
      </prod-item>
      <prod-item link="https://funfit.ihapi.com" background="linear-gradient(270deg, #5BE0C0 0%, #01BABC 100%)" link-color="#02C3B8">
      <img v-lazy="picPath+'/pc/home/funfit-logo.png'"  key="funfit-logo" slot="prologo">
      <div slot="protitle">
        <img v-lazy="picPath+'/pc/home/funfit-text.png'"  key="funfit-text">
      </div>
      <div slot="protext">FunFit是让人足不出户在家就可以进行各类运动的趣味健身app。最先进的AI图像识别，加上游戏化的玩法设计，让运动变得更加简单有趣。</div>
      <img slot="proimage" v-lazy="picPath+'/pc/home/funfit-desc-img.png?v=1'" class="prod-img" key="funfit-img">
      <div slot="linkdetail">
        <span>了解详情</span>
        <img v-lazy="picPath+'/pc/home/funfit-arrow.png'"  key="funfit-arrow">
      </div>
    </prod-item>
    </prodWarpper>
    <cpn-footer></cpn-footer>
  </div>
</template>

<script>
import "@/lib/pcRem"
import cpnFooter from "@/components/pc/footer"
import prodWarpper from "@/views/pc/home/productWarpper"
import prodItem from "@/views/pc/home/productionItem"
export default {
  name: "Home",
  data() {
    return {
      picPath: process.env.VUE_APP_PIC_PATH
    }
  },
  components: {
    prodItem,
    cpnFooter,
    prodWarpper
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
  @import "~@/assets/scss/globalFn.scss";
  .home-container{
    position: relative;
    width: 100%;
    height: 100%;
    min-width: cs(1024);
    overflow: hidden;
    .logo-icon{
      position: absolute;
      top: cs(35);
      left: cs(60);
      width: cs(148);
      height: cs(34);
      z-index: 10;
    }
  }
</style>
