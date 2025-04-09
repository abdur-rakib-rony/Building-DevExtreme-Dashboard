<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>

    <div v-if="isLoading" class="h-64 animate-pulse">
      <div class="flex flex-col items-center">
        <div class="relative w-40 h-40 rounded-full bg-gray-200 mb-4 overflow-hidden">
          <div
            class="absolute inset-0 bg-blue-200"
            style="clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)"
          ></div>
          <div
            class="absolute inset-0 bg-green-200"
            style="clip-path: polygon(50% 50%, 100% 0%, 100% 100%, 50% 100%)"
          ></div>
          <div
            class="absolute inset-0 bg-yellow-200"
            style="clip-path: polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%)"
          ></div>
          <div
            class="absolute inset-0 bg-red-200"
            style="clip-path: polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)"
          ></div>
          <div
            class="absolute rounded-full bg-white"
            style="top: 30%; left: 30%; width: 40%; height: 40%"
          ></div>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-4">
          <div v-for="i in 5" :key="i" class="flex items-center">
            <div class="w-3 h-3 rounded-full" :class="`bg-${getColorClass(i)}-200`"></div>
            <div class="h-3 bg-gray-200 rounded w-20 ml-2"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="h-64">
      <DxPieChart :data-source="chartData" palette="Soft Pastel" title="">
        <DxSeries argument-field="source" value-field="visitors">
          <DxLabel :visible="true" :format="formatNumber" />
        </DxSeries>
        <DxTooltip :enabled="true" :customize-tooltip="customizeTooltip" />
        <DxLegend :margin="20" horizontal-alignment="center" vertical-alignment="bottom" />
      </DxPieChart>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DxPieChart, DxSeries, DxLabel } from 'devextreme-vue/pie-chart';
import { DxLegend, DxTooltip } from 'devextreme-vue/chart';

defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Traffic Sources',
  },
  chartData: {
    type: Array,
    default: () => [
      { source: 'Organic Search', visitors: 5624 },
      { source: 'Direct', visitors: 3580 },
      { source: 'Social Media', visitors: 2780 },
      { source: 'Referral', visitors: 1950 },
      { source: 'Email', visitors: 1280 },
    ],
  },
});

const formatNumber = (value: number) => {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value.toString();
};

const customizeTooltip = (arg: any) => {
  return {
    text: `${arg.argumentText}: ${arg.valueText} (${(arg.percent * 100).toFixed(1)}%)`,
  };
};

const getColorClass = (index: number) => {
  const colors = ['blue', 'green', 'yellow', 'red', 'purple'];
  return colors[(index - 1) % colors.length];
};
</script>
