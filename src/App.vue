<template>
  <div class="page-wrapper">
    <div class="navbar-container">
      <NavbarMenu />
    </div>
      <div class="routes-wrapper">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </div>
  </div>
</template>

<script setup >
import NavbarMenu from "./components/NavbarMenu.vue";
import { useRoute } from "vue-router";
import { useRouteStore } from "./store/routeStore";
import { watch } from "vue";
const routeStore = useRouteStore();
const route = useRoute();


//watch route changes and update routeStore
watch(route, (newVal) => {
  routeStore.currentRoutePath = newVal.path;
});

</script>

<style lang="scss">

.page-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  .navbar-container {
    margin: 0 auto;
    width: 70%;
  }
}

.routes-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
