<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle :pageTitle="$t('foodprint')" />

    <div class="card bg-white border-0 rounded-3 mb-4">
      <div class="card-body p-0">
        <div
            class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4"
        >
          <div class="d-flex search-box">
              <div class="form-floating">
                  <select class="form-select" aria-label="Default select example">
                      <option selected>{{$t('asserttype')}}</option>
                      <option value="domain">{{$t('domain')}}</option>
                      <option value="server">{{$t('server')}}</option>
                      <option value="bt_panel">{{$t('bt_panel')}}</option>
                  </select> 
                  <label class="form-select-label">{{$t('asserttype')}}</label>
              </div>
              <div class="form-floating ms-3">
                  <select class="form-select" aria-label="Default select example">
                      <option selected>{{$t('action')}}</option>
                      <option value="create">{{$t('create')}}</option>
                      <option value="update">{{$t('update')}}</option>
                      <option value="delete">{{$t('delete')}}</option>
                      <option value="link">{{$t('link')}}</option>
                      <option value="unlink">{{$t('unlink')}}</option>
                  </select> 
                  <label class="form-select-label">{{$t('action')}}</label>
              </div>
              <div class="form-floating ms-3">
                  <input type="date" id="startdate" placeholder="" class="form-control">
                  <label for="startdate">{{$t('startdate')}}</label>
              </div>
              <div class="form-floating ms-3">
                  <input type="date" id="enddate" placeholder="" class="form-control">
                  <label for="enddate">{{$t('enddate')}}</label>
              </div>
            </div>
        </div>

        <div class="default-table-area style-two default-table-width">
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">{{ $t('timestamp') }}</th>
                  <th scope="col">{{ $t('type') }}</th>
                  <th scope="col">{{ $t('actionby') }}</th>
                  <th scope="col">{{ $t('status') }}</th>
                  <th scope="col">{{ $t('action') }}</th>
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
                      class="badge pill-badge text-bg-success"
                      :class="computeClass(item.status)"
                    >
                      {{ $t(item.status) }}
                    </span>
                  </td>
                  <td class="text-center">
                    <button
                        @click="handleDetails(item)"
                        class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                        data-bs-toggle="modal"
                        data-bs-target="#viewFoodprintModal"
                        aria-controls="viewFoodprintModal"
                      >
                        <i class="material-symbols-outlined fs-16 text-primary">
                          visibility
                        </i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Pagination items="10" :total="items.length" />
        </div>
      </div>
    </div>
    <FoodprintView :details="details"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PageTitle from "@/components/Commons/PageTitle.vue";
import Pagination from "@/components/Commons/Pagination.vue";
import FoodprintView from "./FoodprintView.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Notification",
  components:{
    Pagination,
    FoodprintView,
    PageTitle
  },
  setup() {
    const details = ref();
    const items = ref([
      {
        id: "#JAN-854",
        timestamp: "01 Dec 2024 09:30 AM",
        type: "Information",
        content: "New software update available. Click here to download.",
        status: "create",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-853",
        timestamp: "30 Nov 2024 09:30 AM",
        type: "Alert",
        content:
          "Urgent: Server maintenance scheduled for tomorrow at 10:00 PM.",
        status: "update",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-852",
        timestamp: "28 Nov 2024 09:30 AM",
        type: "Announcement",
        content:
          "Welcome to our new team member, Jane Smith, as Head of Sales.",
        status: "delete",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-851",
        timestamp: "27 Nov 2024 09:30 AM",
        type: "Information",
        content:
          "Check out our latest blog post for tips on improving efficiency.",
        status: "link",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-850",
        timestamp: "26 Nov 2024 09:30 AM",
        type: "Alert",
        content: "Attention: Upcoming webinar on cybersecurity best practices.",
        status: "unlink",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-849",
        timestamp: "25 Nov 2024 09:30 AM",
        type: "Announcement",
        content: "Happy Thanksgiving! Our office will be closed on Nov 30.",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-848",
        timestamp: "24 Nov 2024 09:30 AM",
        type: "Information",
        content: "Year-end financial reports are now available for download.",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-847",
        timestamp: "23 Nov 2024 09:30 AM",
        type: "Announcement",
        content: "Critical security update. Update your passwords immediately.",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-846",
        timestamp: "22 Nov 2024 09:30 AM",
        type: "Information",
        content: "Holiday Office Party on Dec 20. Save the date!",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-845",
        timestamp: "20 Nov 2024 09:30 AM",
        type: "Alert",
        content: "Year-end sale: Up to 20% off on selected products.",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
    ]);

    const computeClass = (classValue: string) => {
      return {
        'text-bg-primary': 'create' === classValue,
        'text-bg-info': 'update' === classValue,
        'text-bg-danger': 'delete' === classValue,
        'text-bg-success': 'transfer' === classValue,
        'text-bg-secondary': 'link' === classValue,
        'text-bg-warning': 'unlink' === classValue,
      };
    };

    const handleDetails = (item: any) => {
      details.value = item;
    }

    return {
      computeClass,
      items,
      details,
      handleDetails
    };
  },
});
</script>
