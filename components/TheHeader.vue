<template>
  <header class="header-container">
    <div class="left">
      <img src="~/assets/images/LOGO.png" alt="" />
    </div>
    <div class="right">
      <nav>
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/about_page">A propos</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  width: 210px;
  height: 68px;
}
.left img {
  width: 100%;
}
.right nav a {
  margin-left: 58px;
  font-size: 24px;
  color: var(--primary-color);
}
.right nav a:visited {
  color: var(--primary-color);
}
.right nav a:hover {
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  .left {
    width: 145px;
    height: 47px;
  }
  .right nav a {
    font-size: 12px;
    margin-left: 10px;
  }
}
</style>
