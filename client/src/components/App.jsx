import React from 'react';
import ItemRatingForm from './ItemRatingForm.jsx';
import ListItem from './ListItem.jsx';
import myList from '../../../sampleData.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomRestaurant: [],
      userList: myList
    }

    this.getForm = this.getForm.bind(this);
  }

  getForm(rating) {
    console.log(rating, 'rating from app');
  }

  render() {
    return (
        <div>
          <h1>Fungry.</h1>
          <h3>Fungry and can't decide where to eat? Press the button below to find a restaurant!</h3>
          <h5>Rate the item you just tried - whether it was the best you ever had or the worst you've ever had.</h5>
          <ItemRatingForm getForm={this.getForm} />
          <h5>Items you've tried:</h5>
          <ListItem userList={this.state.userList} />
        </div>
    )
  }
}

export default App;