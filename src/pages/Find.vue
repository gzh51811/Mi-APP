<template>
  <div class="find">
    <div style="margin-bottom: 50px">
      <van-tabs v-model="active" background="#f2f2f2" animated swipeable>
        <van-tab title="发现">
          <div style="width=100%">
            <img src="https://i1.mifile.cn/a4/xmad_1550713536261_EJOpq.jpg" width="100%">
            <img src="https://i1.mifile.cn/a4/xmad_15510775494887_EWGcg.jpg" width="100%">
            <img src="https://i1.mifile.cn/a4/xmad_15468311598919_uvtgO.jpg" width="100%">
          </div>
        </van-tab>
        <van-tab title="我的">
          <div style="width=100%">
            <img src="https://i1.mifile.cn/a4/xmad_15519428237288_Exonu.jpg" width="100%">
            <img src="https://i1.mifile.cn/a4/xmad_15519291062065_hikIJ.jpg" width="100%">
            <img src="https://i1.mifile.cn/a4/xmad_15519293321746_ChIsr.jpg" width="100%">
            <img src="https://i1.mifile.cn/a4/xmad_15519292842527_ujNMV.jpg" width="100%">
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: ""
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/_mixin.scss";
</style>



