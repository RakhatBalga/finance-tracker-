<script setup lang="ts">
defineProps<{
  total: number;
  income: number;
  expense: number;
}>();

const formatCurrency = (value: number) => {
  return `$${Math.abs(value).toFixed(2)}`;
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Balance</p>
      <p
        class="text-3xl font-extrabold tracking-tight"
        :class="total >= 0 ? 'text-gray-900' : 'text-red-600'"
      >
        {{ total >= 0 ? '' : '-' }}${{ Math.abs(total).toFixed(2) }}
      </p>
    </div>

    <div class="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
      <p class="text-xs font-medium text-green-600 uppercase tracking-widest mb-1">Income</p>
      <p class="text-3xl font-extrabold text-green-700 tracking-tight">+{{ formatCurrency(income) }}</p>
    </div>

    <div class="bg-white rounded-2xl border border-red-100 p-6 shadow-sm">
      <p class="text-xs font-medium text-red-500 uppercase tracking-widest mb-1">Expense</p>
      <p class="text-3xl font-extrabold text-red-600 tracking-tight">-{{ formatCurrency(expense) }}</p>
    </div>
  </div>
</template>