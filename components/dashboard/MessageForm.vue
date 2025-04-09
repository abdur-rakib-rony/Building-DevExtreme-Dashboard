<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h2 class="text-xl font-semibold mb-4">Test Message</h2>
    <p class="mb-4">
      Message: <span class="font-medium">{{ testStore.message }}</span>
    </p>
    <div class="flex items-center">
      <DxTextBox
        v-model="newMessage"
        placeholder="Enter new message"
        class="mr-4 w-full max-w-md"
      />
      <DxButton text="Update Message" type="default" @click="updateMessage" />
    </div>

    <DxToast
      :visible="isToastVisible"
      :message="toastMessage"
      :type="toastType"
      position="top right"
      :display-time="3000"
      @hiding="onToastHiding"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTestStore } from '@/stores/test';
import { DxTextBox } from 'devextreme-vue/text-box';
import { DxButton } from 'devextreme-vue/button';
import { DxToast } from 'devextreme-vue/toast';
import type { ToastType } from 'devextreme/ui/toast';

const testStore = useTestStore();
const newMessage = ref('');
const isToastVisible = ref(false);
const toastMessage = ref('');
const toastType = ref<ToastType>('info');

const showToast = (message: string, type: 'info' | 'warning' | 'error' | 'success') => {
  toastMessage.value = message;
  toastType.value = type;
  isToastVisible.value = true;
};

const onToastHiding = () => {
  isToastVisible.value = false;
};

const updateMessage = () => {
  if (newMessage.value.trim()) {
    testStore.updateMessage(newMessage.value);
    showToast('Message updated successfully!', 'success');
    newMessage.value = '';
  } else {
    showToast('Please enter a message to update.', 'warning');
  }
};
</script>
