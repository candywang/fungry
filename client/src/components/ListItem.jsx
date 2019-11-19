import React from 'react';
import ListItemEntry from './ListItemEntry.jsx';

const ListItem = (props) => {
  const userList = props.userList;
  const listItem = userList.map((item) =>
    <ListItemEntry
      key={item._id}
      placeName={item.place_name}
      category={item.category}
      date={item.date}
      comment={item.comment}
      rating={item.rating}
      href={`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${item.place_id}`}
    />
  );

  return (
    <div><ul>{listItem}</ul></div>
  )
}

export default ListItem;