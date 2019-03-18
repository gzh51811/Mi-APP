<template>
    <div class="cart">
        <header>
            <div><van-icon name="arrow-left" size="0.8378rem"/></div>
            <div><span>购物车</span></div>
            <div><van-icon name="search" size="0.8378rem"/></div>
        </header>
        <section class="goLogin">
            <div><span>登录后享受更多优惠</span></div>
            <div><span>去登录</span></div>
            <div><van-icon name="arrow" size="0.3584rem"/></div>
        </section>
        <section class="kong">
            <div></div>
            <div>
                <span><van-icon name="shopping-cart-o" size="0.8378rem"/></span>
                <span>购物车还是空的</span>
                <span>去逛逛</span>
            </div>
            <div></div>
        </section>

        <main>

        </main>
        <div class="youlike_img">
            <img src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
        </div>

        <section id="youlike">
            <ul class="youlike_goods">
                <li v-for="item in likes" :key="item.item_id">
                    <img :src="item.item_url" alt="">
                    <div>
                        <p>{{item.item_name}}</p>
                        <p>￥{{item.item_price}}</p>
                    </div>
                </li>
            </ul>
        </section>

        <div class="www"></div>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            likes:[
                {
                    item_id: 1001,
                    item_url: '//i8.mifile.cn/b2c-mimall-media/a4d88530d1e6c0882345e44015c3cac2.jpg',
                    item_price: 69,
                    item_name: '最生活浴巾•Air（1条装）',
                    item_desc:'轻柔易干 / 3 秒吸水 / 专利密封包装 / 阿瓦提长绒棉'
                },
                {
                    item_id: 1002,
                    item_url: '//i8.mifile.cn/b2c-mimall-media/68d75d34aad7e72059f7b5840d8c1b50.jpg',
                    item_price: 249,
                    item_name: 'FREETIE云弹减震运动鞋 男款',
                    item_desc:'鱼骨锁紧系统 / ETPU 高弹中底 / 一体高弹针织鞋面 / 人体工学大底 【此商品不参与满150元包邮活动】'
                },
                {
                    item_id: 1003,
                    item_url: '//i8.mifile.cn/b2c-mimall-media/bf4613f0626e444ce4c8e04bdd03a6f0.jpg',
                    item_price: 59,
                    item_name: '均衡五色果蔬燕麦片组合装',
                    item_desc:'精选澳洲优质燕麦 / 融合多种水果、谷物 / 便捷代餐、自然美味 【此商品不参与满150元包邮活动】'
                },
                {
                    item_id: 1004,
                    item_url: '//i8.mifile.cn/b2c-mimall-media/a0674c65d529d90320ff92718ace5b39.jpg',
                    item_price: 49,
                    item_name: '悦活每日水果燕麦',
                    item_desc: '50%混合谷物+50%果蔬及坚果 【此商品不参与满150元包邮活动】'
                }
            ]
        }
    },

    created(){
        let likes = axios.get("/",{});
        console.log(this.likes);
    }

}
</script>

<style lang="scss" scoped>
    header{
        display: flex;
        height: 1.3514rem;
        background-color:#f2f2f2;
        color: #999;
        div{
            float: left;
            margin-top: 0.2733rem;
            text-align: center;
            &:nth-child(1){flex: 1.5;}
            &:nth-child(2){flex: 7;}
            &:nth-child(3){flex: 1.5;}
        }
        span{
            display: inline-block;
            font-size: 0.4595rem;
            margin-top: 0.17rem;
        }
    }
    .goLogin{
        display: flex;
        height: 1.4638rem;
        padding: 0 .56rem 0 .32rem;
        div{
            float: left;
            &:nth-child(1){
                flex: 7.5;
                font-size: 0.4585rem;
                height: 0.5135rem;
                margin-left: 0.3703rem;
                margin-top: 0.4054rem;
            }
            &:nth-child(2){
                flex: 1.5;
                font-size: .24rem;
                color: rgba(0,0,0,.54);
                height: 0.3784rem;  
                margin-top: 0.5000rem;
                margin-left: 1.7014rem;
            }
            &:nth-child(3){
                flex: 1;
                height: 0.3584rem;
                width: 0.3584rem;
                margin-top: 0.5488rem;
            }
        }
    }
    .kong{
        display: flex;
        height: 1.1081rem;
        background: #ebebeb;
        padding: 0.2703rem;
        justify-content: space-around;
        div{
            float: left;
            &:nth-child(1){flex: 2;}
            &:nth-child(2){
                flex: 6;
                display: flex;
                span{
                    align-self: center;
                    text-align: center;
                    &:nth-child(1){flex: 3.5; color: rgba(0,0,0,.27);}
                    &:nth-child(2){flex: 12; font-size: 0.3784rem; color: rgba(0,0,0,.27);}
                    &:nth-child(3){flex: 6.5; font-size: 0.3784rem; border: 1px solid rgba(0,0,0,.15); padding: 0.0541rem 0;}
                }
            }
            &:nth-child(3){flex: 2;}
        }
    }
    .youlike_img{
        img{
            height: 100%;
            width: 100%;
        }
    }
    #youlike{
        width: 100%;
        height: auto;
        padding-bottom: 1.6216rem;
        ul{
            width: 100%;
            height: auto;
            li{
                float: left;
                width: 48.5%;
                height: 6.6124rem;
                img{
                    width: 5.017rem;
                    height: 5.017rem;
                    margin-top: 1%;
                }
                &:nth-child(2n+1){margin-right: 1.5%;}
                &:nth-child(2n){margin-left: 1.5%;}
                // div{
                //     width: 100%;
                //     display: flex;
                //     p{

                //     }
                // }
                p{
                    font-size: 0.4324rem;
                    margin: 0.0561rem 0.2803rem;
                    &:nth-child(1){
                        width: 4.2854rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    &:nth-child(2){
                       color: red;
                    }
                }
            }
        }
    }
    .www{
        width: 100%;
        height: 1.6216rem;
    }
</style>

