<template>
  <div class="min-h-screen bg-gray-100">
    <header>
      <div
        v-if="!dashboardStore.isLoading"
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 gap-4 flex justify-end items-center"
      >
        <DxButton text="Refresh Data" type="default" icon="refresh" @click="refreshAllData" />
        <span class="text-sm text-gray-600">Last updated: {{ formattedLastUpdate }}</span>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <KpiCard
          v-for="(kpi, index) in dashboardStore.kpiData"
          :key="index"
          :title="kpi.title"
          :value="kpi.value"
          :change-percent="kpi.changePercent"
          :trend="kpi.trend"
          :subtitle="kpi.subtitle"
          :isLoading="dashboardStore.isLoading"
        />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <SalesChart :chart-data="dashboardStore.salesData" :isLoading="dashboardStore.isLoading" />
        <TrafficPieChart
          :chart-data="dashboardStore.trafficData"
          :isLoading="dashboardStore.isLoading"
        />
      </div>

      <div class="mb-6">
        <OrdersGrid
          :grid-data="dashboardStore.ordersData"
          :statuses="dashboardStore.orderStatuses"
          :isLoading="dashboardStore.isLoading"
        />
      </div>
      <div v-if="!dashboardStore.isLoading">
        <MessageForm />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useDashboardStore } from '@/stores/dashboard';
import { DxButton } from 'devextreme-vue/button';
import KpiCard from '@/components/dashboard/KpiCard.vue';
import SalesChart from '@/components/dashboard/SalesChart.vue';
import TrafficPieChart from '@/components/dashboard/TrafficPieChart.vue';
import OrdersGrid from '@/components/dashboard/OrdersGrid.vue';
import MessageForm from '@/components/dashboard/MessageForm.vue';

const dashboardStore = useDashboardStore();

const formattedLastUpdate = computed(() => {
  return dashboardStore.lastUpdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
});

const refreshAllData = () => {
  dashboardStore.fetchDashboardData();
};

onMounted(() => {
  dashboardStore.fetchDashboardData();
});
</script>
