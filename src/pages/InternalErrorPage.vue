<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Internal Error" subTitle="Error" />

    <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
        <div class="text-center">
            <img
                src="@/assets/images/internal-error.png"
                class="mw-430 mb-5 w-100"
                alt="error"
            />
            <h3 class="fs-24 mb-3">
                Looks like we did not find this page, please try again later.
            </h3>
            <p class="mb-4">
                But no worries! Our team is looking ever where while you wait safely.
            </p>
            <RouterLink
                to="/"
                class="btn btn-primary py-2 px-4 fs-16 fw-medium"
            >
                <span class="d-inline-block py-1">Back To Dashboard</span>
            </RouterLink>
        </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Commons/PageTitle.vue";

export default defineComponent({
  name: "InternalErrorPage",
  components: {
    PageTitle,
  },
});
</script>
