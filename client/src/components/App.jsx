import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import ItemRatingForm from './ItemRatingForm.jsx';
import ListItem from './ListItem.jsx';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomRestaurant: [],
      userList: []
    }

    this.getForm = this.getForm.bind(this);
    this.getData = this.getData.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    Axios.get('/reviews')
      .then(result => {
        this.setState({userList: result.data});
      })
      .catch(err => console.log(err));
  }

  getForm(review) {
    let newReview = review;

    Axios.post('/reviews', newReview)
      .then(result => console.log(newReview, ' posted!'))
      .then(this.getData())
      .catch(err);
  }

  deleteReview(id) {
    let itemId = {
      data: {
        _id: id
      }
    };

    Axios.delete('/reviews', itemId)
      .then(result => console.log(result.config.data, ' deleted!'))
      .then(this.getData())
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div>
          <h1>Fungry.</h1>
          {/* <h3>Fungry and can't decide where to eat? Press the button below to find a restaurant!</h3> */}
          <h5>Rate the item you just tried - whether it was the best or worst you've ever had.</h5>
          <ItemRatingForm getForm={this.getForm} />
          <h5>Items you've tried:</h5>
          <ListItem userList={this.state.userList} delete={this.deleteReview} />
        </div>
    )
  }
}

export default App;