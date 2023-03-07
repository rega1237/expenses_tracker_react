import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
const [showForm, setShow] = useState(false)

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData)
  }

  const showFormHandler = () => {
    setShow(true)
  }

  const hideFormHandler = () => {
    setShow(false)
  }

  return (
    <div className="new-expense">
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={hideFormHandler} />}
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}

    </div>
  )
}

export default NewExpense
