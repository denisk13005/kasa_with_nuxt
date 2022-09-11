<template>
  <div class="aboutPage">
    <TheBanner img="background_about" />
    <TheDropdown
      v-for="about in abouts"
      :key="about.title"
      :title="about.title"
      :description="about.description"
      class="dropdown"
    />
  </div>
</template>

<script>
import { abouts } from 'assets/datas/datas.json'
export default {
  layout: 'default_layout',
  data() {
    return {
      abouts,
    }
  },
}
</script>

<style scoped>
.dropdown {
  width: 85%;
  margin: auto;
  margin-top: 31px;
}
.aboutPage {
  margin-bottom: 140px;
}

@media screen and (max-width: 768px) {
  .dropdown {
    width: 100%;
  }
  .aboutPage {
    margin-bottom: 140px;
  }
}
</style>
