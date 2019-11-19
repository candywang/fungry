import React from 'react';
import styled from 'styled-components';
import ListItemEntry from './ListItemEntry.jsx';

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const ListItem = (props) => {
  const userList = props.userList;
  const listItem = userList.map((item) =>
    <ListItemEntry
      key={item._id}
      id={item._id}
      placeName={item.place_name}
      category={item.category}
      date={item.date}
      item={item.item}
      comment={item.comment}
      rating={item.rating}
      href={`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${item.place_id}`}
      delete={props.delete}
    />
  );

  console.log(props.delete)

  return (
    <ReviewContainer>
      {listItem}
    </ReviewContainer>
  )
}

export default ListItem;