import React from 'react';
import ListItemEntry from './ListItemEntry.jsx';

const ListItem = (props) => {
  const userList = props.userList;
  const listItem = userList.map((item) =>
    <ListItemEntry
      key={item.id}
      establishment={item.establishment}
      address={item.address}
      comment={item.comment}
      rating={item.rating}
      />
    );

  return (
    <div><ul>{listItem}</ul></div>
  )
}

export default ListItem;