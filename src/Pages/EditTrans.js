import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewTrans.css"

function EditTrans() {
  const navigate = useNavigate();
  const params = useParams();
  const [transaction, setTransaction] = useState({});
  const URL = process.env.REACT_APP_API_URL + `/transactions/${params.id}`;
  useEffect(() => {
    axios.get(URL).then((response) => {
      setTransaction(response.data);
    });
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(URL, transaction)
      .then(() => navigate(`/transactions/${params.id}`));
  };

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
    if (event.target.id === "category") {
      console.log(transaction.amount);
      if (event.target.value === "income") {
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

  return (
    <div className="edittrans">
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <label for="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={transaction.date}
          onChange={handleChange}
          required
        />
        <label for="name">Item Name</label>
        <input
          type="text"
          id="item_name"
          name="name"
          value={transaction.item_name}
          onChange={handleChange}
          required
        />
        <label for="amount">Amount</label>
        <input
          type="number"
          step="0.01"
          id="amount"
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
          required
        />
        <label for="source">From</label>
        <input
          type="text"
          id="source"
          name="source"
          value={transaction.source}
          onChange={handleChange}
          required
        />
        <label for="category">Category</label>
        <select
          type="category"
          id="category"
          name="category"
          value={transaction.category}
          onChange={handleChange}
          required
        >
          <option value="none" selected disabled hidden>
            Select a Category
          </option>
          <optgroup label="Earnings">
            <option value="income">Income</option>
          </optgroup>
          <optgroup label="Expenses">
            <option value="grocery">Grocery Stores</option>
            <option value="gas">Gas Stations</option>
            <option value="restaurants">Restaurants</option>
            <option value="travel">Travel</option>
            <option value="shopping">Online Shopping</option>
          </optgroup>
          <optgroup label="Other">
            <option value="bills">Bills</option>
          </optgroup>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditTrans;