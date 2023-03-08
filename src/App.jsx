import { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
]

function App() {

  const [expenses, setExpense] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (enteredExpense) => {
    setExpense((prevExpenses) => {
      return [enteredExpense, ...prevExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
