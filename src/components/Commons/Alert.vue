<template>
    <div 
        v-if="alert.show"
        role="alert" 
        :class="['alert', 'alert-bg-'+alert.type, 'alert-'+alert.type, 'd-flex', 'justify-content-between', 'align-items-center']"
        style="top: 10px; right: 10px;position: fixed; padding: 10px 20px; min-width: 200px;"
    > 
        {{ alert.message }}
        <button type="button" data-dismiss="alert" aria-label="Close" class="close bg-transparent p-0 border-0"
            style="margin-right: -10px;"
        >
            <i class="ri-close-line"></i>
        </button>
    </div>
</template>

<script>
import { useAlertStore } from "@/stores/alert"
import { defineComponent } from "vue";

export default defineComponent({
    name: "GlobalAlert",
    setup() {
        const alert = useAlertStore()
        return {
            alert
        }
    }  
})
</script>

<style scoped>

</style>