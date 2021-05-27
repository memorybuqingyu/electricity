<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" :key="item">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "@/network/home.js";
import { Swiper, SwiperItem } from "@/components/common/swiper/index.js";

export default {
  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.data.banner.list;
      console.log(this.banners);
      this.recommends = res.recommends;
    });
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
  },
};
</script>
<style>
.home-nav {
  background-color: var(--color-tint);
  color: aliceblue;
}
img {
  width: 100%;
  height: 100%;
}
</style>