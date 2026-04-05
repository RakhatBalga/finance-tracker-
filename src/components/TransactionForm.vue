<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
const amount = ref<number | null>(null);
const error = ref('');
const emit = defineEmits(['add-transaction']);

const onSubmit = () => {
  if (!text.value || amount.value === null || amount.value === 0) {
    error.value = 'Please enter a description and a non-zero amount.';
    return;
  }
  error.value = '';
  emit('add-transaction', {
    text: text.value,
    amount: Number(amount.value),
  });
  text.value = '';
  amount.value = null;
};
</script>

<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm h-fit">
    <h3 class="text-lg font-semibold text-gray-900">Add Transaction</h3>
    <p class="text-xs text-gray-400 mt-0.5 mb-5">Positive for income · Negative for expenses</p>

    <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
      <div>
        <label class="block mb-1.5 text-xs font-medium text-gray-500">Description</label>
        <input
          type="text"
          v-model="text"
          placeholder="e.g. Salary, Groceries..."
          class="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all placeholder-gray-400"
        />
      </div>
      <div>
        <label class="block mb-1.5 text-xs font-medium text-gray-500">Amount ($)</label>
        <input
          type="number"
          v-model="amount"
          step="0.01"
          placeholder="e.g. 500 or -75.50"
          class="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all placeholder-gray-400"
        />
      </div>

      <p v-if="error" class="text-red-600 text-xs -mt-1">{{ error }}</p>

      <button
        type="submit"
        class="w-full bg-gray-800 hover:bg-gray-700 active:scale-[0.98] transition-all text-white font-semibold rounded-lg px-4 py-2.5 text-sm cursor-pointer shadow-sm"
      >
        Add Transaction
      </button>
    </form>
  </div>
</template>