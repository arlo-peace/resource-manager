<template><div class="m-auto m-1230">
    <div class="row align-items-center">
      <div class="col-lg-6 d-none d-lg-block">
        <img src="@/assets/images/login.jpg" class="rounded-3" alt="login" />
      </div>
      <div class="col-lg-6">
        <div class="mw-480 ms-lg-auto">
          <div class="d-inline-block mb-4">
            <img
              src="@/assets/images/logo.svg"
              class="rounded-3 for-light-logo"
              alt="login"
            />
            <img
              src="@/assets/images/white-logo.svg"
              class="rounded-3 for-dark-logo"
              alt="login"
            />
          </div>
          <h3 class="fs-28 mb-2">Welcome back to Management</h3>
          <form>
            <div class="form-group mb-4">
              <label class="label text-secondary">Username</label>
              <input
                type="username"
                class="form-control h-55"
                placeholder="example@trezo.com"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label text-secondary">Password</label>
              <input
                type="password"
                class="form-control h-55"
                placeholder="Type password"
              />
            </div>
            <!-- <div class="form-group mb-4">
              <RouterLink
                to="/authentication/forget-password"
                class="text-decoration-none text-primary fw-semibold"
              >
                Forgot Password?
              </RouterLink>
            </div> -->
            <div class="form-group mb-4">
              <RouterLink
                to="/dashboard"
                class="btn btn-primary fw-medium py-2 px-3 w-100"
              >
                <div
                  class="d-flex align-items-center justify-content-center py-1"
                >
                  <i class="material-symbols-outlined text-white fs-20 me-2">
                    login
                  </i>
                  <span>Login</span>
                </div>
              </RouterLink>
            </div>
            <!-- <div class="form-group">
              <p>
                Don’t have an account.
                <RouterLink
                  to="/authentication/register"
                  class="fw-medium text-primary text-decoration-none"
                >
                  Register
                </RouterLink>
              </p>
            </div> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "LoginPage",

  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white");
    });
  },
});
</script>
