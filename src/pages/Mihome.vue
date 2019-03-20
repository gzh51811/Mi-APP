<template>
<div> 
    <!-- closeable 模式，在右侧显示关闭按钮 -->
<van-notice-bar mode="closeable">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</van-notice-bar>

 <van-card
  num="1"
  tag="特价"
  price="998.00"
  desc="描述信息"  
  title="小米9"
  thumb="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd53fdc35128c8d02db7f43d2c79ab74.png?thumb=1&w=120&h=120"
  origin-price="1499"
>
  <div slot="footer">
    <van-button size="mini">收藏</van-button>
    <van-button size="mini">抢购</van-button>
  </div>
</van-card>
</div>


</template>
<script>
export default {
   data() {
    return {
      lists: [
        {
          imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd53fdc35128c8d02db7f43d2c79ab74.png?thumb=1&w=120&h=120",
          title: "小米9"
        },{
             imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/47980b4238d5ab9997d4d04265a99775.png?thumb=1&w=120&h=120",
          title: "小米9 SE",
        },{
             imgurl:
            "////cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c2ce8537f1a81e79d6aa60d4530d55e.png?thumb=1&w=120&h=120",
          title: "小米9 透明版",
        },{
            imgurl:
            "//i8.mifile.cn/b2c-mimall-media/8dbd523e76673afb58e16e3f74520735!120x120.png",
          title: "小米MIX 3",
        },{
            imgurl:
            "//i8.mifile.cn/b2c-mimall-media/06cabb01bbe4ac5c819ee101e4446a16!120x120.png",
          title: "小米MIX 25",
        },{
             imgurl:
            "//i8.mifile.cn/b2c-mimall-media/197587a8281cb9b62e73e94473605e7e!120x120.png",
        },{
             imgurl:
            "//i8.mifile.cn/b2c-mimall-media/86020260a41e530fdc1f2f0b67ed5dd1!120x120.png",
          title: "小米8",
        }
    ],
    
    }
}
}
</script>
