<template>
  <div v-if="isLoading" class="bg-white rounded-lg shadow-md p-4 animate-pulse">
    <div class="flex items-center justify-between">
      <div class="h-5 bg-gray-200 rounded w-1/3"></div>
      <div class="h-4 bg-gray-200 rounded w-16"></div>
    </div>
    <div class="h-8 bg-gray-200 rounded w-1/2 mt-2"></div>
    <div class="h-4 bg-gray-200 rounded w-1/4 mt-1"></div>
  </div>

  <div v-else class="bg-white rounded-lg shadow-md p-4">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-medium text-gray-700">{{ title }}</h3>
      <span :class="trend === 'up' ? 'text-green-500' : 'text-red-500'" class="text-sm">
        {{ trend === 'up' ? '↑' : '↓' }} {{ changePercent }}%
      </span>
    </div>
    <p class="text-3xl font-bold mt-2">
      <client-only>
        <vue-countup
          v-if="numericValue !== null"
          :start-val="0"
          :end-val="numericValue"
          :duration="2.5"
          :options="countUpOptions"
        />
        <template #fallback>{{ value }}</template>
      </client-only>
      <span v-if="numericValue === null">{{ value }}</span>
    </p>
    <p class="text-sm text-gray-500 mt-1">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import VueCountup from 'vue-countup-v3';

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  changePercent: {
    type: Number,
    required: true
  },
  trend: {
    type: String,
    required: true,
    validator: (value: string) => ['up', 'down'].includes(value)
  },
  subtitle: {
    type: String,
    default: ''
  }
});

const numericValue = computed(() => {
  const cleanValue = props.value.replace(/[$,\s%]/g, '');
  const parsed = parseFloat(cleanValue);
  return isNaN(parsed) ? null : parsed;
});

const countUpOptions = computed(() => {
  return {
    prefix: props.value.includes('$') ? '$' : '',
    suffix: props.value.includes('%') ? '%' : '',
    decimals: props.value.includes('.') ? 1 : 0,
    separator: ','
  };
});
</script>