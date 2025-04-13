import React from 'react'

function ExpenseTable({ expenses, onDelete }) {
  return (
    <div className='p-2'>
        <table className="min-w-full border text-left text-sm">
            <thead className="bg-grey-100">
                <tr>
                    <th className="px-4 py-2 border">Date</th>
                    <th className="px-4 py-2 border">Desscription</th>
                    <th className="px-4 py-2 border">Category</th>
                    <th className="px-4 py-2 border">Amount</th>
                </tr>
            </thead>
            <tbody>
               {expenses.map((expense)=>(
                <tr key={expense.id}>
                    <td className="px-4 py-2 border">{expense.date}</td>
                    <td className="px-4 py-2 border">{expense.description}</td>
                    <td className="px-4 py-2 border">{expense.category}</td>
                    <td className="px-4 py-2 border">{expense.amount}</td>
                    <td className='px-4 py-2 border'>
                        <button onClick={() => onDelete(expense.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">
                            Delete
                        </button>
                    </td>
                </tr>
               ))} 
            </tbody>
        </table>
    </div>
  );
}

export default ExpenseTable