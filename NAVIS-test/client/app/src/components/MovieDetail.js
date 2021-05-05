// libs
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// components
import {
  withStyles,
  Paper,
  Typography,
  IconButton,
  CircularProgress
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

// modules
import { selectGenres } from '@app/modules/selectors';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    height: '100vh',
    width: '80vw',
    margin: 'auto',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    height: 180,
    borderRadius: '8px 8px 0 0',
    backgroundColor: theme.palette.app.yellow,
    position: 'relative',
  },
  headerInfo: {
    position: 'absolute',
    left: '40%',
    bottom: 16,
    color: '#323741',
    paddingLeft: 50,
    width: 500,
  },
  title: {
    fontSize: 30,
    fontWeight: 900,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 500,
  },
  closeButton: {
    margin: 20,
    padding: 6,
    color: theme.palette.app.white,
    backgroundColor: theme.palette.app.gray,
    '&:hover': {
      backgroundColor: theme.palette.app.gray,
    },
  },
  body: {
    minHeight: 400,
    backgroundColor: theme.palette.app.gray,
    color: theme.palette.app.white,
    borderRadius: '0 0 8px 8px',
    paddingLeft: '40%',
  },
  spinner: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiCircularProgress-root': {
      color: theme.palette.app.yellow,
    },
  },
  poster: {
    width: 300,
    height: 444,
    zIndex: 100,
    position: 'absolute',
    left: '12%',
    top: '33%',
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 1px 16px rgba(0, 0, 0, 0.25))',
  },
  info: {
    width: 500,
    paddingLeft: 50,
    paddingTop: 16,
  },
  studio: {
    fontSize: 14,
    marginBottom: 16,
  },
  plot: {
    marginBottom: 16,
  },
  starring: {
    fontWeight: 800,
  },
  actors: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  actor: {
    textDecoration: 'underline',
    cursor: 'pointer',
    marginRight: 4,
  },
  genres: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  genre: {
    color: theme.palette.app.darkGray,
    backgroundColor: theme.palette.app.yellow,
    fontWeight: 800,
    padding: '6px 20px',
    borderRadius: 50,
    width: 'fit-content',
    marginTop: 32,
    marginRight: 12,
    cursor: 'pointer',
  },
});

const MovieDetail = props => {
  const { id, handleClose, classes } = props;

  const genres = useSelector(selectGenres);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await axios.get(`/api/movie/${id}`);
      setMovieData(response.data);
    }
    fetchMovieData();
  }, []);

  const getGenreDescFromId = id => {
    for (const genre of genres) {
      if (genre.id === id) return genre.desciption;
    }
  };

  if (!movieData) {
    return (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img
          src={`/images/${movieData.poster}`}
          alt={`${movieData.title} Poster`}
          className={classes.poster}
        />

        <span className={classes.headerInfo}>
          <Typography className={classes.title}>{movieData.title}</Typography>
          <Typography className={classes.subTitle}>
            {movieData.year} ({movieData.rating})
          </Typography>
        </span>

        <IconButton onClick={handleClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </div>

      <div className={classes.body}>
        <div className={classes.info}>
          <Typography className={classes.studio}>{movieData.studio}</Typography>
          <Typography className={classes.plot}>{movieData.plot}</Typography>
          <Typography className={classes.starring}>Starring</Typography>
          <span className={classes.actors}>
            {movieData.actors.map((actor, index) => (
              <Typography className={classes.actor} key={index}>
                {actor}{index !== movieData.actors.length - 1 && ','}
              </Typography>
            ))}
          </span>
          <span className={classes.genres}>
            {movieData.genreIds.map((id, index) => (
              <Typography className={classes.genre} key={index}>
                {getGenreDescFromId(id)}
              </Typography>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(MovieDetail);
