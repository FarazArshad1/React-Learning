import { useEffect, useState , useRef} from "react";

export default function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const titleRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !amount) return alert("Please Fill in all the fileds")

        const newExpense = {
            id : Date.now(),
            title : title, 
            amount : parseFloat(amount)
        }

        onAddExpense(newExpense)
        setTitle("")
        setAmount("")
        titleRef.current.focus()
    }

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <input placeholder="Expense Title" type="text" value={title} onChange = {(e) => setTitle(e.target.value)} ref={titleRef}/>
            <input placeholder="Amount" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button type="submit">Add Expense</button>
        </form>
    )
}