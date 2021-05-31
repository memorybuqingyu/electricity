<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center><div>购物街</div></template>
    </nav-bar>
    <home-swiper :banners="banners" />

    <home-recommend-view :recommends="recommends" />

    <feature-view />

    <tab-control
      :titles="titles"
      class="tab-control"
      @tabClick="tabClick"
    ></tab-control>

    <goods-list :goods="showGoods">
      <goods-list-item> </goods-list-item>
    </goods-list>

    <back-top></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import FeatureView from "./childComps/FeatureView.vue";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";

import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import GoodsListItem from "@/components/content/goods/GoodsListItem.vue";
import BackTop from '@/components/content/backTop/BackTop.vue';

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";

export default {
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      //货物展示
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      //货物变量
      currentType: "pop",
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    //网络请求的方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.banner.list;
        this.recommends = res.recommend.list;
        console.log(this.recommends);
      });
    },
    getHomeGoods(type) {
      const pages = this.goods[type].page + 1;
      getHomeGoods(type, pages).then((res) => {
        this.goods[type].list.push(...res.list);
        this.goods[type].page += 1;
      });
    },

    //事件监听的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsListItem,
    GoodsList,
    BackTop,
  },
};
</script>
<style>
#home {
  padding-top: 44px;
  margin-bottom: 50px;
}
.home-nav {
  background-color: var(--color-tint);
  color: aliceblue;
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 43px;
  z-index: 9;
}
</style>