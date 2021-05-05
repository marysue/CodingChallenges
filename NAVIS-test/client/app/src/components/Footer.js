// libs
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

// components
import { withStyles, Typography, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// modules
import {
  selectSearchResultMovies,
  selectSearchResultPage,
  selectSearchResultPageSize,
} from '@app/modules/selectors';
import { SET_SEARCH_RESULTS_PAGE } from '@app/modules/actions';

// util
import buildAction from '@app/util/buildAction';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    backgroundColor: theme.palette.app.darkGray,
    borderRadius: '0 0 8px 8px',
  },
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    '& .MuiTypography-root': {
      color: '#B5BBBF',
      marginRight: 8,
    },
    '& .MuiIconButton-root': {
      padding: 4,
      color: '#B0B7BB',
      '&.Mui-disabled': {
        color: '#B0B7BB70',
      },
    },
  },
});

const Footer = props => {
  const { classes } = props;
  const dispatch = useDispatch();

  const movies = useSelector(selectSearchResultMovies);
  const page = useSelector(selectSearchResultPage);
  const pageSize = useSelector(selectSearchResultPageSize);
  const location = useLocation();

  const totalPages = Math.ceil(movies.length / pageSize);

  const incrementPage = e => {
    dispatch(buildAction(SET_SEARCH_RESULTS_PAGE, page + 1));
  };

  const decrementPage = e => {
    dispatch(buildAction(SET_SEARCH_RESULTS_PAGE, page - 1));
  };

  return (
    <div className={classes.root}>
      {location.pathname.startsWith('/search') && movies.length > 0 && (
        <div className={classes.pagination}>
          <Typography>Page {page + 1} of {totalPages}</Typography>
          <IconButton disableRipple onClick={decrementPage} disabled={page === 0}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton disableRipple onClick={incrementPage} disabled={page === totalPages - 1}>
            <ChevronRightIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(Footer);
