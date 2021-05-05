import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  genres: [],
  search: {
    movies: [],
    page: 0,
    pageSize: 12,
  },
  featuredMovies: [],
  selectedMovieID: null,
};

const reducer = handleActions(
  {
    [Actions.SET_FEATURED_MOVIES]: (state, action) => {
      state.featuredMovies = action?.payload;
      return state;
    },
    [Actions.SET_SEARCH_RESULTS_MOVIES]: (state, action) => {
      state.search.movies = action?.payload;
      return state;
    },
    [Actions.SET_SELECTED_MOVIE_ID]: (state, action) => {
      state.selectedMovieID = action?.payload;
    },
    [Actions.SET_SEARCH_RESULTS_PAGE]: (state, action) => {
      state.search.page = action?.payload;
      return state;
    },
    [Actions.SET_GENRES]: (state, action) => {
      state.genres = action?.payload;
      return state;
    },
  },
  initialState
);

export default reducer;
