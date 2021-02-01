import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    maxHeight: '500px',
  },
}));

const ID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

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

export default function ItemsList({ list = [], setItem = () => {} }) {
  const classes = useStyles();

  const renderItem = (item) => (
    <Item key={ID()} setItem={setItem} item={item} />
  );
  return (
    <List className={classes.root}>
      {list.map((item) => renderItem(item))}
    </List>
  );
}
