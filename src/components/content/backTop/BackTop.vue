<template>
  <div class="back-top" @click="backTop">
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  methods: {
    backTop() {
      window.scroll(0, 0);
    },
  },
};
</script>

<style>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 55px;
  z-index: 20;
}

.back-top img {
  width: 50px;
  height: 50px;
}
</style>