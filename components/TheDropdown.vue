<template>
  <div class="dropdownContainer">
    <div class="headerDropdown">
      <p>{{ title }}</p>
      <span class="arrow" @click="toggleOpen">^</span>
    </div>
    <div class="containDropdown">
      <p v-if="description">{{ description }}</p>
      <ul v-else>
        <li v-for="equipment in equipments" :key="equipment">
          {{ equipment }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    description: {
      type: String,
      required: false,
    },
    // eslint-disable-next-line vue/require-default-prop
    equipments: {
      type: Array,
      required: false,
    },
  },
  methods: {
    toggleOpen(e) {
      e.target.classList.toggle('open')
      e.target.parentElement.nextElementSibling.classList.toggle('visible')
    },
  },
}
</script>

<style scoped>
.dropdownContainer {
  overflow: hidden;
}
.headerDropdown {
  background-color: var(--primary-color);
  color: white;
  padding: 5px 15px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.headerDropdown .arrow {
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s linear;
  padding: 0;
}
.headerDropdown .open {
  transform: rotate(180deg);
}
.containDropdown {
  max-height: 0;
  padding: 0px;
  transition: all 0.1s linear;
  transform-origin: center;
  background-color: var(--dropdown_background);
}
.visible {
  max-height: 40vh;

  padding: 20px;
}
</style>
