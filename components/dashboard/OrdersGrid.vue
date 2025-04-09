<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">{{ title }}</h2>
    </div>

    <div v-if="isLoading">
      <div class="overflow-hidden">
        <div class="animate-pulse mb-4">
          <div class="h-9 bg-gray-200 w-full mb-2 rounded"></div>
          <div class="space-y-2">
            <div v-for="i in 5" :key="i" class="grid grid-cols-5 gap-4">
              <div class="h-8 bg-gray-200 rounded"></div>
              <div class="h-8 bg-gray-200 rounded"></div>
              <div class="h-8 bg-gray-200 rounded"></div>
              <div class="h-8 bg-gray-200 rounded"></div>
              <div class="h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        <div class="h-9 bg-gray-100 w-full rounded-md mt-2 flex items-center justify-end px-4">
          <div class="flex space-x-1">
            <div v-for="i in 4" :key="i" class="w-8 h-7 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else-if="!gridData || gridData.length === 0"
      class="flex justify-center items-center py-8"
    >
      <div class="text-center">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 class="mt-2 text-lg font-medium text-gray-900">No data found</h3>
        <p class="mt-1 text-sm text-gray-500">There are no records to display at this time.</p>
      </div>
    </div>

    <DxDataGrid
      v-else
      :data-source="gridData"
      :show-borders="true"
      :column-auto-width="true"
      :allow-column-resizing="true"
      :show-row-lines="true"
      ref="dataGridRef"
    >
      <DxPaging :page-size="pageSize" />
      <DxFilterRow :visible="true" />
      <DxHeaderFilter :visible="true" />
      <DxSearchPanel :visible="true" placeholder="Search..." />

      <DxColumn data-field="id" caption="Order ID" :width="80" />
      <DxColumn data-field="customer" caption="Customer" />
      <DxColumn data-field="date" caption="Date" data-type="date" format="MM/dd/yyyy" />
      <DxColumn
        data-field="amount"
        caption="Amount"
        data-type="number"
        format="currency"
        :width="100"
      />
      <DxColumn data-field="status" caption="Status">
        <DxLookup :data-source="statuses" value-expr="id" display-expr="name" />
      </DxColumn>
    </DxDataGrid>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  DxDataGrid,
  DxColumn,
  DxFilterRow,
  DxHeaderFilter,
  DxSearchPanel,
  DxLookup,
  DxPaging,
} from 'devextreme-vue/data-grid';

interface DataGridInstance {
  instance: {
    exportToExcel: (selectionOnly: boolean) => void;
  };
}

const props = defineProps({
  title: {
    type: String,
    default: 'Recent Orders',
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  gridData: {
    type: Array,
    default: () => [],
  },
  statuses: {
    type: Array,
    default: () => [
      { id: 1, name: 'Completed', color: 'green' },
      { id: 2, name: 'Processing', color: 'blue' },
      { id: 3, name: 'Pending', color: 'orange' },
      { id: 4, name: 'Cancelled', color: 'red' },
    ],
  },
  pageSize: {
    type: Number,
    default: 5,
  },
});

const dataGridRef = ref<DataGridInstance | null>(null);
</script>
