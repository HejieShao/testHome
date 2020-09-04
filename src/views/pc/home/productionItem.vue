/**
*@Time : 2020/9/2 下午3:46
*@Author : Hejie Shao
*/
<template>
  <div class="product-container" :style="customStyle">
    <div class="main-content">
      <div class="left">
        <div class="prod-logo">
          <slot name="prologo"></slot>
        </div>
        <div class="pro-title">
          <slot name="protitle"></slot>
        </div>
        <div class="desc-text">
          <slot name="protext"></slot>
        </div>
        <a :href="link" class="more-detail" target="_blank" :style="linkStyle">
          <slot name="linkdetail"></slot>
        </a>
      </div>
      <div class="right">
        <slot name="proimage"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productionItem",
  props:{
    link: String,
    background: String,
    linkColor: String
  },
  data() {
    return {}
  },
  computed:{
    customStyle(){
      return 'background:' + this.background + ";"
    },
    linkStyle(){
      return 'color:' + this.linkColor + ";"
    }
  },
  components: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss">
  @import "~@/assets/scss/globalFn.scss";
  .product-container{
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, #6EE1E1 0%, #59B3C3 100%);
    overflow: hidden;
    .main-content{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      width: cs(1554);
      height: cs(723);
      display: flex;
      margin: 0 auto;
      .left{
        .prod-logo{
          width: cs(80);
          height: cs(80);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .pro-title{
          margin-top: cs(44);
          font-size: cs(100);
          font-weight: bold;
          color: #FFFFFF;
          img{
            width: cs(452);
            height: auto;
            vertical-align: middle;
          }
        }
        .desc-text{
          max-width: cs(420);
          margin-top: cs(72);
          font-size: cs(20);
          color: #FFFFFF;
        }
        .more-detail{
          width: cs(180);
          height: cs(50);
          margin-top: cs(32);
          background-color: #FFFFFF;
          border-radius: 20px;
          display: block;
          font-size: cs(20);
          text-align: center;
          font-weight: bold;
          &:hover{
            opacity: .8;
          }
          span{
            line-height: cs(50);
            vertical-align: middle;
            display: inline-block;
          }
          img{
            width: cs(24);
            height: auto;
            vertical-align: middle;
            margin-left: 5px;
            display: inline-block;
          }
        }
      }
      .right{
        margin-left: auto;
        width: cs(1000);
        height: auto;
        img{
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>
