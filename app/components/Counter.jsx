import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Kaiten from './Kaiten';
import Plate from './Plate';
import * as sushiService from '../services/sushiService';

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <Plate
          drop={this.props.sushiActions.dropSushi}
        />
        <Kaiten />
      </div>
    );
  }
}

Counter.propTypes = {
  sushiActions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  sushiActions: bindActionCreators(sushiService, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(DragDropContext(HTML5Backend)(Counter));
