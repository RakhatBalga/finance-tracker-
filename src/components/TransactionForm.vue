<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
const amount = ref<number | null>(null);

const emit = defineEmits(['add-transaction']);

const onSubmit = () => {
    if (!text.value || !amount.value) {
        alert('Please add a text and amount of money')
        return;
    }

    emit('add-transaction', {
        text: text.value,
        amount: Number(amount.value)
    });

    text.value = '';
    amount.value = null; 
};
</script>

<template>
  <div class="bg-slate-800/70 p-6 rounded-2xl border border-white/10 shadow-lg backdrop-blur-xl">
    <h3 class="text-xl font-semibold mb-1 text-slate-100">Add new transaction</h3>
    <hr class="border-t border-white/10 mb-5 mt-2" />
    
    <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
        <div>
            <label class="block mb-2 text-sm font-semibold text-slate-400 uppercase tracking-wide">Name</label>
            <input 
              type="text" 
              v-model="text" 
              placeholder="Enter text..."
              class="w-full bg-slate-900/50 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors placeholder-slate-500"
            >
        </div>
        <div>
            <label class="block mb-2 text-sm font-semibold text-slate-400 uppercase tracking-wide">Amount</label>
            <input 
              type="number" 
              v-model="amount" 
              placeholder="Enter amount of money..."
              class="w-full bg-slate-900/50 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors placeholder-slate-500"
            >
        </div>
        <button class="w-full bg-blue-500 hover:bg-blue-400 active:translate-y-0.5 hover:-translate-y-0.5 transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] text-white font-bold rounded-xl px-4 py-3 mt-2">
          Add transaction
        </button>
    </form>    
  </div>
</template>