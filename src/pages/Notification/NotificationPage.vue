<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Notification" />

    <div class="card bg-white border-0 rounded-3 mb-4">
      <div class="card-body p-4">
        <div class="default-table-area all-products">
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Timestamp</th>
                  <th scope="col">Type</th>
                  <th scope="col">Content</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.id">
                  <td class="text-body">
                    {{ item.id }}
                  </td>
                  <td class="text-body">
                    {{ item.timestamp }}
                  </td>
                  <td class="text-secondary fw-medium">
                    {{ item.type }}
                  </td>
                  <td class="text-secondary fw-medium">
                    {{ item.content }}
                  </td>
                  <td>
                    <span
                      class="badge bg-primary bg-opacity-10 text-primary p-2 fs-12 fw-normal"
                      :class="computeClass(item.status)"
                    >
                      {{ item.status }}
                    </span>
                  </td>
                  <td>
                    <div class="d-flex align-items-center gap-3">
                      <button
                        class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      >
                        <i class="material-symbols-outlined fs-16 text-primary">
                          visibility
                        </i>
                      </button>
                      <button
                        class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      >
                        <i class="material-symbols-outlined fs-16 text-danger">
                          delete
                        </i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <CommonPaginationTwo items="10" :total="items.length" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Notification from "@/components/Modules/Notification/index.vue";

export default defineComponent({
  name: "NotificationPage",
  components: {
    PageTitle,
    Notification,
  },
});
</script>
