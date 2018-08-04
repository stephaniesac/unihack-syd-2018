import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles/withStyles';

import { Map } from '../Map';

export const MapPage = withStyles({
  mapContainer: {
    display: 'flex'
  }
})(class extends Component {
  render() {
    return (
      <div className={this.props.classes.mapContainer}>
        <Map/>
      </div>
    )
  }
});