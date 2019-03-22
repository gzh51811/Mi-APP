<template>
    <div class="tab">
        <!-- 顶部 -->
        <van-nav-bar title="分类"  left-arrow color="#f00">
            <van-icon name="search" slot="right" @click="gotoSousuo"/>
        </van-nav-bar>
    
        <!-- Tab标签左边 -->
       <div class="tableft">
           <ul class="leftul">
               <li v-for="(item,idx) in items" :key="idx" 
                v-bind:class="{active:idx===active}"
                class="leftli"
                v-on:click = "change(idx,item.text)"
                >
                    {{item.text}}
                </li>
           </ul>
           {{goodslist}}
       </div>
        <Tabright :goodslist="goodslist"></Tabright>
    </div>
</template>
<script>

import Tabright from '../components/Tabright.vue'

export default {
  data() {
    return {
        goodslist:[],
      items:[
          {
              text:"新品",
              id:1,
          }, {
              text:"众筹",
              id:1,
          },{
              text:"手机",
              id:3
          },{
              text:"电视",
              id:4
          },{
              text:"电脑",
              id:5
          },{
              text:"家电",
              id:6
          },{
              text:"路由",
              id:7
          },{
              text:"出行",
              id:8
          },{
              text:"穿戴",
              id:9
          },{
              text:"智能",
              id:10
          },{
              text:"电源",
              id:11
          },{
              text:"健康",
              id:12
          },{
              text:"灯具",
              id:13
          },{
              text:"儿童",
              id:14
          },{
              text:"插线板",
              id:15
          },{
              text:"音频",
              id:16
          },{
              text:"箱包",
              id:17
          },{
              text:"生活",
              id:18
          },{
              text:"配件",
              id:19
          },{
              text:"家装",
              id:20
          },{
              text:"礼品",
              id:21
          },{
              text:"会员卡",
              id:22
          },{
              text:"服务",
              id:23
          },{
              text:"米粉卡",
              id:24
          },{
              text:"零售店",
              id:25
          }
      ],
    active:0
    };
  },
  methods:{
    async change(idx,text){
        this.active = idx; 
        if(this.$store.state.list.indexOf(text)==-1){
            //发起请求
            // console.log(text)
            
             let data = await this.$axios.get("Tabright",{
                params:{
                    style:text
                }
            }).then(res=>{
                // console.log(res)
                return res.data;
               
            })
             this.goodslist= data;
             this.$store.state.list=[];
            this.$store.state.list.push(text,idx) 
            //  console.log(this.goodslist)
        }
        
    },
    gotoSousuo(){
        this.$router.push("/sousuo")
    }
  },
    async created(){
        let data= await this.$axios
        .get("Tabright",{
            params:{
                style:"新品"
            }
        })
        .then(res=>{
            console.log(res)
             return res.data;
             
        })
         this.goodslist= data;
        this.$store.state.list=["新品",0];
    },
    components:{
        Tabright
    }
}

</script>

<style scoped>
.tableft {
  position: fixed;
  height:calc(100% - 96px);
  left: 0;
  width: 20%; 
}
.leftul{
    height: 100%;
    border-right: 1px solid #f2f2f2;
    width: 100%; 
    min-width:  100%; 
    overflow: scroll;
}
.leftul::-webkit-scrollbar {
width: 0px;
display: none;
}
.leftli{
    text-align: center;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
}
.van-tree-select__content{
    position: fixed;
    top: 46px;
    left: 4.375rem;
    padding-left: 0px;
    margin-left: .625rem;
    width: 100%;
}
li.active{
    color: orange;
    font-size: 18px;
}
</style>
