import React from 'react';
import { useState } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id:0,
      date: "2025-04-11",
      description: "Movie",
      category: "Entertainment",
      amount: 100,
    },
    {
      id: 2,
      date: "2025-05-11",
      description: "Gym",
      category: "Health",
      amount: 1000,
    },
    {
      id: 3,
      date: "2025-06-11",
      description: "KFC",
      category: "Food",
      amount: 1500,
    },
  ]);

  const handleAddExpense = (newExpense) =>{
    const updatedExpenses = [...expenses,{...newExpense, id: expenses.length + 1}];
    setExpenses(updatedExpenses);
  }
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter((expense)=>{
    const term = searchTerm.toLowerCase();
    return(
      expense.date.includes(term)||
      expense.description.toLowerCase().includes(term) ||
      expense.category.toLowerCase().includes(term) ||
      expense.amount.toString().includes(term)
    );
  });
  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  }
  return (
    <div className='p-4 sm:p-6 sm:m-10 bg-gray-50 min-h-screen'>

      <div className='flex flex-col mb-8 text-left'>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold mb-2'>Expense Tracker</h1>
        <p  className="text-balance sm:text-base md:text-lg max-w-xl text-gray-700"> Easily track your daily expenses, manage categories, and stay on top of your budget in real time.</p>
      </div>

      <div className='flex flex-col lg:flex-row gap-6 px-2 '>
         {/* form section */}
        <div className="lg:w-1/3">
          <ExpenseForm addExpense={handleAddExpense} />
        </div>
           {/* table section */}
        <div className="lg:w-2/3 overflow-x-auto">
          <SearchBar  className="m-0" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
        </div>
      </div>
    </div>
   
  )
}

export default App