# 💰 Finance Tracker

A sleek personal finance tracker built with **Vue 3**, **TypeScript**, and **Tailwind CSS v4**. Track your income, expenses, and overall balance with a modern dark-themed interface.

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)

---

## ✨ Features

- **Balance Overview** — Real-time balance display with a gradient hero card
- **Income & Expense Breakdown** — Color-coded summary cards for quick insights
- **Add Transactions** — Simple form to add income (positive) or expenses (negative)
- **Transaction History** — Animated list with hover-to-delete functionality
- **LocalStorage Persistence** — Data survives page refreshes
- **Responsive Design** — Looks great on mobile and desktop
- **Smooth Animations** — List enter/leave transitions for a polished UX

---

## 🛠 Tech Stack

| Layer       | Technology                         |
| ----------- | ---------------------------------- |
| Framework   | [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`) |
| Language    | [TypeScript](https://www.typescriptlang.org/) |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com/) |
| Build Tool  | [Vite 8](https://vite.dev/)         |
| Font        | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |

---

## 📂 Project Structure

```
src/
├── assets/
│   └── main.css             # Additional styles (reserved)
├── components/
│   ├── SummaryCards.vue      # Balance, income & expense cards
│   ├── TransactionForm.vue   # Form to add new transactions
│   └── TransactionList.vue   # Animated transaction history list
├── composables/
│   └── useTransactions.ts    # State management & business logic
├── App.vue                   # Root layout component
├── main.ts                   # App entry point
└── style.css                 # Global styles & Tailwind import
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/RakhatBalga/finance-tracker-.git
cd finance-tracker-

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📖 Usage

1. **Add Income** — Enter a description (e.g. *"Salary"*) and a positive amount (e.g. *5000*)
2. **Add Expense** — Enter a description (e.g. *"Groceries"*) and a negative amount (e.g. *-150*)
3. **View Summary** — The balance, income, and expense cards update in real-time
4. **Delete** — Hover over any transaction in the history list and click the ✕ button
5. **Persistence** — All data is saved to `localStorage` and survives page refreshes

---

## 🧩 Component Overview

### `useTransactions` Composable
Central state management using Vue's Composition API. Provides reactive `transactions` array, computed `total`, `income`, and `expense` values, plus `addTransaction` and `deleteTransaction` methods. Persists data to `localStorage` via a deep watcher.

### `SummaryCards`
Displays three cards: a gradient balance hero card, and two smaller income/expense cards with color-coded values (green for income, red for expenses).

### `TransactionForm`
A controlled form with description and amount inputs. Validates that both fields are filled and the amount is non-zero before emitting the `add-transaction` event.

### `TransactionList`
Renders the transaction history with Vue's `<TransitionGroup>` for smooth enter/leave animations. Each item is color-coded with a glowing dot indicator and features a hover-reveal delete button.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
