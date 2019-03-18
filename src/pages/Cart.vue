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

        <main id="main">
            <ul class="list">
                <li class="list-item" v-for="(item,idx) in likes" :key="item.item_id">
                    <div><input class="com" type="checkbox" :value="idx"></div>
                    <div><img :src="item.item_url" alt=""></div>
                    <div>
                        <p>{{item.item_name}}</p>
                        <p>售价：<span>{{item.item_price}}</span>元</p>
                        <p>
                           <span><i class="el-icon-minus"></i></span>
                           <input type="text">
                           <span><i class="el-icon-plus"></i></span>
                        </p>
                    </div>
                    <div><van-icon class="com2" name="delete" size=".693333rem"/></div>
                </li>
            </ul>
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

        <div class="buy">
            <ul>
                <li>
                    <p>共<span>2</span>件 &nbsp;<span>金额：</span></p>
                    <p><span>1999</span> 元</p>
                </li>
                <li><a href="###">继续购物</a></li>
                <li><a href="###">去结算</a></li>
            </ul>
        </div>
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
            ],

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
                flex: 7.7;
                font-size: 0.4585rem;
                height: 0.5135rem;
                margin-left: 0.3703rem;
                margin-top: 0.4054rem;
            }
            &:nth-child(2){
                flex: 1.8;
                font-size: 0.3784rem;
                color: rgba(0,0,0,.54);
                height: 0.3784rem;  
                margin-top: 0.5000rem;
                margin-left: 1.7014rem;
            }
            &:nth-child(3){
                flex: 0.5;
                height: 0.4585rem;
                width: 0.4585rem;
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
    #main{
        ul{
            li{
                height: 2.453333rem;
                padding: .346667rem 0;
                display: flex;
                border-bottom: 1px solid #eee;
                div{
                    float: left;
                    &:nth-child(1){
                        flex: 1;
                        position: relative;
                        .com{
                            display: inline-block;
                            width: 100%;
                            text-align: center;
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                    }
                    &:nth-child(2){
                        flex: 2.5;
                        img{
                            width: 2.4rem;
                            border: 1px solid #eee;
                            margin-right: .346667rem;
                        }
                    }
                    &:nth-child(3){
                        flex: 5;
                        p{
                            &:nth-child(1){
                                width: 5rem;
                                font-size: .426667rem;
                                color: #666;
                                height: 1.12rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                            }
                            &:nth-child(2){
                                color: #999;
                                margin-top: .08rem;
                            }
                            &:nth-child(3){
                                margin-top: .133333rem;
                                span{
                                    display: inline-block;
                                    width: .586667rem;
                                    height: .586667rem;
                                    border: 1px solid #ccc;
                                    color: #3c3c3c;
                                    background-color: rgb(235, 229, 229);
                                    text-align: center;
                                    vertical-align: top;
                                }
                                i{
                                    font-size: .426667rem;
                                    font-weight: bold;
                                    text-align: center;
                                    vertical-align: middle;
                                }
                                input{
                                    display: inline-block;
                                    width: .933333rem;
                                    height: .586667rem;
                                    vertical-align: top;
                                    border: 1px solid #ccc;
                                    text-align: center; 
                                }
                            }
                        }
                    }
                    &:nth-child(4){
                        flex: 1.5;
                        text-align: center;
                        .com2{
                            margin-top: 1.706667rem;
                        }
                    }
                }
            }
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
        overflow: hidden;
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
    .buy{
        width: 100%;
        height: 1.386667rem;
        position: fixed;
        bottom: 0;
        left: 0;
        ul{
            height:100%;
            width: 100%;
            display: flex;
            overflow: hidden;
            li{
                flex: 1;
                float: left;
                height: 1.386667rem;
                text-align: center;
                &:nth-child(1){
                    margin-top: .186667rem;
                    p{
                        &:nth-child(1){
                            color: #999;
                            font-size: .346667rem;
                        }
                        &:nth-child(2){
                            color: #999;
                            span{
                                color: #ff5722;
                                font-size: .48rem;
                                font-weight: bolder;
                            }
                        }
                    }
                }
                &:nth-child(2){
                    background-color: #f4f4f4;
                    font-size: .4rem;
                    a{
                        color: #333;
                        text-decoration: none;
                        line-height: 1.386667rem;
                    }
                }
                &:nth-child(3){
                    background-color: #ff6700;
                    font-size: .4rem;
                    a{
                        color: #fff;
                        text-decoration: none;
                        line-height: 1.386667rem;
                    }
                }
            }
        }
    }
</style>

