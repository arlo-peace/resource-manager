<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle :pageTitle="$t('changepassword')" :subTitle="$t('settings')" />

    <div class="card bg-white border-0 rounded-3 mb-4">
      <div class="card-body p-4">
        <SettingsMenu />

        <form>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group mb-4">
                <label class="label text-secondary">{{ $t('oldpassword') }}</label>
                <div class="form-group">
                  <div class="password-wrapper position-relative">
                    <input
                      type="password"
                      id="password"
                      class="form-control h-55 text-dark"
                      value="@password#"
                    />
                    <i
                      style="color: #a9a9c8; font-size: 16px; right: 15px"
                      class="ri-eye-off-line password-toggle-icon translate-middle-y top-50 position-absolute"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group mb-4">
                <label class="label text-secondary">{{ $t('newpassword') }}</label>
                <div class="form-group">
                  <div class="password-wrapper position-relative">
                    <input
                      type="password"
                      id="password"
                      class="form-control h-55 text-dark"
                      value="@password#"
                    />
                    <i
                      style="color: #a9a9c8; font-size: 16px; right: 15px"
                      class="ri-eye-off-line password-toggle-icon translate-middle-y top-50 position-absolute"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-group mb-4">
                <label class="label text-secondary">{{ $t('confirmpassword') }}</label>
                <div class="form-group">
                  <div class="password-wrapper position-relative">
                    <input
                      type="password"
                      id="password"
                      class="form-control h-55 text-dark"
                      value="@password#"
                    />
                    <i
                      style="color: #a9a9c8; font-size: 16px; right: 15px"
                      class="ri-eye-off-line password-toggle-icon translate-middle-y top-50 position-absolute"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-group d-flex gap-3 align-items-center">
                <button
                  type="submit"
                  class="btn btn-primary py-2 px-4 fw-medium fs-16"
                >
                  <i class="ri-check-line text-white fw-medium"></i>
                  {{ $t('changepassword') }}
                </button>
                <!-- <a href="#" class="text-danger fs-16 text-decoration-none">
                  Forgot Password?
                </a> -->
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
  name: "ChangePasswordPage",
  components: {
    PageTitle,
    SettingsMenu,
  },
});
</script>
