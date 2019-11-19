import React from 'react';

const ListItemEntry = (props) => {
  return (
    <div>
      <a href={props.href}>{props.placeName}</a>
      {props.comment} {props.rating}
    </div>
  )
}

export default ListItemEntry;