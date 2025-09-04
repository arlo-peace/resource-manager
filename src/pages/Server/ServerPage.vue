<template>
    <div class="main-content-container overflow-hidden">
        <PageTitle :pageTitle="$t('serverlist')" :subTitle="$t('main')" />
        
        <div>
          <div class="card bg-white border-0 rounded-3 mb-4">
            <div class="card-body p-0">
              <div
                  class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4"
              >
                  <form class="position-relative table-src-form me-0" @submit.prevent>
                  <input
                      type="text"
                      class="form-control"
                      :placeholder="$t('searchhere')"
                      v-model="searchTerm"
                  />
                  <i class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y">
                      search
                  </i>
                  </form>
                  <RouterLink to="/server/add" class="menu-link">
                  <button
                      class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
                  >
                  <span class="py-sm-1 d-block">
                      <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
                      <span>{{ $t('addnew') }}</span>
                  </span>
                  </button>
                  </RouterLink>
              </div>

              <div class="default-table-area style-two default-table-width">
                  <div class="table-responsive">
                  <table class="table align-middle">
                      <thead>
                      <tr>
                          <th width="100" scope="col">
                          <div class="form-check">
                              <label
                              class="position-relative top-2 ms-1"
                              for="flexCheckDefault7"
                              >
                              ID
                              </label>
                          </div>
                          </th>
                          <th scope="col">{{$t('name')}}</th>
                          <th scope="col">{{$t('hostname')}}</th>
                          <th scope="col">{{$t('publicip')}}</th>
                          <th scope="col">{{$t('type')}}</th>
                          <th scope="col">{{$t('osinfo')}}</th>
                          <th scope="col">{{$t('purchasedate')}}</th>
                          <th scope="col">{{$t('expiredat')}}</th>
                          <th scope="col">{{$t('billingcycle')}}</th>
                          <th scope="col">{{$t('status')}}</th>
                          <th width="60" scope="col">{{$t('action')}}</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="item in filteredItems" :key="item.id">
                          <td class="text-body">
                          <div class="form-check">
                              <label
                              class="position-relative top-2 ms-1"
                              for="flexCheckDefault12"
                              >
                              {{ item.id }}
                              </label>
                          </div>
                          </td>
                          <td>
                          {{ item.role }}
                          </td>
                          <td>{{ item.note }}</td>
                          <td>{{ item.note }}</td>
                          <td>{{ item.note }}</td>
                          <td>
                            <button 
                              type="button" 
                              class="btn btn-sm btn-info"
                              data-bs-custom-class="info-popover"
                              data-bs-toggle="popover" 
                              data-bs-title="OS Info"
                              data-bs-html="true"
                              data-bs-content="<p class='mb-0'>OS: Linux x64 CentOS</p><p class='mb-0'>CPU: 56</p><p class='mb-0'>RAM: 60GB</p><p class='mb-0'>Storage: 1TB</p>">
                              <i class="ri-information-line"></i>
                            </button>
                          </td>
                          <td>{{ item.note }}</td>
                          <td>{{ item.note }}</td>
                          <td>{{ item.note }}</td>
                          <td>{{ item.note }}</td>
                          <td>
                          <div class="d-flex align-items-center gap-1">
                              <button
                              class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                              >
                              <i class="material-symbols-outlined fs-16 text-primary">
                                  {{ item.action.view }}
                              </i>
                              </button>
                              <button
                              class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                              >
                              <i class="material-symbols-outlined fs-16 text-body">
                                  {{ item.action.edit }}
                              </i>
                              </button>
                              <button
                              class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                              >
                              <i class="material-symbols-outlined fs-16 text-danger">
                                  {{ item.action.delete }}
                              </i>
                              </button>
                          </div>
                          </td>
                      </tr>
                      </tbody>
                  </table>
                  </div>

                  <div class="p-4 pt-lg-4">
                  <Pagination :items="5" :total="items.length" />
                  </div>
              </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { Popover } from "bootstrap";
import PageTitle from "@/components/Commons/PageTitle.vue";
import Pagination from "@/components/Commons/Pagination.vue";
import RevenueGrowthChart from "@/components/Widgets/RevenueGrowthChart.vue";

export default defineComponent({
  name: "DomainPage",
  components: {
    PageTitle,
    Pagination,
    RevenueGrowthChart
  },
  setup() {

    onMounted(() => {
      // initialize Bootstrap tooltips
      const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="popover"]'
      );
      tooltipTriggerList.forEach((el) => {
        new Popover(el);
      });
    });

    const items = ref([
      {
        id: "#854",
        role: "Manager",
        note: "Oliver Clark",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#853",
        role: "Admin",
        note: "Ethan Baker",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        }
      },
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          id: string;
          role: string;
          note: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.role
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.note
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase())
      );
    });

    const wordActive = ref("Active");
    const wordClose = ref("Close");

    const computeClass = (classValue: string) => {
      return {
        confirmed: wordActive.value === classValue,
        rejected: wordClose.value === classValue,
      };
    };

    return {
      items,
      searchTerm,
      filteredItems,
      computeClass,
    };
  },
})
</script>

<style scoped>

</style>