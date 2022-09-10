<template>
  <div class="bannerContainer">
    <img v-if="img" :src="require(`../assets/images/${img}.png`)" alt="photo" />
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    img: {
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
.bannerContainer {
  height: 223px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 25px;
  margin-top: 68px;
}
img {
  width: 100%;
  height: 100%;
}
.bannerContainer::after {
  content: '';
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
}
.bannerContainer p {
  color: white;
  font-size: 48px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  width: 80%;
}
@media screen and (max-width: 768px) {
  .bannerContainer img {
    object-fit: cover;
    object-position: right;
    width: 150%;
  }
  .bannerContainer p {
    font-size: 24px;
    width: 60%;
    left: 20px;
    transform: translate(0%, -50%);
  }
}
</style>
