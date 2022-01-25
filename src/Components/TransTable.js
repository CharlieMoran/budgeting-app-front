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
          <th>Date</th>
          <th>Source</th>
          <th>Amount</th>
          {this.props.transactions.map((item, index)=> {
            return (
              <tr>
                <td>{item.date}</td>
                <Link to={`/transactions/${index}`}>
                  <td>{item.source}</td>
                </Link>
                <td>{item.amount}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
};

export default TransTable;