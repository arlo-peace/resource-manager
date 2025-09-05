<template>
    <div class="main-content-container overflow-hidden">
        <PageTitle :pageTitle="$t('adddomain')" :subTitle="$t('main')" />
        <div class="card bg-white border-0 rounded-3 mb-4">
            <div class="card-header">
                <div
                    class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-0"
                >
                    <h5 class="mb-0">{{ $t('add') }}</h5>
                    <RouterLink to="/domain" class="menu-link">
                    <button
                        class="btn btn-outline-secondary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
                    >
                    <span class="py-sm-1 d-block">
                        <i class="ri-arrow-left-line d-none d-sm-inline-block me-1"></i>
                        <span>{{ $t('back') }}</span>
                    </span>
                    </button>
                    </RouterLink>
                </div>
            </div>
            <div class="card-body p-4 pt-3">
                <form @submit.prevent="submitForm">
                    <div class="row">
                        <div class="mb-3 col-lg-6">
                            <label for="exampleFormControlInput1" class="form-label">{{$t('provider')}}</label>
                            <select class="form-select form-control" aria-label="Default Select">
                                <option selected>{{$t('chooseone')}}</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="name" class="form-label">{{$t('name')}}</label>
                            <input type="text" class="form-control" id="name" :placeholder="$t('name')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="useprogram" class="form-label">{{$t('useprogram')}}</label>
                            <input type="text" class="form-control" id="useprogram" :placeholder="$t('useprogram')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="usetemplate" class="form-label">{{$t('usetemplate')}}</label>
                            <input type="text" class="form-control" id="usetemplate" :placeholder="$t('usetemplate')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="tod" class="form-label">{{$t('tld')}}</label>
                            <input type="text" class="form-control" id="os" :placeholder="$t('tld')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="registerorg" class="form-label">{{$t('registerorg')}}</label>
                            <input type="text" class="form-control" id="registerorg" :placeholder="$t('registerorg')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="registerat" class="form-label">{{$t('registerat')}}</label>
                            <input type="date" class="form-control" id="registerat" :placeholder="$t('registerat')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="exprieat" class="form-label">{{$t('expireat')}}</label>
                            <input type="date" class="form-control" id="exprieat" :placeholder="$t('expireat')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="purchaseprice" class="form-label">{{$t('purchaseprice')}}</label>
                            <input type="number" class="form-control" id="purchaseprice" :placeholder="$t('purchaseprice')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="renewprice" class="form-label">{{$t('renewprice')}}</label>
                            <input type="number" class="form-control" id="renewprice" :placeholder="$t('renewprice')">
                        </div>
                        <div class="mb-3 col-lg-12">
                            <label for="currency" class="form-label">{{$t('currency')}}</label>
                            <select class="form-select form-control" id="currency" aria-label="currency">
                                <option value="">{{$t('chooseone')}}</option>
                                <option value="USDT" selected>USDT</option>
                                <option value="USD">USD</option>
                                <option value="CNY">CNY</option>
                            </select>
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="lockstate" class="form-label">{{$t('lockstate')}}</label>
                            <select class="form-select form-control" id="lockstate" aria-label="lockstate">
                                <option value="">{{$t('chooseone')}}</option>
                                <option value="USDT" selected>USDT</option>
                                <option value="USD">USD</option>
                                <option value="CNY">CNY</option>
                            </select>
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="status" class="form-label">{{$t('status')}}</label>
                            <select class="form-select form-control" id="status" aria-label="Status">
                                <option value="">{{$t('chooseone')}}</option>
                                <option value="active" selected>{{$t('active')}}</option>
                                <option value="expired">{{$t('expired')}}</option>
                                <option value="hold">{{$t('hold')}}</option>
                                <option value="transferred_out">{{$t('transferred_out')}}</option>
                                <option value="pending_transfer">{{$t('pending_transfer')}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group d-flex gap-3">
                        <button
                            class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
                        >
                            <span class="py-sm-1 d-block">
                                <i class="ri-add-line text-white me-1"></i>
                                <span>{{ $t('adddomain') }}</span>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";
import PageTitle from '@/components/Commons/PageTitle.vue';

export default defineComponent({
    name: "ServerAddPage",
    components:{
        PageTitle
    },
    setup() {
        const addentional = ref([{key: '', value: ''}]);
        
        const addField = () => {
            addentional.value.push({key: '', value: ''})
        }
        const removeField = (idx) => {
            addentional.value.splice(idx, 1);
        }

        const submitForm = () => {
            // console.log("Form Array:", addentional.value);
            const addFieldObj = Object.fromEntries(
                addentional.value.map(f => [f.key, f.value])
            );
            console.log("Converted Object:", addFieldObj);
        }

        return {
            addentional,
            addField,
            removeField,
            submitForm
        }
    }
})
</script>

<style scoped>

</style>