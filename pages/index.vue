<template>
  <div>
    <TheBanner
      class="banner"
      img="background_accueil"
      title="Chez vous, partout et ailleurs"
    />
    <section class="thumbnailsContainer">
      <TheThumbnail
        v-for="accommodation in accommodations"
        :key="accommodation.id"
        :cover="accommodation.cover"
        :title="accommodation.title"
      />
    </section>
  </div>
</template>

<script>
// import { fetchDatas } from '~/utils/fetcher'
import { accommodations } from '../assets/datas/datas.json'
import TheThumbnail from '~/components/TheThumbnail.vue'
export default {
  name: 'IndexPage',
  components: { TheThumbnail },
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
}
</style>
