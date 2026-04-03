<template>
  <div class="app-container glass-panel">
    <header>
      <h1>Finance Tracker</h1>
      <p class="subtitle">Take control of your wealth</p>
    </header>
    
    <SummaryCards :total="total" :income="income" :expenses="Math.abs(expenses)" />
    
    <div class="main-content">
      <TransactionForm @add="handleAdd" />
      <TransactionList :transactions="transactions" @delete="handleDelete" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTransactions } from './composables/useTransactions';
import SummaryCards from './components/SummaryCards.vue';
import TransactionForm from './components/TransactionForm.vue';
import TransactionList from './components/TransactionList.vue';

const { transactions, total, income, expenses, addTransaction, deleteTransaction } = useTransactions();

const handleAdd = (data: { text: string; amount: number }) => {
  addTransaction(data);
};

const handleDelete = (id: string) => {
  deleteTransaction(id);
};
</script>

<style scoped>
header {
  text-align: center;
  margin-bottom: 0.5rem;
}
h1 {
  font-size: 2.5rem;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.subtitle {
  color: var(--text-secondary);
  font-size: 0.9rem;
}
.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
  }
}
</style>
