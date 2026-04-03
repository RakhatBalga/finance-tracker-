<script setup lang="ts">
defineProps<{
  total: number;
}>();
</script>

<template>
  <div class="bg-slate-800/70 p-6 rounded-2xl border border-white/10 shadow-lg text-center mt-4">
      <h3 class="text-xl font-semibold mb-1 text-slate-100">Summary</h3>
      <!-- Finish building out your Income/Expense displays here! -->
      <p class="text-white text-3xl font-bold mt-2">${{ total }}</p>
  </div>
</template>