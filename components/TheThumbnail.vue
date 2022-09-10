<template>
  <!-- <NuxtLink > -->
  <div class="thumbnailContainer">
    <img class="thumbnailImg" :src="cover" alt="" />
    <p class="thumbnailP">{{ title }}</p>
  </div>
  <!-- </NuxtLink> -->
</template>

<script>
export default {
  props: {
    cover: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.thumbnailContainer {
  width: 31%;
  height: 340px;
  background-color: aquamarine;
  position: relative;
  margin-bottom: 50px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}
.thumbnailContainer::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.798739564185049) 0%,
    rgba(255, 255, 255, 0) 30%
  );
  z-index: 10;
}
.thumbnailContainer .thumbnailImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.thumbnailContainer .thumbnailP {
  position: absolute;
  bottom: 0px;
  left: 20px;
  color: white;
  width: 70%;
  z-index: 12;
}
@media screen and (max-width: 1000px) {
  .thumbnailContainer {
    width: 45%;
  }
}
@media screen and (max-width: 768px) {
  .thumbnailContainer {
    width: 100%;
    height: 255px;
  }
}
</style>
