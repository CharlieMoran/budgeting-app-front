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
            return (
              <tr key={index}>
                <td>{item.date}</td>
                <td><Link to={`/transactions/${index}`}>
                  {item.source}
                </Link>
                </td>
                <td>${item.amount.toFixed(2)}</td>
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