<template>
  <div>
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
  border: var(--border);
  width: 85%;
  margin: auto;
}
@media screen and (max-width: 768px) {
  .dropdown {
    width: 100%;
  }
}
</style>
