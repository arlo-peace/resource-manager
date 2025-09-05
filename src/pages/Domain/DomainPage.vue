<template>
    <div class="main-content-container overflow-hidden">
        <PageTitle :pageTitle="$t('domainlist')" :subTitle="$t('main')" />
        
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
                  <RouterLink to="/domain/add" class="menu-link">
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
                          <th scope="col">{{$t('program')}}</th>
                          <th scope="col">{{$t('template')}}</th>
                          <th scope="col">{{$t('price')}}</th>
                          <th scope="col">{{$t('registerat')}}</th>
                          <th scope="col">{{$t('expireat')}}</th>
                          <th scope="col">{{$t('regorg')}}</th>
                          <th scope="col">{{$t('lockstate')}}</th>
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
                          <td>
                            1000 <span class="fs-12 fw-bold text-white">USDT</span>
                          </td>
                          <td>{{ item.note }}</td>
                          <td>{{ item.note }}</td>
                          <td>{{ item.note }}</td>
                          <td>{{ item.note }}</td>
                          <td>{{ item.note }}</td>
                          <td>
                          <div class="dropdown dropstart">
                            <button class="btn btn-outline-primary btn-sm action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu border-0 bg-white dropdown-menu-end">
                              <li>
                                <span class="dropdown-item" role="button"><i class="ri-eye-line text-primary"></i> {{ $t('view') }}</span>
                              </li>
                              <li>
                                <RouterLink to="/domain/add" class="dropdown-item"><i class="ri-edit-box-line text-info"></i> {{ $t('edit') }}</RouterLink>
                              </li>
                              <li>
                                <span 
                                  class="dropdown-item" 
                                  role="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#renewmodal"
                                  aria-controls="renewmodal"
                                  @click="showRenew(item)"
                                >
                                  <i class="ri-edit-line text-secondary"></i> {{ $t('renew') }}
                                </span>
                              </li>
                              <li>
                                <span 
                                  class="dropdown-item" role="button"
                                  @click="handleDelete(item)"
                                >
                                  <i class="ri-delete-bin-6-line text-danger"></i> {{ $t('delete') }}
                                </span>
                              </li>
                            </ul>
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
      <DomainRenewForm :domain="selectedDomain"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { Modal, Popover } from "bootstrap";
import PageTitle from "@/components/Commons/PageTitle.vue";
import Pagination from "@/components/Commons/Pagination.vue";
import RevenueGrowthChart from "@/components/Widgets/RevenueGrowthChart.vue";
import DomainRenewForm from "./DomainRenewForm.vue";
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "DomainPage",
  components: {
    PageTitle,
    Pagination,
    RevenueGrowthChart,
    DomainRenewForm
  },
  setup() {
    const { t, locale } = useI18n()
    const selectedDomain = ref<any>(null);

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

    const showRenew = (item: any) => {
      selectedDomain.value = item
    }

    const handleDelete = (item: any) => {
      Swal.fire({
        title: t('delete'),
        text: t('aystd'),
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: t('cancel'),
        confirmButtonText: t('yes')
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire(t('deleted'), "", "success");
        }
      });
    }

    return {
      items,
      selectedDomain,
      searchTerm,
      filteredItems,
      computeClass,
      showRenew,
      handleDelete
    };
  },
})
</script>

<style scoped>

</style>