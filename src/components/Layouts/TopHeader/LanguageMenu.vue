<template>
  <div class="dropdown notifications language">
    <button
      class="btn btn-secondary dropdown-toggle border-0 p-0 position-relative"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span class="material-symbols-outlined">translate</span>
    </button>
    <div class="dropdown-menu dropdown-lg p-0 border-0 dropdown-menu-end">
      <span class="fw-semibold fs-15 text-secondary title">
        {{ $t('chooselanguage') }}
      </span>
      <div class="max-h-275">
        <div class="notification-menu">
          <a href="javascript:void(0);" class="dropdown-item">
            <div 
              class="d-flex align-items-center"
              @click="changeLanguage('en')"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/usa.svg"
                  class="wh-30 rounded-circle"
                  alt="united-states"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <span class="text-secondary fw-medium fs-14">{{ $t('english') }}</span>
              </div>
            </div>
          </a>
          <a href="javascript:void(0);" class="dropdown-item">
            <div 
              class="d-flex align-items-center"
              @click="changeLanguage('cn')"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/cn.svg"
                  class="wh-30 rounded-circle"
                  alt="united-states"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <span class="text-secondary fw-medium fs-14">{{ $t('chinese') }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLocaleStore } from '@/stores/locale';

export default {
  name: "LanguageMenu",
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
      const locale = useLocaleStore();
      locale.setLocale(lang)
    }
  }
};
</script>
