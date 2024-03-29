import React, { useState } from "react";
import Expenses from "../../components/Expenses/Expenses";
import NewExpense from "../../components/NewExpense/NewExpense";
import Footer from "../../components/Navbar/Footer";
import ExpensesIntroduction from "../../components/Expenses/ExpensesIntroduction";

const dummyExpenses = [];

function App() {
	const [expenses, setExpenses] = useState(dummyExpenses);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<ExpensesIntroduction />
			<NewExpense onAddExpsense={addExpenseHandler} />
			<Expenses items={expenses}></Expenses>
			<Footer />
		</div>
	);
}

export default App;
