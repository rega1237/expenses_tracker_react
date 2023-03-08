import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const changeFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
      <Card className="expenses">
        <ExpensesFilter initialYear={filterYear} onChangeFilter={changeFilterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
  );
}

export default Expenses;
