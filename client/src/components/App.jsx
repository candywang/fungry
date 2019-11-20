import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import ItemRatingForm from './ItemRatingForm.jsx';
import ListItem from './ListItem.jsx';

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 10px;
  background-color: #fff4f4;
  border-radius: 2%;
`;

const Header = styled.h1`
  text-align: center;
`;

const Header2 = styled.div`
  text-align: center;
  font-size: 14px;
`;

const Header3 = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
`;

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
        <Wrapper>
          <Header>Fungry.</Header>
          {/* <h3>Fungry and can't decide where to eat? Press the button below to find a restaurant!</h3> */}
          <Header2>A place to journal your food thoughts.</Header2>
          <ItemRatingForm getForm={this.getForm} />
          <Header3>Items you've tried:</Header3>
          <ListItem userList={this.state.userList} delete={this.deleteReview} />
        </Wrapper>
    )
  }
}

export default App;