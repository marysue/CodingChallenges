// libs
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import { withStyles } from '@material-ui/core';
import MovieCard from '@app/components/MovieCard';

// modules
import { FETCH_FEATURED_MOVIES } from '@app/modules/actions';
import { selectFeaturedMovies } from '@app/modules/selectors';

// util
import buildAction from '@app/util/buildAction';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    padding: '50px 80px 0 80px',
  },
});

const FeaturedMovies = props => {
  const { classes } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buildAction(FETCH_FEATURED_MOVIES));
  }, []);

  const movies = useSelector(selectFeaturedMovies);

  return (
    <div className={classes.root}>
      {movies.map((movie, index) => (
        <MovieCard large data={movie} key={index} />
      ))}
    </div>
  );
};

export default withStyles(styles)(FeaturedMovies);
