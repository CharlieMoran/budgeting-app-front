import { Component } from "react";

class NewTransForm extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="date">Date</label>
        <input type="date" id="date" name="date" onChange={this.handleChange} />
        <label for="name">Name</label>
        <input type="text" id="name" name="name" onChange={this.handleChange} />
        <label for="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          onChange={this.handleChange}
        />
        <label for="from">From</label>
        <input type="text" id="from" name="from" onChange={this.handleChange} />
        <label for="category">Category</label>
        <select
          type="category"
          id="category"
          name="category"
          onChange={this.handleChange} >
          <option value="none" selected disabled hidden>
            Select a Category
          </option>
          <option value="grocery">Grocery Stores</option>
          <option value="gas">Gas Stations</option>
          <option value="restaurants">Restaurants</option>
          <option value="travel">Travel</option>
          <option value="shopping">Online Shopping</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewTransForm;