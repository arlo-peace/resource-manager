<template>
    <div class="main-content-container overflow-hidden">
        <PageTitle pageTitle="Server List" subTitle="Main" />

    </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import PageTitle from "../../components/Commons/PageTitle.vue";
import Pagination from "../../components/Commons/Pagination.vue";

export default defineComponent({
  name: "DomainPage",
  components: {
    PageTitle,
    Pagination,
  },
})
</script>

<style scoped>

</style>