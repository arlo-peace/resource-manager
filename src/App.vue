<template>
  <div>
    <Preloader v-if="isLoading" />
    <LeftSidebar v-if="shouldShowSidebar && !isNotFound" />
    <div class="container-fluid">
      <div
        class="main-content d-flex flex-column"
        :class="{ 'p-0': shouldShowPaddingZero || isNotFound }"
      >
        <TopHeader v-if="shouldShowHeader && !isNotFound" />
        <router-view />
        <!-- <div class="flex-grow-1" v-if="shouldShowDiv && !isNotFound"></div> -->
        <!-- <MainFooter v-if="shouldShowFooter && !isNotFound" /> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect, computed } from "vue";
import { useRoute } from "vue-router";
import stateStore from "./utils/store";
import Preloader from "./components/Layouts/Preloader.vue";
import LeftSidebar from "./components/Layouts/LeftSidebar.vue";
import TopHeader from "./components/Layouts/TopHeader/index.vue";

export default defineComponent({
  name: "App",
  components: {
    Preloader,
    LeftSidebar,
    TopHeader
  },
  setup() {
    const isLoading = ref(true);
    const route = useRoute();
    const hiddenRoutes = [
      // "/",
      "/login",
      "/lock-screen",
    ];

    const shouldShowSidebar = computed(
      () => !hiddenRoutes.includes(route.path)
    );
    const shouldShowHeader = computed(() => !hiddenRoutes.includes(route.path));

    const isNotFound = computed(() =>
      route.matched.some((record) => record.path === "/:pathMatch(.*)*")
    );

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 1000);

      watchEffect(() => {
        if (stateStore.open) {
          document.body.classList.remove("sidebar-show");
          document.body.classList.add("sidebar-hide");
        } else {
          document.body.classList.remove("sidebar-hide");
          document.body.classList.add("sidebar-show");
        }
      });

    })

    return {
      isLoading,
      isNotFound,
      shouldShowSidebar,
      shouldShowHeader
    }
  }
})
</script>
<style lang="scss" scoped>
.padding-0 {
  .container-fluid {
    padding: 0;
  }
}
</style>

