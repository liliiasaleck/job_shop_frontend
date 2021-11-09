import {makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  mainLocation: {
    color: 'rgb(119, 119, 119)',
    border:'1px solid rgba(0, 0, 0, 0.23)',
    borderColor: '#E4E8F0',
    borderRadius: '40px',
    textTransform: 'capitalize',
    width: '10rem',
    marginLeft:'1rem',
    marginRight:'.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '10px',
      marginLeft:'.2rem',
      marginRight:'0',
      width: '8rem',

    },
    [theme.breakpoints.down('sm')]: {
      width: '8rem',
      fontSize: '9px',
    },
  },

  mainSelectedLocation: {
    width: '10rem',
    color: 'rgb(255,64,129)',
    border: '1px solid rgb(255,64,129)',
    borderRadius: '40px',
    marginLeft:'1rem',
    marginRight:'.5rem',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(255, 64, 129, 0.08)',
    [theme.breakpoints.down('md')]: {
      fontSize: '10px',
      marginLeft:'.2rem',
      marginRight:'0',
      width: '8rem',

    },
    [theme.breakpoints.down('sm')]: {
      width: '8rem',
      fontSize: '9px',
    },
  },
  menu: {
    marginTop: '4rem',
    boxSizing: 'inherit',
    height:'100vh'

  },
  container: {
    display: 'flex',
  },
  containerOtherLocation: {
    display: 'flex',
  },
  title: {
    margin: '10px 10px 10px 20px',
    color: '#99A1AB',
  },
  title2: {
    color: '#99A1AB',
  },
  city: {
    border:'1px solid rgba(0, 0, 0, 0.23)',
    borderColor: '#E4E8F0',
    borderRadius: '40px',
    marginLeft: '10px',
    color: '#99A1AB',
    [theme.breakpoints.down('md')]: {
      fontSize:'11px',
    },
  },
  remote:{
    [theme.breakpoints.down('md')]: {
      fontSize:'11px',
    },
  },
  remoteContainer:{
    border:'1px solid rgba(0, 0, 0, 0.23)',
    borderColor: '#E4E8F0',
    borderRadius: '40px',
    width: '5.5rem',
    margin: '20px 10px 10px 10px',
    color: '#99A1AB',
  },
  close: {
    marginLeft: '27rem',
    color: '#99A1AB',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '22rem',
    },
  },
  clear: {
    borderRadius: '40px',
    width: '18%',
    margin: '20px 10px 20px 10px',
    color: 'White',
    backgroundColor: '#ff4081',
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
      fontSize:'11px',
      width: '15%',
    },
  },
}));