<template>
  <div>
    <TheBanner
      class="banner"
      img="background_accueil"
      title="Chez vous, partout et ailleurs"
    />
    <section class="thumbnailsContainer">
      <NuxtLink
        v-for="accommodation in accommodations"
        :key="accommodation.id"
        class="linkContainer"
        :to="'/accommodation/:' + accommodation.id"
      >
        <TheThumbnail
          :cover="accommodation.cover"
          :title="accommodation.title"
        />
      </NuxtLink>
    </section>
  </div>
</template>

<script>
// import { fetchDatas } from '~/utils/fetcher'
import { accommodations } from '../assets/datas/datas.json'
export default {
  name: 'IndexPage',
  layout: 'default_layout',
  data() {
    return {
      accommodations,
    }
  },
}
</script>
<style scoped>
.thumbnailsContainer {
  width: 100%;
  height: auto;
  background-color: var(--background-color);
  margin-top: 43px;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px;
  padding-bottom: 0px;
  margin-bottom: 50px;
}
.linkContainer {
  width: 31%;
  margin-bottom: 50px;
}
@media screen and (max-width: 1000px) {
  .linkContainer {
    width: 45%;
  }
}
@media screen and (max-width: 768px) {
  .thumbnailsContainer {
    background-color: transparent;
    padding: 0;
  }
  .bannerContainer {
    height: 111px;
    margin-top: 20px;
    border-radius: 10px;
  }
  .linkContainer {
    width: 100%;
    height: 255px;
  }
}
</style>
