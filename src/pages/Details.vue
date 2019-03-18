<template>
    <div class="details">
        <header>
            <div class="small"><i class="el-icon-arrow-left"></i></div>
            <div class="small"><i class="el-icon-share"></i></div>
            <van-swipe class="lunbo">
                <van-swipe-item class="lunboitem" v-for="(image, index) in images" :key="index">
                    <img :src="image" />
                </van-swipe-item>
            </van-swipe>
        </header>

        <section class="shop">
            <ul>
                <li>
                    <van-icon name="wap-home" size=".586667rem"/>
                    <p>首页</p>
                </li>
                <li>
                    <van-icon name="shopping-cart-o" size=".586667rem"/>
                    <p>购物车</p>
                </li>
                <li>
                    <span>加入购物车</span>
                </li>
            </ul>
        </section>

        <section class="content">
            <div></div>
            <div>
                <p>{{goods.item_name}}</p>
                <p>{{goods.item_desc}}</p>
                <p>￥{{goods.item_price}}</p>
            </div>
            <div></div>
        </section>

        <section class="xuan">
            <div></div>
            <div>
                <ul>
                    <li>
                        <span class="span1">促销</span>
                        <span class="zeng">赠品</span>
                        <span>赠米粉卡，最高含100元话费</span>
                        <span class="spanl"><van-icon name="arrow" size=".346667rem"/></span>
                    </li>
                    <li>
                        <span class="span1">已选</span>
                        <span class="sheng">{{goods.item_name}}</span>
                        <span class="spanl"><van-icon name="arrow" size=".346667rem"/></span>
                    </li>
                    <li>
                        <span class="span1">送至</span>
                        <span>广州市 &nbsp;天河区</span>
                        <span class="xian">有现货</span>
                        <span class="spanl"><van-icon name="arrow" size=".346667rem"/></span>
                    </li>
                    <li>
                        <span class="span4"><van-icon class="spanx" name="passed" size=".346667rem" color="#ff6700"/>小米自营</span>
                        <span class="span4"><van-icon class="spanx" name="passed" size=".346667rem" color="#ff6700"/>小米发货</span>
                        <span class="span4"><van-icon class="spanx" name="passed" size=".346667rem" color="#ff6700"/>七天无理由退换货</span>
                        <span class="spanl"><van-icon name="arrow" size=".346667rem"/></span>
                    </li>
                </ul>
            </div>
            <div></div>
        </section>

        <!-- <section class="comment">
            <van-swipe @change="onChange">
                <van-swipe-item></van-swipe-item>
                <van-swipe-item></van-swipe-item>
                <van-swipe-item></van-swipe-item>
                <van-swipe-item></van-swipe-item>
            </van-swipe>
        </section> -->

        <section class="tutu">
            <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb8b56244a9b02925ce8d7bd84e8be18.jpg?w=1080&h=1500&bg=FFFFFF" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4ea09e00ee7ee8e963bbcb81b09e7f8.jpg?f=webp&w=1080&h=1585&bg=FFFFFF" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/854001a839c89fbd8a4bc4c9d4e45621.jpg?f=webp&w=1080&h=704&bg=FFFFFF" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3aba85fef8abafa494d456f8ba8e5fdf.jpg?f=webp&w=1080&h=964&bg=FFFFFF" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/31f17bf02bdc72680b44c6c062bf1e19.jpg?f=webp&w=1080&h=1669&bg=FFFFFF" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/736b20bcbd6e140dac94627cd0f106c5.jpg?f=webp&w=1080&h=1634&bg=FFFFFF" alt="">
        </section>
    </div>
</template>


<script>
export default {
    data(){
        return {
           goods:{
                item_id: 1001,
                item_url: '//i8.mifile.cn/b2c-mimall-media/a4d88530d1e6c0882345e44015c3cac2.jpg',
                item_price: 69,
                item_name: '最生活浴巾•Air（1条装）',
                item_desc:'轻柔易干 / 3 秒吸水 / 专利密封包装 / 阿瓦提长绒棉'
           },
           images:[
               '//i8.mifile.cn/b2c-mimall-media/a4d88530d1e6c0882345e44015c3cac2.jpg',
               '//i8.mifile.cn/b2c-mimall-media/a4d88530d1e6c0882345e44015c3cac2.jpg'
           ]
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        height: 11rem;
        position: relative;
        .small{
            position: absolute;
            z-index: 99;
            top: .32rem;
            width: .833333rem;
            height: .833333rem;
            border-radius: 50%;
            color: #ddd;
            background: rgba(0,0,0,.6);
            text-align: center;
            &:nth-child(1){
                left: .32rem;
            }
            &:nth-child(2){
                right: .32rem;
            }
            i{
                font-size: .533333rem;
                display: inline-block;
                margin-top: .16rem;
            }
        }
        .lunbo{
            width: 100%;
            height: 11rem;
            .lunboitem{
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .shop{
        height: 1.466667rem;
        width: 94%;
        margin: 0 3%;
        position: fixed;
        z-index: 99;
        bottom: .213333rem;
        background-color: hsla(0,0%,100%,.96)!important;
        border: 1px solid #e5e5e5;
        border-radius: .266667rem;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
        ul{
            width:100%;
            li{
                float: left;
                text-align: center;
                &:nth-child(1){
                    color: rgba(0,0,0,.54);
                    width: 20%;
                    margin-top: .213333rem;
                }
                &:nth-child(2){
                    color: rgba(0,0,0,.54);
                    width: 20%;
                    margin-top: .213333rem;
                }
                &:nth-child(3){
                    width: 60%;
                    color: #fff;
                    span{
                        display: inline-block;
                        background: #ff6700;
                        width: 3.28rem;
                        font-size: .4rem;
                        border-radius: .213333rem;
                        margin-top: .266667rem;
                        padding: .213333rem 0; 
                        margin-left: 1.44rem;
                    }
                }
            }
        }
    }
    .content{
        display: flex;
        div{
            float: left;
            &:nth-child(1){flex: 0.8}
            &:nth-child(2){
                flex: 8.4;
                p{
                    margin-top: .16rem;
                    &:nth-child(1){
                        font-size: .64rem;
                    }
                    &:nth-child(2){
                        color: rgba(0,0,0,.54);
                        font-size: .32rem;
                    }
                    &:nth-child(3){
                        color: #ff6700;
                        font-size: .586667rem;
                    }
                }
            }
            &:nth-child(3){flex: 0.8}
        }
    }
    .xuan{
        display: flex;
        margin-top: .666667rem;
        div{
            &:nth-child(1){flex: 0.8}
            &:nth-child(2){
                flex: 8.4;
                ul{
                    li{
                        padding: .346667rem .213333rem;
                        border: 1px solid #e5e5e5;
                        border-radius: .266667rem;
                        background-color: #fafafa;
                        color: #3c3c3c;
                        &:nth-child(2){
                            margin-top: .186667rem;
                        }
                        &:nth-child(4){
                            .span4{
                                margin-right: .213333rem;
                                color: rgba(0,0,0,.54);
                                .spanx{
                                    vertical-align: middle;
                                    margin-right: .053333rem;
                                }
                            }
                        }
                        &:nth-child(n+2){
                            border-top: none;
                        }
                    }
                    .span1{
                        margin-right: .48rem;
                        color:rgba(0,0,0,.54);
                    }
                    .spanl{
                        float: right;
                        margin-right: .16rem;
                    }
                    .zeng{
                        border: 1px solid #ff6700;
                        color: #ff6700;
                        margin-right: .106667rem;
                    }
                    .xian{
                        margin-left: .266667rem;
                        color: #ff6700;
                    }
                    .sheng{
                        overflow: hidden;
                    }
                }
            }
            &:nth-child(3){flex: 0.8}
        }
    }
    .tutu{
        width: 100%;
        height: auto;
        margin-top: 1.066667rem;
        img{
            width: 100%;
        }
    }
</style>    
