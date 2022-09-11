<template>
  <div class="galleryContainer">
    <span class="arrow leftArrow" @click="previous"></span>
    <div class="imgContainer">
      <img :src="images[index]" alt="" />
    </div>
    <span class="arrow rightArrow" @click="next"></span>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      index: 0,
    }
  },
  methods: {
    next() {
      this.index === this.images.length - 1 ? (this.index = 0) : this.index++
    },
    previous() {
      this.index === 0 ? (this.index = this.images.length - 1) : this.index--
    },
  },
}
</script>

<style scoped>
.galleryContainer {
  width: 100%;
  height: 340px;
  position: relative;
  margin-bottom: 24px;
  border-radius: 30px;
  overflow: hidden;
}
.arrow {
  width: 50px;
  height: 50px;
  position: absolute;
  cursor: pointer;
  transform: translateY(-75%) rotate(45deg);
  z-index: 11;
}
.leftArrow {
  top: 50%;
  left: 20px;
  border-bottom: 4px solid white;
  border-left: 4px solid white;
}
.rightArrow {
  top: 50%;
  right: 20px;
  border-top: 4px solid white;
  border-right: 4px solid white;
}
.imgContainer {
  width: 100%;
  height: 100%;
  position: relative;
}
.imgContainer::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
  z-index: 10;
}
.imgContainer img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
