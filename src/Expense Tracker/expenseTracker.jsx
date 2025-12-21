import { useState, useEffect } from 'react'
import './expenseTracker.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

export default function ExpenseTracker() {
    const [expenses, setExpenses] = useState(() => {
        const storedExpenses = localStorage.getItem("expenses");
        if (!storedExpenses) return [];
        try {
            const parsed = JSON.parse(storedExpenses);
            return Array.isArray(parsed) ? parsed.filter((item) => item != null) : [];
        } catch (error) {
            console.error("Error parsing expenses:", error);
            return [];
        }
    })

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses))
    }, [expenses])

    // add expense
    const addExpense = (expenses) => {
        console.log(expenses);
        setExpenses((prev) => [...prev, expenses])
    }

    // Delete Expense
    const deleteExpense = (id) => {
        setExpenses((prev) => prev.filter(expenses => expenses.id !== id))
    }

    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0)

    return (
        <div className="app-container">
            <h1>💰 Expense Tracker</h1>
            <ExpenseForm onAddExpense={addExpense} />
            <h3 className="total">Total Expense: ₹{totalExpenses}</h3>
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />

        </div>
    )

}
