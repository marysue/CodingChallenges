// libs
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// components
import { withStyles, Modal } from '@material-ui/core';
import Header from '@app/components/Header';
import FeaturedMovies from '@app/components/FeaturedMovies';
import SearchResults from '@app/components/SearchResults';
import MovieDetail from '@app/components/MovieDetail';
import Footer from '@app/components/Footer';

// modules
import { immerHistory } from '@app/modules/store';
import { selectSelectedMovieID } from '@app/modules/selectors';
import { SET_SELECTED_MOVIE_ID } from '@app/modules/actions';

// assets
import bgImage from '@app/assets/moviebg.jpg';

// util
import buildAction from '@app/util/buildAction';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${bgImage})`,
  },
  content: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    padding: '3.75rem 12.5rem',
  },
  body: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    backgroundColor: theme.palette.app.gray,
  },
});

const MainLayout = props => {
  const { classes } = props;
  const dispatch = useDispatch();

  const selectedMovieID = useSelector(selectSelectedMovieID);

  const handleModalClose = () => {
    dispatch(buildAction(SET_SELECTED_MOVIE_ID, null));
  };

  return (
    <div className={classes.root}>
      <Router history={immerHistory}>
        <div className={classes.content}>
          <Header />

          <div className={classes.body}>
            <Switch>
              <Route path='/search' component={SearchResults} />
              <Route path='/' exact component={FeaturedMovies} />
              <Redirect from='*' to='/' />
            </Switch>
          </div>

          <Modal
            open={Boolean(selectedMovieID)}
            onClose={handleModalClose}
            disableBackdropClick
          >
            <div style={{ outline: 'none' }}>
              <MovieDetail
                id={selectedMovieID}
                handleClose={handleModalClose}
              />
            </div>
          </Modal>

          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default withStyles(styles)(MainLayout);
