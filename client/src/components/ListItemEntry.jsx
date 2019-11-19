import React from 'react';

const ListItemEntry = (props) => {
  return (
    <div><li>{props.establishment} {props.address} {props.comment} {props.rating}</li></div>
  )
}

export default ListItemEntry;