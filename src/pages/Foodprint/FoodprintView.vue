<template>
    <div class="modal fade" id="viewFoodprintModal" tabindex="-1" aria-labelledby="viewFoodprintModal" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="viewFoodprintModal">{{ $t('details') }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="default-table-area style-two default-table-width">
                    <div class="table-responsive">
                        <table class="table align-middle">
                            <tbody>
                                <tr>
                                    <th>{{ $t('asserttype') }} : {{ details?.status }}</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('resource') }} : </th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('action') }} : </th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('actionby') }} : </th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('actiontime') }} : </th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('beforechange') }} : </th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('afterchange') }} : </th>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('close') }}</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "FoodprintView",
    props: {
        details: null
    }
})
</script>

<style scoped>

</style>