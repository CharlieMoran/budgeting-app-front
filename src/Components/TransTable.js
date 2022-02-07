import { Component } from "react";
import { Link } from "react-router-dom";

class TransTable extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="transTable">
        <table>
          <thead>
          <tr>
          <th>Date</th>
          <th>Source</th>
          <th>Amount</th>
          </tr>
          </thead>
          <tbody>
          {this.props.transactions.map((item, index)=> {
            console.log (`${item.amount}`)
            return (
              <tr key={index}>
                <td>{item.date}</td>
                <td><Link to={`/transactions/${index}`}>
                  {item.source}
                </Link>
                </td>
                <td>${parseFloat(item.amount).toFixed(2)}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default TransTable;