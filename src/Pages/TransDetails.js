import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./TransDetails.css";

function TransDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const [transaction, setTrans] = useState({});
  console.log(params.id);
  const URL = process.env.REACT_APP_API_URL + `/transactions/${params.id}`;
  useEffect(() => {
    axios.get(URL).then((response) => {
      setTrans(response.data);
    });
  }, []);
  const handleDelete = () => {
    axios.delete(URL).then(() => navigate("/"));
  };
  return (
    <div className="transDetails">
      <h2>{transaction.item_name}</h2>
      <h2>From: {transaction.source}</h2>
      <h2>Date: {transaction.date}</h2>
      <h2>Amount: {transaction.amount}</h2>
      {transaction.category && <h2>Category: {transaction.category}</h2>}
      <Link to={`/transactions/${params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TransDetails;