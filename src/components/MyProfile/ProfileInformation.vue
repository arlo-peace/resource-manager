<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3 mb-lg-4">Profile Information</h3>
      <div class="d-flex align-items-center mb-4">
        <div class="flex-shrink-0">
          <img
            src="@/assets/images/administrator.jpg"
            class="rounded-circle border border-2 wh-75"
            alt="user"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-17 mb-1 fw-semibold">Olivia John</h4>
          <span class="fs-14">Marketing Manager</span>
        </div>
      </div>
      <ul class="ps-0 mb-0 list-unstyled">
        <li class="d-flex align-items-center mb-2 pb-1">
          <span>User ID:</span>
          <span class="text-secondary fw-medium ms-1">7001</span>
        </li>
        <li class="d-flex align-items-center mb-2 pb-1">
          <span>Full Name:</span>
          <span class="text-secondary fw-medium ms-1">Olivia John</span>
        </li>
        <li class="d-flex align-items-center mb-2 pb-1">
          <span>Email:</span>
          <span class="text-secondary fw-medium ms-1">olivia@trezo.com</span>
        </li>
        <li class="d-flex align-items-center mb-2 pb-1">
          <span>Role:</span>
          <span class="text-secondary fw-medium ms-1">Administrator</span>
        </li>
        <li class="d-flex align-items-center mb-2 pb-1">
          <span>Telegram:</span>
          <span class="text-secondary fw-medium ms-1">@blarblar</span>
        </li>
        <!-- <li class="d-flex align-items-center">
          <span>Join Date:</span>
          <span class="text-secondary fw-medium ms-1">10 May 2022</span>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileInformation",
});
</script>
