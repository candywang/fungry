import React from 'react';
import styled from 'styled-components';

const LIRContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Link = styled.a`
  color: palevioletred;
  font: arial;
  font-size: 16px;
  font-weight: bold;
`;

const ItemRating = styled.div`
  display: flex;
  justify-content: flex-start;
  color: black;
  font: arial;
  font-size: 16px;
`;

const Item = styled.div`
  color: black;
  font: arial;
  font-size: 16px;
`;

const Rating = styled.div`
  color: black;
  font: arial;
  font-size: 16px;
  font-weight: bold;
`;

const Comment = styled.div`
  color: grey;
  font: arial;
  font-size: 14px;
`;

const ListItemEntry = (props) => {
  return (
    <div>
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
    </div>
  )
}

export default ListItemEntry;