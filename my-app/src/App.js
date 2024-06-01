

import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseClock from "./components/ExpenseClock";

function App() {

  const expense = [
    { title: 'mazda', amount: 3000, date: new Date(2020, 2, 28) },
    { title: 'ford', amount: 2000, date: new Date(2021, 3, 12) },
    { title: 'nisan', amount: 1000, date: new Date(2022, 4, 8) },
    { title: 'honda', amount: 500, date: new Date(2023, 5, 20) },

  ];
  return (
    <div>

      <ExpenseForm />
      <ExpenseClock />
      <Expenses items={expense} />

    </div>

  );
}

export default App;
