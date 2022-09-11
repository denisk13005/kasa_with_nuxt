<template>
  <div v-if="accommodation.pictures" class="accPage">
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
    <div class="descAndEquipments">
      <TheDropdown
        class="dropdownAccPage"
        title="Equipements"
        :equipments="accommodation.equipments"
      />
      <TheDropdown
        class="dropdownAccPage"
        title="Description"
        :description="accommodation.description"
      />
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
.accPage {
  margin-bottom: 50px;
}
.galleryContainer {
  width: 100%;
  height: 415px;
  margin-top: 30px;
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
.descAndEquipments {
  display: flex;
  justify-content: space-between;
}
.dropdownAccPage {
  margin-top: 24px;
  width: 48%;
}
</style>
