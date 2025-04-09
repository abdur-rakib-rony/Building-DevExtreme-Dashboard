<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>

    <div v-if="isLoading" class="h-fit animate-pulse">
      <div class="flex items-center mb-4">
        <div class="h-5 bg-gray-200 rounded w-2/3"></div>
      </div>

      <div class="flex items-end h-40 space-x-6 px-4">
        <div v-for="i in 6" :key="i" class="flex flex-col items-center space-y-2 w-full">
          <div
            class="bg-blue-200 rounded w-full"
            :style="{ height: `${20 + Math.random() * 80}px` }"
          ></div>
          <div class="h-3 bg-gray-200 rounded w-10"></div>
        </div>
      </div>

      <div class="flex justify-center mt-6 space-x-4">
        <div class="flex items-center">
          <div class="w-3 h-3 rounded-full bg-blue-200 mr-2"></div>
          <div class="h-3 bg-gray-200 rounded w-16"></div>
        </div>
        <div class="flex items-center">
          <div class="w-3 h-3 rounded-full bg-red-200 mr-2"></div>
          <div class="h-3 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
    </div>

    <div v-else class="h-fit">
      <DxChart :data-source="chartData" title="">
        <DxSeries
          argument-field="month"
          value-field="amount"
          name="Sales"
          type="bar"
          color="#5B93FF"
        />
        <DxSeries
          argument-field="month"
          value-field="target"
          name="Target"
          type="line"
          color="#FF5B5B"
        />
        <DxLegend vertical-alignment="bottom" horizontal-alignment="center" />
        <DxTooltip :enabled="true" />
      </DxChart>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DxChart, DxSeries, DxLegend, DxTooltip } from 'devextreme-vue/chart';

defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Sales Overview',
  },
  chartData: {
    type: Array,
    default: () => [
      { month: 'Jan', amount: 3500, target: 3000 },
      { month: 'Feb', amount: 4200, target: 3500 },
      { month: 'Mar', amount: 3800, target: 4000 },
      { month: 'Apr', amount: 5100, target: 4500 },
      { month: 'May', amount: 4800, target: 5000 },
      { month: 'Jun', amount: 5800, target: 5500 },
    ],
  },
});
</script>
