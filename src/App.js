/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

function App() {
  const classes = useStyles();

  function Section({ path, text }) {
    return (
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <img src={require(`${path}`)} alt={text} width="100%" height="100%" />
          <button type="button" className={classes.button}>{text}</button>
        </Paper>
      </Grid>
    );
  }

  Section.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4} justify="center" alignItems="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>Todo List</Paper>
        </Grid>
        <Section path="./assets/manage.png" text="Manage" />
        <Section path="./assets/report.png" text="Reports" />
      </Grid>
    </div>
  );
}

export default App;
