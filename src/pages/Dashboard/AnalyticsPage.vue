<template>
    <div class="main-content-container overflow-hidden">
        <ProjectsOverview :title="$t('serveroverview')"/>
        <ProjectsOverview :title="$t('domainoverview')"/>
        <div class="mb-3">
            <h5 class="mb-0">{{ $t('teamoverview') }}</h5>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <StatsCard 
                    title="activeteams"
                    number="20"
                    icon="productivity"
                    type="warning"
                />
            </div>
            <div class="col-lg-3">
                <StatsCard 
                    title="activemember"
                    number="50"
                    icon="productivity"
                    type="warning"
                />
            </div>
            <div class="col-lg-3">
                <StatsCard
                    title="inactiveteams"
                    number="5"
                    icon="group_remove"
                    type="danger"
                />
            </div>
            <div class="col-lg-3">
                <StatsCard
                    title="inactivemember"
                    number="2"
                    icon="group_remove"
                    type="danger"
                />
            </div>
        </div>
        <TotalChart currency="USDT"/>
        <TotalChart currency="CNY"/>
    </div>
</template>

<script lang="ts">
import ProjectsOverview from '@/components/Widgets/Dashboard/ProjectsOverview.vue';
import StatsCard from '@/components/Widgets/Dashboard/StatsCard.vue';
import TotalChart from '@/components/Widgets/Dashboard/TotalChart.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "DashboardPage",
    components: {
        ProjectsOverview,
        StatsCard,
        TotalChart
    }
})
</script>

<style scoped>

</style>