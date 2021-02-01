import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MapIcon from '@material-ui/icons/Map';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MapView from '../Components/MapView';
import { useState } from 'react';
import { useCallback } from 'react';
import { TextField } from '@material-ui/core';
import { useEffect } from 'react';
import ItemsList from '../Components/ItemsList';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  findInput: {
    marginTop: theme.spacing(4),
  },
  map: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
let timeout = null;

export default function Home() {
  const classes = useStyles();

  const [list, setList] = useState([]);
  const [filter, setFilter] = useState([]);

  const fetchList = useCallback(async () => {
    if (!filter.length) {
      return;
    }
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURI(
        filter
      )}&format=geojson`
    );

    const json = await res.json();

    setList(json?.features);
  }, [setList, filter]);

  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fetchList();
    }, 300);
  }, [filter, fetchList]);

  const [current, setItem] = useState();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <MapIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Map with find
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Map
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Поиск по карте. Вы можете ввести искомый топоним в
              строку поиска ниже, чтобы затем выбрать в списке и он
              отобразился на карте.
            </Typography>
            <div className={classes.findInput}>
              <TextField
                id="standard-basic"
                label="Поиск"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
              />
            </div>
          </Container>
        </div>
        <Container className={classes.map} maxWidth="md">
          <ItemsList list={list} setItem={setItem} />
          <MapView currentItem={current} />
        </Container>
      </main>
    </React.Fragment>
  );
}
