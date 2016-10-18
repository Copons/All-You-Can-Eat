import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sushi from './Sushi';
import * as sushiService from '../services/sushiService';
import '../style/kaiten.scss';

const Kaiten = ({ sushiList, sushiActions }) =>
  <div className="kaiten">
    { sushiList.map(sushi =>
      <Sushi
        key={sushi.id}
        sushi={sushi}
        grab={sushiActions.grabSushi}
        drop={sushiActions.dropSushi}
        fumble={sushiActions.fumbleSushi}
      />
    )}
  </div>;

Kaiten.propTypes = {
  sushiList: PropTypes.array.isRequired,
  sushiActions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  sushiList: state.sushi,
});

const mapDispatchToProps = dispatch => ({
  sushiActions: bindActionCreators(sushiService, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Kaiten);
