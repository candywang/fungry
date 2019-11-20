import React from 'react';
import styled from 'styled-components';

const ReviewContainer = styled.div`
  padding: 10px;
`;

const LIRContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Link = styled.a`
  color: palevioletred;
  font-size: 16px;
  font-weight: bold;
  padding-right: 10px;
`;

const ItemRating = styled.div`
  display: flex;
  justify-content: flex-start;
  color: black;
  font-size: 16px;
  
`;

const Item = styled.div`
  color: black;
  font-size: 16px;
  padding-right: 10px;
`;

const Rating = styled.div`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

const Comment = styled.div`
  color: grey;
  font-size: 14px;
  padding: 5px 0px 5px 0px;
`;

const ListItemEntry = (props) => {
  return (
    <ReviewContainer>
      <LIRContainer>
        <Link href={props.href}>{props.placeName}</Link>
        <ItemRating>
          <Item>{props.item}</Item>
          <Rating>{props.rating}</Rating>
        </ItemRating>
      </LIRContainer>
      <Comment>{props.comment}</Comment>
      <button onClick={() => {
        props.delete(props.id)
      }}>Delete</button>
    </ReviewContainer>
  )
}

export default ListItemEntry;