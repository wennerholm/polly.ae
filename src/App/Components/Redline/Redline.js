import React from 'react';
import classes from './Redline.css';

export default class Redline extends React.Component {
  render() {
    return(
      <div className={['row', classes.redlineRow].join(' ')}><div className={classes.redline}></div></div>
    );
  }
}