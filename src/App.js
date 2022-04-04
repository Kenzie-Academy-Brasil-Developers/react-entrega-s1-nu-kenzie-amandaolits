import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          {listTransactions !== [] && (
            <TotalMoney listTransactions={listTransactions} />
          )}
        </div>
        <List listTransactions={listTransactions} />
      </main>
    </div>
  );
}

export default App;