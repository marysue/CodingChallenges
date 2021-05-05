import { createSelector } from 'reselect';

const app = state => state.app;

export const selectGenres = createSelector(app, app => app.genres);

export const selectFeaturedMovies = createSelector(app, app => app.featuredMovies);

export const selectSearchResultMovies = createSelector(app, app => app.search.movies);
export const selectSearchResultPage = createSelector(app, app => app.search.page);
export const selectSearchResultPageSize = createSelector(app, app => app.search.pageSize);

export const selectSelectedMovieID = createSelector(app, app => app.selectedMovieID);
