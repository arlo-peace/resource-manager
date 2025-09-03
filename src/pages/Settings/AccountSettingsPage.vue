<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle :pageTitle="$t('accountsetting')" :subTitle="$t('settings')" />

    <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <SettingsMenu />

      <div class="mb-4">
        <h4 class="fs-20 mb-1">{{ $t('profile') }}</h4>
        <p class="fs-15">{{ $t('updh') }}</p>
      </div>

      <form>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">{{ $t('displayname') }}</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  value="Olivia"
                />
                <i
                  class="ri-user-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">{{ $t('username') }}</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  value=""
                  :placeholder="$t('username')"
                />
                <i
                  class="ri-user-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">{{ $t('role') }}</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55 text-gray-light"
                  value="Main"
                  disabled
                />
                <i
                  class="ri-shield-keyhole-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">{{ $t('team') }}</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55 text-gray-light"
                  value="Team Name"
                  disabled
                />
                <i
                  class="ri-team-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">{{ $t('telegram') }}</label>
              <div class="form-group position-relative">
                <input
                  type="url"
                  class="form-control text-dark ps-5 h-55"
                  value="http://telegram.com/"
                />
                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="d-flex flex-wrap gap-3">
              <!-- <button
                type="submit"
                class="btn btn-danger py-2 px-4 fw-medium fs-16 text-white"
              >
                {{ $t('cancel') }}
              </button> -->
              <button
                type="submit"
                class="btn btn-primary py-2 px-4 fw-medium fs-16"
              >
                <i class="ri-check-line text-white fw-medium"></i> {{ $t('updateprofile') }}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Commons/PageTitle.vue";
import SettingsMenu from "./SettingsMenu.vue";

export default defineComponent({
  name: "AccountSettingsPage",
  components: {
    PageTitle,
    SettingsMenu,
  },
});
</script>
