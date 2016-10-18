import React, { PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import classNames from 'classnames';
import '../style/plate.scss';

const plateDropTarget = {
  drop(props, monitor) {
    const sushi = monitor.getItem();
    const { x, y } = monitor.getSourceClientOffset();
    props.drop(sushi.id, x, y);
    return sushi;
  },
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
});

const Plate = ({
  connectDropTarget,
  isOver,
}) => {
  const classes = classNames('plate', { 'is-over': isOver });
  return connectDropTarget(
    <div className={classes}></div>
  );
};

Plate.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
};

export default DropTarget('sushi', plateDropTarget, collect)(Plate);
