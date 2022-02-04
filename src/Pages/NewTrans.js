import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewTrans.css";

function NewTrans() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL + `/transactions`;
  const [transaction, setTransaction] = useState({
    date: "",
    source: "",
    amount: "",
    item_name: "",
    category: "",
  });

  const handleChange = (evt) => {
    setTransaction({ ...transaction, [evt.target.id]: evt.target.value });
    if (evt.target.id === "category") {
      if (evt.target.value === "income") {
        if (Number(transaction.amount) < 0) {
          setTransaction({ ...transaction, amount: -transaction.amount });
        }
      } else {
        if (Number(transaction.amount) > 0) {
          setTransaction({ ...transaction, amount: -transaction.amount });
        }
      }
    }
  };
  const handleSubmit = (evt) => {
    console.log("handleSubmit")
    evt.preventDefault();
    axios.post(URL, transaction).then(() => navigate("/transactions"));
  };

  return (
    <div className="newTrans">
      <h1>Add a new item</h1>
      <form onSubmit={handleSubmit}>
        <label for="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={handleChange}
          required
        />
        <label for="name">Item Name</label>
        <input
          type="text"
          id="item_name"
          name="name"
          onChange={handleChange}
          required
        />
        <label for="amount">Amount</label>
        <input
          type="number"
          step="0.01"
          id="amount"
          name="amount"
          onChange={handleChange}
          required
        />
        <label for="source">From</label>
        <input
          type="text"
          id="source"
          name="source"
          onChange={handleChange}
          required
        />
        <label for="category">Category</label>
        <select
          type="category"
          id="category"
          name="category"
          onChange={handleChange}
          required
        >
          <option value="none" selected disabled hidden>
            Select a Category
          </option>
          <optgroup label="💰 Earnings 💰">
            <option value="income">Income</option>
            <option value="income">Stock</option>
            <option value="income">Liquidation</option>
            <option value="income">Refund</option>
            <option value="income">Dividends</option>
          </optgroup>
          <optgroup label="💸 Expenses 💸">
            <option value="grocery">Grocery Store</option>
            <option value="banana">🍌 Banana 🍌</option>
            <option value="gas">Gas Station</option>
            <option value="restaurants">Restaurant</option>
            <option value="travel">Travel</option>
            <option value="shopping">Online Shopping</option>
          </optgroup>
          <optgroup label="🏦 Other 🏦">
            <option value="bills">Bills</option>
            <option value="bills">Civil Forfeiture</option>
            <option value="bills">Asset Aquisition</option>
            <option value="bills">Mortgage</option>
            <option value="bills">Taxes</option>
            <option value="bills">Misc</option>
          </optgroup>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewTrans;