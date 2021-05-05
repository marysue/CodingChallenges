// libs
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { immerHistory } from '@app/modules/store';

// components
import {
  withStyles,
  TextField,
  Select,
  Button,
  MenuItem,
} from '@material-ui/core';

// modules
import buildAction from '@app/util/buildAction';
import {
  FETCH_SEARCH_RESULTS,
  FETCH_GENRES,
} from '@app/modules/actions';
import { selectGenres } from '@app/modules/selectors';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  input: {
    backgroundColor: theme.palette.app.white,
    marginRight: 8,
    borderRadius: theme.shape.borderRadius,
    minWidth: 100,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    '& .MuiSelect-root': {
      '&:focus': {
        backgroundColor: theme.palette.app.white,
      },
    },
    '& .MuiMenu-paper': {
      borderRadius: '0 0 8px 8px',
    },
  },
  searchButton: {
    backgroundColor: theme.palette.app.yellow,
    color: theme.palette.app.darkGray,
    textTransform: 'none',
    fontWeight: 800,
    height: 48,
    padding: 'auto 20px',
    '&:hover': {
      backgroundColor: theme.palette.app.yellow,
    },
  },
  inputLabel: {
    color: '#ABABAB',
  },
});

const SearchInput = props => {
  const { classes } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buildAction(FETCH_GENRES));
  }, []);

  const genres = useSelector(selectGenres);

  const [title, setTitle] = useState('');
  const [actor, setActor] = useState('');
  const [genre, setGenre] = useState('Genre');

  const handleTitleChange = e => setTitle(e.currentTarget.value);
  const handleActorChange = e => setActor(e.currentTarget.value);
  const handleGenreChange = e => setGenre(e.target.value);

  const handleSearch = () => {
    if (title || actor || typeof genre === 'number') {
      dispatch(buildAction(FETCH_SEARCH_RESULTS, {
        title,
        actor,
        genre,
      }));
    }
  };

  const searchWhenEnterPressed = e => {
    if (e.key === 'Enter' || e.which === 13) {
      handleSearch();
    }
  };

  return (
    <div className={classes.root}>
      <TextField
        placeholder='Title'
        value={title}
        onChange={handleTitleChange}
        InputProps={{ disableUnderline: true }}
        className={classes.input}
        onKeyPress={searchWhenEnterPressed}
      />

      <TextField
        placeholder='Actor'
        value={actor}
        onChange={handleActorChange}
        InputProps={{ disableUnderline: true }}
        className={classes.input}
        onKeyPress={searchWhenEnterPressed}
      />

      <Select
        value={genre}
        onChange={handleGenreChange}
        disableUnderline
        className={classes.input}
        MenuProps={{
          getContentAnchorEl: null,
          disablePortal: true,
          elevation: 0,
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          transformOrigin: { vertical: 'top', horizontal: 'center' },
        }}
      >
        <MenuItem value='Genre'>
          <span className={classes.inputLabel}>Genre</span>
        </MenuItem>
        {genres.map((genre, index) => (
          <MenuItem value={genre.id} key={index}>
            {genre.description}
          </MenuItem>
        ))}
      </Select>

      <Button onClick={handleSearch} className={classes.searchButton}>
        Search
      </Button>
    </div>
  );
};

export default withStyles(styles)(SearchInput);
