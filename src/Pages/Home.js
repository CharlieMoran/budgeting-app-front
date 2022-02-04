import axios from "axios";
import { useState, useEffect } from "react";
import TransTable from "../Components/TransTable";
import "./Home.css";
// import Banana from "../Components/Video/banana.mp4"
// import Banana2 from "../Components/Video/banana2.mp4"

function Home() {
  const [transactions, setTrans] = useState([]);
  const URL = process.env.REACT_APP_API_URL + `/transactions`;
  useEffect(() => {
    axios.get(URL).then((response)=> {
      setTrans(response.data);
    });
  }, [URL]);

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

//   function BananaVideo() {
//     let x = (Math.floor(Math.random() * 2 === 0))
//     let find = document.getElementById("Home")
//     if (video.includes("banana") && x === 1){
//      return <video className='banana' autoPlay loop>
//      <source src={Banana} type='video/mp4' />
//     </video> ;
//     } else if (video.includes("banana") && x === 2){
//       return <video className='banana' autoPlay loop>
//       <source src={Banana2} type='video/mp4' />
//      </video> ;
//   } else {
//     return;
//   }
// }

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
    <div className="Home" id="Home">
      {/* <BananaVideo /> */}
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

export default Home;