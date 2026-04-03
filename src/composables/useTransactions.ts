import { ref, computed } from 'vue';

export interface Transaction {
  id: number;
  text: string; 
  amount: number;
}

export function useTransactions(){
  const transactions = ref<Transaction[]>([]);

  const addTransaction = ( transactionData: {text: string, amount: number }) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      ...transactionData
    }

    transactions.value.push(newTransaction);
  }; 
  
  const deleteTransaction = ( id: number ) => {
    transactions.value = transactions.value.filter(t => t.id !== id);
  };

  const total = computed(() => {
    return transactions.value.reduce((acc, t) => {
      return acc + t.amount;
    }, 0);
  });

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    total
  };

}