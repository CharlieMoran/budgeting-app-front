import axios from "axios";
import { useState, useEffect } from "react";
import TransTable from "../Components/TransTable";
import "../Pages/Home.css";


function Transactions() {
  const [transactions, setTrans] = useState([]);
  console.log(transactions)
  const URL = process.env.REACT_APP_API_URL + `/transactions`;
  useEffect(() => {
    axios.get(URL).then((response)=> {
      setTrans(response.data);
    });
  }, []);


  function balance(transactions) {
    let balance = document.getElementById("balance");
    return transactions.reduce((a, b) => {
      let num = a + Number(b.amount);
      let val = parseInt(num)
      if (val >= 1000) {
        balance.style.color = "green";
    } else if (val > 0){
        balance.style.color = "grey";
    } else {
      balance.style.color = "red";
    } return a + Number(b.amount)}, 0,
  )
    ;
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

//   function BananaVideo(transactions) {
//     console.log(transactions)
//       let x = (Math.floor(Math.random() * 2))
//       for(let i = 0; i > this.state.transactions.length; i++){
//       if (this.state.transactions[i].source === "banana" ){
//         console.log(this.state.transactions[i].source)
//        return <video className='banana' autoPlay loop>
//        <source src={Banana} type='video/mp4' />
//       </video> ;
//       } 
//       else if (this.state.transactions[i] === "banana" ){
//         return <video className='banana' autoPlay loop>
//         <source src={Banana2} type='video/mp4' />
//        </video> ;
//       } 
//     }
//       return <video></video>;
//   }

  return (
    <div className="Home" id="Home">
      <div className="balance">
      <h1 id="balance">Balance: ${balance(transactions).toFixed(2)}</h1>
      </div>
      <div className="stuff">
      <h3>Earnings: ${earnings(transactions).toFixed(2)}</h3>
      <h3>Expenses: ${Math.abs(expenses(transactions)).toFixed(2)}</h3>
      </div>
      <TransTable transactions={transactions} />
    </div>
  );
}

export default Transactions;