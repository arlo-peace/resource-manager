<template>
  <header
    :class="[
      'header-area bg-white mb-4 rounded-bottom-15',
      { sticky: isSticky },
    ]"
  >
    <div class="row align-items-center header-inner-area">
      <div class="col-lg-5 col-sm-6">
        <div class="left-header-content">
          <ul
            class="d-flex align-items-center ps-0 mb-0 list-unstyled justify-content-center justify-content-sm-start"
          >
            <li class="logo">
              <RouterLink to="/dashboard" class="d-block text-decoration-none">
                <img class="logo-black" src="@/assets/images/logo.svg" alt="logo-icon" />
              </RouterLink>
            </li>
            <li class="burger-menu">
              <button
                class="header-burger-menu bg-transparent p-0 border-0"
                :class="[
                  'header-burger-menu bg-transparent p-0 border-0',
                  { active: stateStoreInstance.open },
                ]"
                @click="stateStoreInstance.onChange"
              >
                <span class="material-symbols-outlined">menu</span>
              </button>
            </li>
            <li>
              <!-- <SearchFrom /> -->
               <h5 class="mb-0">Team Name</h5>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-7 col-sm-6">
        <div class="right-header-content mt-2 mt-sm-0">
          <ul
            class="d-flex align-items-center justify-content-center justify-content-sm-end ps-0 mb-0 list-unstyled"
          >
            <li class="header-right-item">
              <DarkSwtichBtn />
            </li>
            <li class="header-right-item">
              <LanguageMenu />
            </li>
            <li class="header-right-item">
              <NotificationsLists />
            </li>
            <li class="header-right-item">
              <AdminProfile />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import stateStore from "@/utils/store";

import SearchFrom from "./SearchFrom.vue";
import DarkSwtichBtn from "./DarkSwtichBtn.vue";
import LanguageMenu from "./LanguageMenu.vue";
import NotificationsLists from "./NotificationsLists.vue";
import AdminProfile from "./AdminProfile.vue";

export default defineComponent({
  name: "TopHeader",
  components: {
    SearchFrom,
    DarkSwtichBtn,
    LanguageMenu,
    NotificationsLists,
    AdminProfile,
  },
  setup() {
    const stateStoreInstance = stateStore;
    const isSticky = ref(false);

    onMounted(() => {
      window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        isSticky.value = scrollPos >= 100;
      });
    });

    return {
      isSticky,
      stateStoreInstance,
    };
  },
});
</script>
