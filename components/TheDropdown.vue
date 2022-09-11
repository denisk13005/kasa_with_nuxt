<template>
  <div class="dropdownContainer">
    <div class="headerDropdown">
      <p>{{ title }}</p>
      <span class="arrow" @click="toggleOpen">^</span>
    </div>
    <div class="containDropdown visible">
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
    },
  },
}
</script>

<style scoped>
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
  height: 20px;
  width: 20px;
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
  display: none;
  transform: scale(0);
  transition: transform 0.15s linear;
}
.visible {
  display: block;
  transform: scale(1);
}
</style>
