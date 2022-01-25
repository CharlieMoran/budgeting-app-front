import axios from "axios";
import { useState, useEffect } from "react";
import TransTable from "../Components/TransTable";
import "./Home.css";

function Home() {
  const [transactions, setTrans] = useState([]);
  const URL = process.env.REACT_APP_API_URL + `/transactions`;
  useEffect(() => {
    axios.get(URL).then((response)=> {
      setTrans(response.data);
    });
  }, []);

  function balance(transactions) {
    return transactions.reduce((a, b) => {
      return a + Number(b.amount);
    }, 0);
  }

  function earnings(transactions) {
    return transactions
      .filter((item) => {
        return item.amount > 0;
      })
      .reduce((a, b) => {
        return a + Number(b.amount);
      }, 0);
  }

  function expenses(transactions) {
    return transactions
      .filter((item) => {
        return item.amount < 0;
      })
      .reduce((a, b) => {
        return a + Number(b.amount);
      }, 0);
  }

  return (
    <div className="Home">
      <div className="balance">
      <h1>Balance: {balance(transactions)}</h1>
      </div>
      <div className="stuff">
      <h3>Earnings: {earnings(transactions)}</h3>
      <h3>Expenses: {Math.abs(expenses(transactions))}</h3>
      </div>
      <TransTable transactions={transactions} />
    </div>
  );
}

export default Home;