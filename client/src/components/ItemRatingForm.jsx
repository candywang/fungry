import React from 'react';

class ItemRatingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hasTried: true,
      establishment: '',
      address: '',
      item: '',
      rating: '10',
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    console.log(target, 'this is target')
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value, 'this is value')
    const name = target.name;
    console.log(name, 'this is name')

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <label>
          I've tried this:
          <input
            name="hasTried"
            type="checkbox"
            checked={this.state.hasTried}
            onChange={this.handleChange} />
        </label>
        <br /> */}
        <label>
          Establishment:<br />
          <input
            name="establishment"
            placeholder="Blue Bottle"
            type="string"
            value={this.state.establishment}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Address:<br />
          <input
            name="address"
            placeholder="123 Blue Bottle Ln. San Francisco, CA 94105"
            type="string"
            value={this.state.address}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Item:<br />
          <input
            name="item"
            placeholder="iced latte"
            type="string"
            value={this.state.item}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Rating:
          <select name="rating" value={this.state.rating} onChange={this.handleChange}>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </label>
        <br />
        <label>
          Comment:<br />
          <textarea name="comment" placeholder="So delicious! The coffee is very fragrant and I love that they use organic milk. My fav latte so far, best with no ice and extra milk!" value={this.state.comment} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ItemRatingForm;