<template>
  <div class="mb-3">
    <h5 class="mb-0">{{ title }}</h5>
  </div>
  <div class="row">
    <div class="col-xxl-3 col-xl-3 col-sm-6">
      <div
        class="card bg-primary bg-opacity-10 border-primary border-opacity-10 rounded-3 mb-4 stats-box style-three"
      >
        <div class="card-body p-4">
          <div class="d-flex align-items-center mb-3">
            <div class="flex-shrink-0">
              <i class="material-symbols-outlined fs-40 text-primary">
                folder_open
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <span>{{ $t('active') }}</span>
              <h3 class="fs-20 mt-1 mb-0">425</h3>
            </div>
          </div>
          <div
            class="d-flex justify-content-between flex-wrap gap-2 align-items-center"
          >
            <span class="fs-12">{{ $t('today') }}</span>
            <!-- <span class="count up fw-medium ms-0">+10%</span> -->
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-3 col-sm-6">
      <div
        class="card bg-danger bg-opacity-10 border-danger border-opacity-10 rounded-3 mb-4 stats-box style-three"
      >
        <div class="card-body p-4">
          <div class="d-flex align-items-center mb-3">
            <div class="flex-shrink-0">
              <i class="material-symbols-outlined fs-40 text-danger"
                >stacks</i
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <span>{{ $t('total') }}</span>
              <h3 class="fs-20 mt-1 mb-0">1235</h3>
            </div>
          </div>
          <div
            class="d-flex justify-content-between flex-wrap gap-2 align-items-center"
          >
            <span class="fs-12">{{ $t('today') }}</span>
            <!-- <span class="count up fw-medium ms-0">+5.75%</span> -->
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-3 col-sm-6">
      <div
        class="card bg-success bg-opacity-10 border-success border-opacity-10 rounded-3 mb-4 stats-box style-three"
      >
        <div class="card-body p-4">
          <div class="d-flex align-items-center mb-3">
            <div class="flex-shrink-0">
              <i class="material-symbols-outlined fs-40 text-warning">
                inactive_order
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <span>{{ $t('expired') }}</span>
              <h3 class="fs-20 mt-1 mb-0">135</h3>
            </div>
          </div>
          <div
            class="d-flex justify-content-between flex-wrap gap-2 align-items-center"
          >
            <span class="fs-12">{{ $t('today') }}</span>
            <!-- <span class="count down fw-medium ms-0">-15%</span> -->
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-3 col-sm-6">
      <div
        class="card bg-success bg-opacity-10 border-success border-opacity-10 rounded-3 mb-4 stats-box style-three"
      >
        <div class="card-body p-4">
          <div class="d-flex align-items-center mb-3">
            <div class="flex-shrink-0">
              <i class="material-symbols-outlined fs-40 text-success">
                attach_money
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <span>{{ $t('totalcost') }}</span>
              <h3 class="fs-20 mt-1 mb-0">135</h3>
            </div>
          </div>
          <div
            class="d-flex justify-content-between flex-wrap gap-2 align-items-center"
          >
            <span class="fs-12">{{ $t('today') }}</span>
            <!-- <span class="count down fw-medium ms-0">10</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsOverview",
  props: {
    title: {
      type: String,
      default: null
    }
  }
});
</script>
