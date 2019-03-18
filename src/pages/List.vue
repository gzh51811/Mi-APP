<template>
    <div>
        <header>
            <van-icon class="arrow-left" name="arrow-left" style="font-size:29px" />
            <div class="listgoods">{{listgoods}}</div>
             <van-icon class="search" name="search" style="font-size:29px" />
        </header>
        <ul class="listul">
            <li>
                <img src="https://i8.mifile.cn/b2c-mimall-media/f000bd098359b1d9f3a07b242930e0ef!360x3600.jpg" alt="">
                <div class="lileft">
                    <p>小米电视4C 43英寸</p>
                    <font color="#ff4a00" >「3月14日-3月17日“小米品质节”，限时特惠！」</font>
                    人工智能 / 超窄边 / 全高清屏 
                    <p style="color:#ff4a00">￥1299</p>
                </div>
            </li>
        </ul>
        
            <img class="like" src="https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
        
        <ul class="goodlist">
            <li>
                <img class="goodimg" src="https://i8.mifile.cn/b2c-mimall-media/a4d88530d1e6c0882345e44015c3cac2!360x360.jpg" alt="">
                <p>最生活浴巾•Air（1条装）</p>
                <p class="price">￥69</p>
            </li>
            <li>
                <img class="goodimg" src="https://i8.mifile.cn/b2c-mimall-media/a4d88530d1e6c0882345e44015c3cac2!360x360.jpg" alt="">
                <p>最生活浴巾•Air（1条装）</p>
                <p class="price">￥69</p>
            </li>
             <li>
                <img class="goodimg" src="https://i8.mifile.cn/b2c-mimall-media/a4d88530d1e6c0882345e44015c3cac2!360x360.jpg" alt="">
                <p>最生活浴巾•Air（1条装）</p>
                <p class="price">￥69</p>
            </li>
        </ul>   
    </div>
</template>
<script>
export default {
    data(){
        return{
            listgoods:"商品列表"
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../styles/_mixin.scss";
    header{
        position:fixed;
        width: 100%;
        display: flex;
        align-items: center;
        height:w(50px);
        background-color: #f2f2f2;
        font-size: w(16px);
        .arrow-left{
            flex: 1;
        }
        .listgoods{
            flex: 7;
            text-align: center;
        }
        .search{
            flex: 1;
        }
    }
    .listul{
        padding-top: w(50px);
        li{
            display: flex;
             border-bottom: 1px solid #ccc;
            img{
                width: w(156px);
                height: w(156px);
            }
            .lileft{
                height: w(115px);
                font-size: w(16px);
                padding: w(20px) w(20px);
                font-size: w(7px);
               p{
                   margin: w(10px) 0;
                   font-size: w(16px);
               }
              
            }
        }
    }
    .like{
        height: w(60px);
        width: 100%;
        background-color: #ccc;
    }
    .goodlist{
        li{
        width: w(185px);
        height: w(245px);
        font-size: w(14px);
        display: inline-block;
        }
        .goodimg{
            width: w(185px);
            height: w(185px);
        }
        p{
            margin-left: w(10px)
        }
        .price{
             color: #ff6700;
        }
    }
</style>


