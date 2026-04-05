<script setup lang="ts">
import type { Transaction } from '../composables/useTransactions';

defineProps<{
  transactions: Transaction[];
}>();

const emit = defineEmits(['delete']);

const formatAmount = (amount: number) => {
  const prefix = amount > 0 ? '+' : '-';
  return `${prefix}$${Math.abs(amount).toFixed(2)}`;
};
</script>

<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
    <h3 class="text-base font-semibold text-gray-900 mb-4">History</h3>

    <div v-if="transactions.length === 0" class="text-center py-10">
      <p class="text-gray-400 text-sm">No transactions yet</p>
      <p class="text-gray-300 text-xs mt-0.5">Add one above to get started</p>
    </div>

    <TransitionGroup name="list" tag="ul" class="flex flex-col gap-1.5">
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        class="group flex items-center justify-between rounded-xl px-3.5 py-3 border transition-all duration-150 cursor-default"
        :class="transaction.amount > 0
          ? 'bg-green-50/60 border-green-200/70 hover:bg-green-50'
          : 'bg-red-50/60 border-red-200/70 hover:bg-red-50'"
      >
        <div class="flex items-center gap-2.5 min-w-0">
          <div
            class="w-1.5 h-1.5 rounded-full shrink-0"
            :class="transaction.amount > 0 ? 'bg-green-600' : 'bg-red-500'"
          ></div>
          <span class="text-gray-800 text-sm truncate">{{ transaction.text }}</span>
        </div>

        <div class="flex items-center gap-2.5 shrink-0">
          <span
            class="font-mono font-semibold text-sm"
            :class="transaction.amount > 0 ? 'text-green-700' : 'text-red-600'"
          >
            {{ formatAmount(transaction.amount) }}
          </span>

          <button
            @click="emit('delete', transaction.id)"
            class="opacity-0 group-hover:opacity-100 transition-opacity duration-150 w-6 h-6 flex items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300 text-gray-500 hover:text-gray-700 text-xs cursor-pointer"
            title="Delete"
          >
            ✕
          </button>
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-enter-active {
  transition: all 0.25s ease;
}
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(12px);
}
</style>