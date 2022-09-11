<template>
  <div v-if="accommodation.pictures">
    <div class="galleryContainer">
      <img :src="accommodation.pictures[0]" alt="" />
    </div>
    <div class="titleEtc">
      <div class="titleLocTags">
        <h1 class="accommodationTitle">{{ accommodation.title }}</h1>
        <p class="accommodationLocation">{{ accommodation.location }}</p>
        <span
          v-for="el in accommodation.tags"
          :key="el"
          class="accommodationTag"
          >{{ el }}</span
        >
      </div>
      <div class="nameAndStars">
        <div class="nameAndImg">
          <div class="name">
            <p>{{ accommodation.host.name.split(' ')[0] }}</p>

            <p>{{ accommodation.host.name.split(' ')[1] }}</p>
          </div>
          <img :src="accommodation.host.picture" alt="" />
        </div>
        <div class="starsContainer">
          <span> </span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="desc&Equipments">
      <TheDropdown title="Equipements" :equipments="accommodation.equipments" />
    </div>
  </div>
  <div v-else>Loading ...</div>
</template>

<script>
import { getAccommodation } from '~/utils/fetcher'

export default {
  layout: 'default_layout',
  data() {
    return {
      id: this.$route.params.id.split(':')[1],
      accommodation: [],
    }
  },
  mounted() {
    const res = getAccommodation(this.id.toString())
    this.accommodation = res[0]
  },
  methods: {},
}
</script>

<style scoped>
.galleryContainer {
  width: 100%;
  height: 415px;
  margin-top: 30px;
  background: radial-gradient(
    circle,
    rgb(80, 217, 241) 10%,
    rgb(189, 218, 189) 60%
  );
}
.galleryContainer img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.titleEtc {
  display: flex;
  justify-content: space-between;
  color: var(--primary-color);
}
.accommodationTitle {
  font-size: 36px;
}
.accommodationLocation {
  font-size: 18px;
}
.accommodationTag {
  min-width: 115px;
  background-color: var(--primary-color);
  color: white;
  margin-right: 10px;
  padding: 4px 8px;
  border-radius: 10px;
  margin-top: 20px;
  display: inline-block;
  text-align: center;
}
.nameAndStars {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.nameAndImg {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.nameAndImg .name {
  font-size: 18px;
  text-align: right;
}
.nameAndImg img {
  width: 64px;
  border-radius: 100%;
  margin-left: 10px;
}
.starsContainer {
  border: 1px solid green;
}
</style>
