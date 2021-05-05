// libs
import React from 'react';
import { useSelector } from 'react-redux';

// components
import { withStyles, Typography } from '@material-ui/core';
import MovieCard from '@app/components/MovieCard';

// modules
import {
  selectSearchResultMovies,
  selectSearchResultPage,
  selectSearchResultPageSize,
} from '@app/modules/selectors';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    padding: '50px 80px 0 80px',
  },
  error: {
    height: '50vh',
    color: theme.palette.app.white,
    margin: 'auto',
  },
});

const SearchResults = props => {
  const { classes } = props;

  const movies = useSelector(selectSearchResultMovies);
  const page = useSelector(selectSearchResultPage);
  const pageSize = useSelector(selectSearchResultPageSize);

  return (
    <div className={classes.root}>
      {movies.length === 0 && (
        <div className={classes.error}>
          <Typography variant='h2'>No movies found</Typography>
        </div>
      )}
      {movies.slice(page * pageSize, (page * pageSize) + pageSize).map((movie, index) => (
        <MovieCard data={movie} key={index} />
      ))}
    </div>
  );
};

export default withStyles(styles)(SearchResults);
