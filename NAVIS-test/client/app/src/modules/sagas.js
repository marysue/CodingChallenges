import { all, takeLatest, put } from 'redux-saga/effects';
import * as Actions from '@app/modules/actions';
import { immerHistory } from '@app/modules/store';
import buildAction from '@app/util/buildAction';
import axios from 'axios';

function* fetchFeaturedMovies(action) {
  const response = yield axios.get('/api/movie/featured');
  yield put(buildAction(Actions.SET_FEATURED_MOVIES, response.data));
}

function* fetchSearchResults(action) {
  const { title, actor, genre } = action?.payload;
  const params = {};
  if (title) params.title = title;
  if (actor) params.actor = actor;
  if (typeof genre === 'number') params.genre = genre;
  const response = yield axios.get('/api/movie/search', { params });
  yield put(buildAction(Actions.SET_SEARCH_RESULTS_PAGE, 0));
  yield put(buildAction(Actions.SET_SEARCH_RESULTS_MOVIES, response.data));
  immerHistory.push('/search');
}

function* fetchGenres(action) {
  const response = yield axios.get('/api/genre');
  yield put(buildAction(Actions.SET_GENRES, response.data));
}

export default function* watchAll() {
  yield all([
    takeLatest(Actions.FETCH_FEATURED_MOVIES, fetchFeaturedMovies),
    takeLatest(Actions.FETCH_SEARCH_RESULTS, fetchSearchResults),
    takeLatest(Actions.FETCH_GENRES, fetchGenres),
  ]);
}
