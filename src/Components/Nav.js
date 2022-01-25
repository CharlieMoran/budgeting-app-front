import { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="navBar">
        <Link to="/">
          <h1 className="logo">Budget App</h1>
        </Link>
        <Link to="/new">
          <button className="new">New Transaction</button>
        </Link>
      </div>
    );
  }
}

export default Nav;