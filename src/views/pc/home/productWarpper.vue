/**
*@Time : 2020/9/2 下午4:59
*@Author : Hejie Shao
*/
<template>
  <div class="warpper-container">
    <div class="product-warpper" ref="prodWarpper">
      <slot></slot>
    </div>
    <div class="dot-container">
      <div v-for="item in totalList" class="dot-item" :class="{active: item.isActive}" :key="item.id" @click="handleDot(item.id)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productWarpper",
  data() {
    return {
      currentIndex: 0,
      isMoving: false,
      totalIndex: 0,
      totalList: []
    }
  },
  computed:{
    isMac(){
      const ua = navigator.userAgent.toLowerCase();
      return /macintosh|mac os x/i.test(ua);
    }
  },
  components: {},
  mounted() {
    this.totalIndex = this.$refs.prodWarpper.childElementCount - 1;
    for(let n=0; n < this.totalIndex+1; n++)
    {
      let obj = {
        id:n,
        isActive: false
      }
      if(n == 0)
        obj.isActive = true;
      this.totalList.push(obj);
    }
    document.addEventListener("wheel",this.handleScroll,true);
  },
  destroyed() {
    document.removeEventListener('wheel',this.handleScroll);
  },
  methods: {
    handleScroll(event){
      if(!this.isMoving) {
        this.isMoving = true;
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, 100)
        }).then(() => {
          if(this.isMac)
            if (event.deltaY < 0)
              this.currentIndex--;
            else
              this.currentIndex++;
          else
            if (event.deltaY > 0)
              this.currentIndex--;
            else
              this.currentIndex++;

          if (this.currentIndex < 0)
            this.currentIndex = 0;
          else if (this.currentIndex > this.totalIndex)
            this.currentIndex = this.totalIndex;
          this.moveWarpper(this.currentIndex);
        }).catch((error) => {
          this.isMoving = false;
        })
      }
      event.stopPropagation();
    },
    moveWarpper(index){
      let percent = -100;
      let move = index * percent;
      this.$refs.prodWarpper.style.transform = `translateY(${move}%)`;
      this.isMoving = false;
      this.totalList.filter(a => {
        return a.isActive == true
      })[0].isActive = false

      this.totalList.filter(a => {
        return a.id == index
      })[0].isActive = true
    },
    handleDot(id){
      if(this.isMoving)
        return
      this.isMoving = true;
      this.moveWarpper(id);
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/globalFn.scss";
.warpper-container{
  position: relative;
  width: 100%;
  height: 100%;
  .product-warpper{
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-transition: all .3s;
    transition: all .3s;
    transform: translateY(0%);
  }
  .dot-container{
    position: fixed;
    top: 50%;
    margin-top: cs(-300);
    right: cs(240);
    z-index: 10;
  }
  .dot-item{
    width: cs(12);
    height: cs(12);
    background-color: transparent;
    border-radius: 50%;
    border: cs(3) solid #FFFFFF;
    margin-bottom: cs(40);
    cursor: pointer;
    &.active{
      width: cs(18);
      height: cs(18);
      border: 0;
      background-color: #FFFFFF;
    }
  }
}
</style>
