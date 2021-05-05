// libs
import React from 'react';

// components
import { withStyles } from '@material-ui/core';
import Logo from '@app/components/Logo';
import SearchInput from '@app/components/SearchInput';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 120,
    padding: '1rem 5rem',
    backgroundColor: theme.palette.app.darkGray,
    borderRadius: '8px 8px 0 0'
  },
});

const Header = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Logo />
      <SearchInput />
    </div>
  );
};

export default withStyles(styles)(Header);
