import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    overflow: 'auto',
    maxHeight: '500px',
  },
}));

const ID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
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
