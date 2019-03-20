<template>
  <div id="gate">
    <p class='gate' v-for="(gate,idx) in gates[0].tuijian" :key="idx"  @click="todetails">
      <img :src="gate" width="100%">
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gates: [
        {
          tuijian: [
            "https://i8.mifile.cn/v1/a1/01e0772b-fcd9-6e03-cdf3-9bd08b2d2974!144x152.webp",
            "https://i8.mifile.cn/v1/a1/69f3581c-893a-c3a3-9f27-055146a62b7e!144x152.webp",
            "https://i8.mifile.cn/v1/a1/9f3a3e88-3b55-f7c8-b863-5867e23022c1!144x152.webp",
            "https://i8.mifile.cn/v1/a1/b338546a-bba6-eff5-0b4e-6bcb90c6230e!144x152.webp",
            "https://i8.mifile.cn/v1/a1/b05bf09b-a0a7-ef8f-e5ba-500b1549938c!144x152.webp"
          ]
        }
      ]
    };
  },
  props:['tap'],
  methods:{
     todetails(){
      this.$router.push({path:'/list',query:{type:this.tap.type,path:'/home'}})
    }
  }
};
</script>
<style scoped>
#gate {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.gate{
    width: 20%
}
</style>


