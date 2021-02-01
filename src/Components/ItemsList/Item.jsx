import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const Item = ({ item, setItem }) => {
  const name = item?.properties?.display_name;
  const type = item?.properties?.type;
  const icon = item?.properties?.icon;

  return (
    <ListItem button onClick={() => setItem(item)}>
      <ListItemAvatar>
        <Avatar>{icon ? <img src={icon} alt="icon" /> : null}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={type} />
    </ListItem>
  );
};

export default Item;
