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
  background-color: aqua;
  position: relative;
  margin-bottom: 24px;
}
.arrow {
  width: 50px;
  height: 50px;
  position: absolute;
  cursor: pointer;
  transform: translateY(-75%) rotate(45deg);
}
.leftArrow {
  top: 50%;
  left: 20px;
  border-bottom: 2px solid white;
  border-left: 2px solid white;
}
.rightArrow {
  top: 50%;
  right: 20px;
  border-top: 2px solid white;
  border-right: 2px solid white;
}
.imgContainer {
  width: 100%;
  height: 100%;
}
.imgContainer img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
