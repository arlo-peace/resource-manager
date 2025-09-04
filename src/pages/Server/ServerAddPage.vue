<template>
    <div class="main-content-container overflow-hidden">
        <PageTitle :pageTitle="$t('addserver')" :subTitle="$t('main')" />
        <div class="card bg-white border-0 rounded-3 mb-4">
            <div class="card-header">
                <div
                    class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-0"
                >
                    <h5 class="mb-0">{{ $t('add') }}</h5>
                    <RouterLink to="/server" class="menu-link">
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
                            <label for="hostname" class="form-label">{{$t('hostname')}}</label>
                            <input type="text" class="form-control" id="hostname" :placeholder="$t('hostname')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="publicip" class="form-label">{{$t('publicip')}}</label>
                            <input type="text" class="form-control" id="publicip" :placeholder="$t('publicip')">
                        </div>
                        <div class="mb-3 col-lg-12">
                            <label for="exampleFormControlInput1" class="form-label">{{$t('type')}}</label>
                            <select class="form-select form-control" aria-label="Default Select">
                                <option selected>{{$t('chooseone')}}</option>
                                <option value="vps">{{$t('vps')}}</option>
                                <option value="dedicate">{{$t('dedicate')}}</option>
                                <option value="cloud">{{$t('cloud')}}</option>
                                <option value="other">{{$t('other')}}</option>
                            </select>
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="os" class="form-label">{{$t('osname')}}</label>
                            <input type="text" class="form-control" id="os" placeholder="Linux x64 CentOS">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="cpu" class="form-label">{{$t('cpusize')}}</label>
                            <input type="text" class="form-control" id="cpu" :placeholder="$t('cpusize')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="ram" class="form-label">{{$t('ramsize')}}</label>
                            <input type="text" class="form-control" id="ram" :placeholder="$t('ramsize')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="storate" class="form-label">{{$t('storagesize')}}</label>
                            <input type="text" class="form-control" id="storate" :placeholder="$t('storagesize')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="purchasedate" class="form-label">{{$t('purchasedate')}}</label>
                            <input type="date" class="form-control" id="purchasedate" :placeholder="$t('purchasedate')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="expiredate" class="form-label">{{$t('expiredate')}}</label>
                            <input type="date" class="form-control" id="expiredate" :placeholder="$t('expiredate')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="billingcycle" class="form-label">{{$t('billingcycle')}}</label>
                            <select class="form-select form-control" :aria-label="$t('billingcycle')">
                                <option selected>{{$t('chooseone')}}</option>
                                <option value="hourly">{{$t('hourly')}}</option>
                                <option value="daily">{{$t('daily')}}</option>
                                <option value="monthly">{{$t('monthly')}}</option>
                                <option value="yearly">{{$t('yearly')}}</option>
                            </select>
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="cost" class="form-label">Cost</label>
                            <input type="number" min="0" class="form-control" id="cost" placeholder="Cost">
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
                            <label for="ptphone" class="form-label">{{$t('btphone')}}</label>
                            <input type="text" class="form-control" id="ptphone" :placeholder="$t('btphone')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="btaccountprice" class="form-label">{{$t('btaccountprice')}}</label>
                            <input type="text" class="form-control" id="btaccountprice" :placeholder="$t('btaccountprice')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="btexpiredate" class="form-label">{{$t('btexpiredate')}}</label>
                            <input type="date" class="form-control" id="btexpiredate" :placeholder="$t('btexpiredate')">
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="btapiurl" class="form-label">{{$t('btapiurl')}}</label>
                            <input type="text" class="form-control" id="btapiurl" :placeholder="$t('btapiurl')">
                        </div>
                        <hr>
                        <div class="mb-3">
                            <div class="d-flex w-100 align-items-center justify-content-between">
                                <label class="form-label text-uppercase fs-6 mb-0">{{$t('addentionalinformation')}}:</label>
                                <button type="button" class="btn btn-info btn-sm" @click="addField"><i class="ri-add-line"></i> {{$t('addfield')}}</button>
                            </div>
                            <div class="row d-flex align-items-center justify-end" v-for="(af, idx) in addentional" :key="idx">
                                <div class="mb-3 col-lg-5">
                                    <label for="key" class="form-label">{{$t('key')}}</label>
                                    <input type="text" v-model="af.key" class="form-control" id="key" :placeholder="$t('key')">
                                </div>
                                <div class="mb-3 col-lg-5">
                                    <label for="key" class="form-label">{{$t('value')}}</label>
                                    <input type="text" v-model="af.value" class="form-control" id="key" :placeholder="$t('value')">
                                </div>
                                <div class="col-lg-2">
                                    <button type="button" class="btn btn-danger btn-sm float-end" @click="removeField(idx)">
                                        <i class="ri-subtract-fill"></i> {{$t('remove')}}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="mb-3 col-lg-6">
                            <label for="status" class="form-label">{{$t('status')}}</label>
                            <select class="form-select form-control" id="status" aria-label="Status">
                                <option value="">{{$t('chooseone')}}</option>
                                <option value="running" selected>{{$t('running')}}</option>
                                <option value="stopped">{{$t('stopped')}}</option>
                                <option value="terminated">{{$t('terminated')}}</option>
                                <option value="expired">{{$t('expired')}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group d-flex gap-3">
                        <button
                            class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
                        >
                            <span class="py-sm-1 d-block">
                                <i class="ri-add-line text-white me-1"></i>
                                <span>{{ $t('addserver') }}</span>
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