import React from 'react'
import { useState } from 'react'

function ExpenseForm({addExpense}) {
    const [formData, setFormData] = useState(
        {
            date: "",
            description: "",
            category:"",
            amount:"",
        }
    );

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newExpense = {
            id: Date.now(),
            date: formData.date,
            description: formData.description,
            amount:parseFloat(formData.amount),
            category:formData.category,
        };

        addExpense(newExpense);

        setFormData({date: "", description:"", amount:"", category:""});
    }
  return (
    // <div>ExpenseForm</div>
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded"
        required
        />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full px-3 py-2 border rounded"
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="w-full px-3 py-2 border rounded"
        required
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full px-3 py-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
      >
        Add Expense
      </button>
    </form>
  )
}

export default ExpenseForm