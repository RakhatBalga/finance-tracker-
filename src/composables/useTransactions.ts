import { ref, computed, watch } from 'vue';

export interface Transaction {
  id: number;
  text: string;
  amount: number;
}

const STORAGE_KEY = 'finance-tracker-transactions';

function loadTransactions(): Transaction[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function useTransactions() {
  const transactions = ref<Transaction[]>(loadTransactions());

  watch(
    transactions,
    (val) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    },
    { deep: true }
  );

  const addTransaction = (transactionData: { text: string; amount: number }) => {
    const newTransaction: Transaction = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      ...transactionData,
    };
    transactions.value.push(newTransaction);
  };

  const deleteTransaction = (id: number) => {
    transactions.value = transactions.value.filter((t) => t.id !== id);
  };

  const total = computed(() => {
    return transactions.value.reduce((acc, t) => acc + t.amount, 0);
  });

  const income = computed(() => {
    return transactions.value
      .filter((t) => t.amount > 0)
      .reduce((acc, t) => acc + t.amount, 0);
  });

  const expense = computed(() => {
    return transactions.value
      .filter((t) => t.amount < 0)
      .reduce((acc, t) => acc + t.amount, 0);
  });

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    total,
    income,
    expense,
  };
}