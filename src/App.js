/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  items: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 300,
  },
}));


function Section({ path, text, route = '/' }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4}>
      <Paper className={classes.items}>
        <img src={require(`${path}`)} alt={text} width="100%" height="100%" />
        <Link to={route}><button type="button" className={classes.button}>{text}</button></Link>
      </Paper>
    </Grid>
  );
}

Section.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={7} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Paper className={classes.paper}>Todo List</Paper>
          </Grid>
          <Section path="./assets/manage.png" text="Manage" route="/manage" />
          <Section path="./assets/report.png" text="Reports" route="/reports" />
        </Grid>
      </div>
    </div>
  );
}

export default App;
