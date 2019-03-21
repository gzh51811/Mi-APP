
<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images[0][tap.type]" :key="index">
      <img :v-lazy="image" :src="image" :height="tap.h" width="100%">
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
    props:['tap'],
    data(){
        return{
            images:[
               {
                   tuijian: [
                    'https://i8.mifile.cn/v1/a1/cc841d72-a4b9-9990-dde5-dfcf7314129a!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/b7e7e28b-a4e7-def3-a004-d40b9da7706a!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/649e9979-217b-8477-6240-e033677ab4ee!720x360.webp'
                   ],
                   phone:[
                       'https://i8.mifile.cn/v1/a1/46f6e095-63d1-32ce-d4ba-e65ef7f3e327!720x360.webp',
                       'https://i8.mifile.cn/v1/a1/d7981516-3551-b7fe-e16a-f99828cc2a01!720x360.webp',
                       'https://i8.mifile.cn/v1/a1/e6832d54-04e3-0ab3-d63d-834c5b76760d!720x360.webp'
                   ],
                   zhineng:[
                       'https://i8.mifile.cn/v1/a1/dad6f06f-e380-0746-7b64-e70e6c0328ff!720x360.webp',
                       'https://i8.mifile.cn/v1/a1/506ad600-a881-f8c9-ac21-69d8e0a1dff4!720x360.webp',
                       'https://i8.mifile.cn/v1/a1/7fbef3f2-c6dc-451f-2797-8c9b1b4b1747!720x360.webp'
                   ],
                   tv:[
                       'https://i8.mifile.cn/v1/a1/2cdf5174-2136-200d-14a3-18bcf1fee5f6!720x466.webp',
                       'https://i8.mifile.cn/v1/a1/289913d8-8f7b-d9ed-918f-d6c15924db7f!720x466.webp'
                   ],
                   jiadian:[
                       'https://i8.mifile.cn/v1/a1/9cd7e389-7a9d-cb82-b141-49f73c149ab9!720x360.webp',
                       'https://i8.mifile.cn/v1/a1/90268429-75c9-311f-a700-d8b50730e1f3!720x360.webp',
                       'https://i8.mifile.cn/v1/a1/28b65415-4a1f-2535-b3df-2f40fbed805a!720x360.webp'
                   ],
                   pc:[
                       'https://i8.mifile.cn/v1/a1/909a8119-dc2e-7574-fbec-da3eae8a1cb9!720x505.webp'
                   ],
                   around:[
                       'https://i8.mifile.cn/v1/a1/1007fd2d-41b6-0bde-8bc9-a4add6196cd5!720x360.webp',
                       'https://i8.mifile.cn/v1/a1/7248bae8-fd8a-1ddf-0899-668e0353c925!720x360.webp',
                       'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d60bd33b50c29251fd106f18f147a845.jpg?thumb=1&w=720&h=360'
                   ]
               }
               
            ]
        }
    }
};
</script>