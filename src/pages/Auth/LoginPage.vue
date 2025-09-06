<template>
  <div class="m-1230">
    <div class="row align-items-center">
      <div class="col-lg-6 d-none d-lg-block">
        <img src="@/assets/images/login.jpg" class="rounded-3 vh-100" alt="login" />
      </div>
      <div class="col-lg-6">
        <div class="col-lg-3 me-lg-auto mb-20">
          <select class="form-select" v-model="langchange" @change="handleLanguage" aria-label="Language">
            <option value="en">English</option>
            <option value="cn">Chinese</option>
          </select>
        </div>
        <div class="mw-480">
          <h3 class="fs-28 mb-2">{{$t('wbtm')}}</h3>
          <form @submit.prevent="handleSubmit" :class="{ 'was-validated': submitted }" novalidate>
            <div class="form-group mb-4">
              <label class="label text-secondary">{{$t('username')}}</label>
              <input
                type="text"
                class="form-control h-55"
                :placeholder="$t('username')"
                v-model="susername"
                required
              />
              <div class="invalid-feedback">
                Please type username.
              </div>
            </div>
            <div class="form-group mb-4">
              <label class="label text-secondary">{{$t('password')}}</label>
              <input
                type="password"
                class="form-control h-55"
                :placeholder="$t('password')"
                v-model="spassword"
                required
              />
              <div class="invalid-feedback">
                Please type password.
              </div>
            </div>
            <div class="form-group mb-4">
              <button
                class="btn btn-primary fw-medium py-2 px-3 w-100"
              >
                <div
                  class="d-flex align-items-center justify-content-center py-1"
                >
                  <i class="material-symbols-outlined text-white fs-20 me-2">
                    login
                  </i>
                  <span>{{$t('login')}}</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAlertStore } from "@/stores/alert";
import { useAuthStore } from "@/stores/auth";
import { useLocaleStore } from "@/stores/locale";
import { defineComponent, onMounted, ref, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",

  setup() {
    const router = useRouter();
    const auth = useAuthStore();
    const alert = useAlertStore();

    const susername = ref("");
    const spassword = ref("");
    const submitted = ref(false);
    const { t, locale } = useI18n()
    
    const langchange = ref(locale.value);

    onMounted(() => {
      document.body.classList.add("bg-white");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white");
    });

    const handleSubmit = () => {
      if (susername.value === "admin" && spassword.value === "123456") {
        auth.login(susername.value, spassword.value);
      } else {
        submitted.value = true
        alert.showAlert("Login error", "danger")
      }
    }

    const handleLanguage = () => {
      locale.value = langchange.value
      const localeStore = useLocaleStore();
      localeStore.setLocale(langchange.value)
    }

    return {
      langchange,
      alert,
      submitted,
      auth,
      susername,
      spassword,
      handleLanguage,
      handleSubmit
    }
  },
});
</script>
