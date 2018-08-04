import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import SliderImg from '../img/commute.jpg';

export const HomePage = withStyles({
  slider: {
    objectFit: 'cover',
    objectPosition: 'center',
    maxHeight: '40vh',
    width: '100%'
  },
  slogan: {
    textAlign: 'center',
    paddingTop: '15px',
    fontFamily: 'waukegan',
    fontSize:'4.5rem'
  }
})(class HomePage extends Component {
  render() {
    return (
      <div>
        <img src={SliderImg} className={this.props.classes.slider}/>
        <div className={this.props.classes.slogan}>
          COMMUNITY SAFETY
          <h2 styles={{paddingLeft:'17vw'}}>
            Our First Priority
          </h2>
        </div>
      </div>
    )
  }
});
