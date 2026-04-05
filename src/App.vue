<script setup lang="ts">
import TransactionForm from './components/TransactionForm.vue';
import TransactionList from './components/TransactionList.vue';
import SummaryCards from './components/SummaryCards.vue';
import { useTransactions } from './composables/useTransactions';

const { transactions, addTransaction, deleteTransaction, total, income, expense } = useTransactions();
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-6">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 tracking-tight">Finance Tracker</h1>
        <p class="text-gray-500 text-sm mt-1">Manage your income and expenses</p>
      </div>

      <!-- Summary Cards -->
      <SummaryCards :total="total" :income="income" :expense="expense" />

      <!-- Two-column layout for larger screens -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <TransactionForm @add-transaction="addTransaction" />
        <TransactionList :transactions="transactions" @delete="deleteTransaction" />
      </div>

      <p class="text-center text-gray-300 text-xs mt-10">
        Built with Vue 3, TypeScript &amp; Tailwind CSS
      </p>
    </div>
  </div>
</template>