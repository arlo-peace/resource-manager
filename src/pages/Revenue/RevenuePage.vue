<template>
    <div class="main-content-container overflow-hidden">
        <page-title :page-title="$t('revenue')" :sub-title="$t('finance')"/>

        <div class="row">
            <div class="col-lg-3">
                <StatsCard 
                    title="earnings"
                    number="20"
                    icon="money_bag"
                    type="success"
                    badge="100K USDT"
                />
            </div>
            <div class="col-lg-3">
                <StatsCard 
                    title="closedeals"
                    number="50"
                    icon="money_off"
                    type="danger"
                    badge="50K USDT"
                />
            </div>
            <div class="col-lg-3">
                <StatsCard
                    title="totalvolume"
                    number="5"
                    icon="account_balance"
                    type="info"
                    badge="50K USDT"
                />
            </div>
            <div class="col-lg-3">
                <StatsCard
                    title="totalserver"
                    number="2"
                    icon="host"
                    type="primary"
                    badge="1000K USDT"
                />
            </div>
        </div>

        <div class="card bg-white border-0 rounded-3 mb-4">
            <div class="card-body p-0">
            <div
                class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4"
            >
              <div class="d-flex search-box">
                <div class="form-floating">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>{{$t('allteam')}}</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select> 
                    <label for="purchaseat" class="form-select-label">{{$t('team')}}</label>
                </div>
                <div class="form-floating ms-3">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>{{$t('type')}}</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select> 
                    <label for="purchaseat" class="form-select-label">{{$t('type')}}</label>
                </div>
                <div class="form-floating ms-3">
                    <select class="form-select ps-10" aria-label="Default select example">
                        <option selected>{{$t('billingcycle')}}</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select> 
                    <label for="purchaseat" class="form-select-label">{{$t('billingcycle')}}</label>
                </div>
                <div class="form-floating ms-3">
                    <input type="date" id="purchaseat" placeholder="" class="form-control">
                    <label for="purchaseat">{{$t('purchaseat')}}</label>
                </div>
                <div class="form-floating ms-3">
                    <input type="date" id="expireat" placeholder="" class="form-control">
                    <label for="expireat">{{$t('expireat')}}</label>
                </div>
              </div>
                
                <button
                    class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
                    data-bs-toggle="modal"
                    data-bs-target="#addnewrevenue"
                    aria-controls="addnewrevenue"
                >
                <span class="py-sm-1 d-block">
                    <i class="ri-add-fill d-none d-sm-inline-block me-1"></i>
                    <span>{{$t('addnew')}}</span>
                </span>
                </button>
            </div>

            <div class="default-table-area style-two default-table-width">
                <div class="table-responsive">
                <table class="table align-middle">
                    <thead>
                    <tr>
                        <th scope="col">
                        <div class="form-check">
                            <label
                            class="position-relative top-2 ms-1"
                            for="flexCheckDefault7"
                            >
                            ID
                            </label>
                        </div>
                        </th>
                        <th scope="col">{{$t('team')}}</th>
                        <th scope="col">{{$t('type')}}</th>
                        <th scope="col">{{$t('price')}}</th>
                        <th scope="col">{{$t('source')}}</th>
                        <th scope="col">{{$t('note')}}</th>
                        <th scope="col">{{$t('startdate')}}</th>
                        <th scope="col">{{$t('expiredate')}}</th>
                        <th scope="col">{{$t('action')}}</th>
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
                        <RouterLink
                            to="/project-management/project-overview"
                            class="text-body"
                        >
                            {{ item.taskTitle }}
                        </RouterLink>
                        </td>
                        <td>
                        <RouterLink
                            to="/project-management/project-overview"
                            class="text-body"
                        >
                            {{ item.taskTitle }}
                        </RouterLink>
                        </td>
                        <td>
                            1000 <span class="fs-12 fw-bold text-white">USDT</span>
                        </td>
                        
                        <td>
                            {{ $t('monthly') }}
                        </td>
                        <td>
                            <button 
                                type="button" 
                                class="btn btn-sm btn-info"
                                data-bs-custom-class="info-popover"
                                data-bs-trigger="focus"
                                data-bs-toggle="popover" 
                                :data-bs-title="$t('note')"
                                data-bs-content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, atque libero porro soluta harum qui laborum nobis commodi sint reiciendis cumque, provident ipsam! Aspernatur exercitationem id temporibus. Enim, ratione maiores.">
                              <i class="ri-information-line"></i>
                            </button>
                        </td>
                        <td>
                            01-01-2025
                        </td>
                        <td>
                            01-01-2025
                        </td>
                        <td class="text-center">
                            <button
                                class="btn btn-outline-primary btn-sm"
                            >
                            <i class="ri-edit-box-line"></i> Edit
                        </button>
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
        <RevenueAddForm />
    </div>
</template>

<script lang="ts">
import PageTitle from '@/components/Commons/PageTitle.vue';
import Pagination from '@/components/Commons/Pagination.vue';
import { Popover } from 'bootstrap';
import { computed, defineComponent, onMounted, ref } from 'vue';
import RevenueAddForm from './RevenueAddForm.vue';
import StatsCard from '@/components/Widgets/Dashboard/StatsCard.vue';

export default defineComponent({
    name: "RevenuePage",
    components: {
        PageTitle,
        Pagination,
        RevenueAddForm,
        StatsCard
    },
    setup(props, ctx){

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
                taskTitle: "Network Infrastructure",
                assignedTo: "Oliver Clark",
                dueDate: "30 Apr 2024",
                priority: "High",
                status: "Active",
                action: {
                view: "visibility",
                edit: "edit",
                delete: "delete",
                },
            },
            {
                id: "#853",
                taskTitle: "Cloud Migration",
                assignedTo: "Ethan Baker",
                dueDate: "25 Apr 2024",
                priority: "Low",
                status: "Close",
                action: {
                view: "visibility",
                edit: "edit",
                delete: "delete",
                },
            },
            {
                id: "#852",
                taskTitle: "Website Revamp",
                assignedTo: "Sophia Carter",
                dueDate: "20 Apr 2024",
                priority: "Medium",
                status: "Active",
                action: {
                view: "visibility",
                edit: "edit",
                delete: "delete",
                },
            },
            {
                id: "#851",
                taskTitle: "Mobile Application",
                assignedTo: "Ava Cooper",
                dueDate: "15 Apr 2024",
                priority: "High",
                status: "Active",
                action: {
                view: "visibility",
                edit: "edit",
                delete: "delete",
                },
            },
            {
                id: "#850",
                taskTitle: "System Deployment",
                assignedTo: "Isabella Evans",
                dueDate: "10 Apr 2024",
                priority: "Low",
                status: "Active",
                action: {
                view: "visibility",
                edit: "edit",
                delete: "delete",
                },
            },
            {
                id: "#849",
                taskTitle: "Hotel Management System",
                assignedTo: "Shawn Kennedy",
                dueDate: "30 Apr 2024",
                priority: "High",
                status: "Active",
                action: {
                view: "visibility",
                edit: "edit",
                delete: "delete",
                },
            },
            {
                id: "#848",
                taskTitle: "Send Proposal to APR Ltd",
                assignedTo: "Roberto Cruz",
                dueDate: "25 Apr 2024",
                priority: "Low",
                status: "Active",
                action: {
                view: "visibility",
                edit: "edit",
                delete: "delete",
                },
            },
            {
                id: "#847",
                taskTitle: "Python Upgrade",
                assignedTo: "Juli Johnson",
                dueDate: "20 Apr 2024",
                priority: "Medium",
                status: "Active",
                action: {
                view: "visibility",
                edit: "edit",
                delete: "delete",
                },
            },
            {
                id: "#846",
                taskTitle: "Schedule meeting with Trezo",
                assignedTo: "Catalina Engles",
                dueDate: "15 Apr 2024",
                priority: "High",
                status: "Active",
                action: {
                view: "visibility",
                edit: "edit",
                delete: "delete",
                },
            },
            {
                id: "#845",
                taskTitle: "Engineering Lite Touch",
                assignedTo: "Louis Nagle",
                dueDate: "10 Apr 2024",
                priority: "Low",
                status: "Active",
                action: {
                view: "visibility",
                edit: "edit",
                delete: "delete",
                },
            },
        ]);

        const searchTerm = ref("");

        const filteredItems = computed(() => {
            return items.value.filter(
                (item: {
                id: string;
                taskTitle: string;
                assignedTo: string;
                dueDate: string;
                priority: string;
                status: string;
                }) =>
                item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
                item.taskTitle
                    .toLowerCase()
                    .includes(searchTerm.value.toLowerCase()) ||
                item.assignedTo
                    .toLowerCase()
                    .includes(searchTerm.value.toLowerCase()) ||
                item.dueDate.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
                item.priority
                    .toLowerCase()
                    .includes(searchTerm.value.toLowerCase()) ||
                item.status.toLowerCase().includes(searchTerm.value.toLowerCase())
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
    }
})
</script>

<style scoped>

</style>