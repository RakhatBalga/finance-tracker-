<script setup lang="ts">
import type { Transaction } from '../composables/useTransactions';

defineProps<{
  transactions: Transaction[]
}>();

defineEmits<{
  (e: 'delete', id: number): void
}>();
</script>

<template>
  <div class="bg-slate-800/70 p-6 rounded-2xl border border-white/10 shadow-lg mt-4">
    <h3 class="text-xl font-semibold mb-1 text-slate-100">Transaction History</h3>
    <hr class="border-t border-white/10 mb-5 mt-2" />
    <p class="text-slate-400 text-center italic py-4">
      Your transactions will appear here...
    </p>
  </div>
</template>
