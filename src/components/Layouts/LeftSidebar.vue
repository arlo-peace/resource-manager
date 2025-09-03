<template>
  <div class="sidebar-area">
    <div class="logo position-relative">
      <RouterLink
        to="/"
        class="d-block text-decoration-none position-relative"
      >
        <img src="@/assets/images/logo-icon.png" alt="logo-icon" />
        <span class="logo-text fw-bold text-dark">{{ $t('sitetitle') }}</span>
      </RouterLink>
      <button
        class="sidebar-burger-menu bg-transparent p-0 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y"
        id="sidebar-burger-menu"
        @click="stateStoreInstance.onChange"
      >
        <i data-feather="x"></i>
      </button>
    </div>

    <div class="layout-menu menu-vertical menu hover-scroll-bar">
      <ul class="menu-inner">
        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">{{ $t('main') }}</span>
        </li>
        <li class="menu-item">
          <RouterLink to="/" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              dashboard
            </span>
            <span class="title">{{ $t('dashboard') }}</span>
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/server" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              host
            </span>
            <span class="title">{{ $t('server') }}</span>
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/domain" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              domain
            </span>
            <span class="title">{{ $t('domain') }}</span>
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/ssl" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              domain_verification
            </span>
            <span class="title">{{ $t('ssl') }}</span>
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/cnd" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              hls
            </span>
            <span class="title">{{ $t('cdn') }}</span>
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/others" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              alt_route
            </span>
            <span class="title">{{ $t('othersource') }}</span>
          </RouterLink>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">{{ $t('finance') }}</span>
        </li>
        <li class="menu-item">
          <RouterLink to="/revenue" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              finance_mode
            </span>
            <span class="title">{{ $t('revenue') }}</span>
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/spend" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              money
            </span>
            <span class="title">{{ $t('income') }}</span>
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/spend" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              money_off
            </span>
            <span class="title">{{ $t('expend') }}</span>
          </RouterLink>
        </li>
        
        <li class="menu-title small text-uppercase">
          <span class="menu-title-text uppercase">{{ $t('provider') }}</span>
        </li>
        <li class="menu-item">
          <RouterLink to="/provider" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              conversion_path
            </span>
            <span class="title">{{ $t('provider') }}</span>
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/providerinfo" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              contact_phone
            </span>
            <span class="title">{{ $t('providerinfo') }}</span>
          </RouterLink>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text uppercase">{{ $t('teams') }}</span>
        </li>
        <li class="menu-item">
          <RouterLink to="/teams" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              groups
            </span>
            <span class="title">{{ $t('teams') }}</span>
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/members" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              person
            </span>
            <span class="title">{{ $t('members') }}</span>
          </RouterLink>
        </li>
        <!-- <li class="menu-item">
          <RouterLink to="/tasks" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              task_alt
            </span>
            <span class="title">Task</span>
          </RouterLink>
        </li> -->
        
        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">{{ $t('authentication') }}</span>
        </li>
        <li class="menu-item">
          <RouterLink to="/role" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              assignment_ind
            </span>
            <span class="title">{{ $t('role') }}</span>
          </RouterLink>
        </li>
        <!-- <li class="menu-item">
          <RouterLink to="/permission" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              approval_delegation
            </span>
            <span class="title">Permission</span>
          </RouterLink>
        </li> -->
        <li class="menu-item">
          <RouterLink to="/role-permission" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              passkey
            </span>
            <span class="title">{{ $t('rolepermission') }}</span>
          </RouterLink>
        </li>
        <!-- <li class="menu-item">
          <RouterLink to="/user-role" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              approval_delegation
            </span>
            <span class="title">User Role</span>
          </RouterLink>
        </li> -->
        <li class="menu-item">
          <RouterLink to="/userlist" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              person
            </span>
            <span class="title">{{ $t('userlist') }}</span>
          </RouterLink>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">{{ $t('others') }}</span>
        </li>

        <!-- <li class="menu-item">
          <RouterLink to="/my-profile" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              account_circle
            </span>
            <span class="title">My Profile</span>
          </RouterLink>
        </li> -->

        <li class="menu-item" :class="{ open: isOpen('settings') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('settings')"
          >
            <span class="material-symbols-outlined menu-icon">settings</span>
            <span class="title">{{ $t('settings') }}</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('settings')">
            <li class="menu-item">
              <RouterLink to="/settings/account-settings" class="menu-link">
                {{ $t('accsetting') }}
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/settings/change-password" class="menu-link">
                {{ $t('changepassword') }}
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <span @click="logOut" class="menu-link" role="button">
            <span class="material-symbols-outlined menu-icon">logout</span>
            <span class="title">{{ $t('logout') }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import feather from "feather-icons";
import stateStore from "@/utils/store";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LeftSidebar",
  setup() {
    const stateStoreInstance = stateStore;

    const router = useRouter();

    // Reactive state to track which menu items are open
    const openMenu = ref(null);

    // Method to toggle the menu items
    const toggleMenu = (menu) => {
      // If the same menu is clicked, toggle it; otherwise, open the clicked menu
      openMenu.value = openMenu.value === menu ? null : menu;
    };

    // Method to check if a menu is open
    const isOpen = (menu) => {
      return openMenu.value === menu;
    };

    const logOut = () => {
      // clanup data
      // localStorage.removeItem("authToken");
      // sessionStorage.clear();
      // stateStoreInstance.reset?.();
      
      router.replace("/login");
    };

    onMounted(() => {
      feather.replace();
    });

    return {
      stateStoreInstance,
      toggleMenu,
      isOpen,
      logOut
    };
  },
});
</script>
