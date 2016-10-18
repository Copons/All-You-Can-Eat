import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import classNames from 'classnames';
import '../style/sushi.scss';

const sushiDragSource = {
  beginDrag(props) {
    props.grab(props.sushi.id);
    return props.sushi;
  },
  endDrag(props, monitor) {
    if (!monitor.getDropResult()) {
      const { x, y } = monitor.getSourceClientOffset();
      props.fumble(props.sushi.id, x, y);
    }
    return props.sushi;
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const Sushi = ({
  sushi,
  connectDragSource,
  isDragging,
}) => {
  const classes = classNames('sushi', { 'is-dragging': isDragging });
  let styles = {};
  if (sushi.x && sushi.y) {
    styles = {
      top: sushi.y,
      left: sushi.x,
    };
  }
  return connectDragSource(
    <div
      className={classes}
      style={styles}
    >
      <div className="fish"></div>
      <div className="rice">
        {sushi.state}<br />
        {sushi.x}, {sushi.y}
      </div>
    </div>
  );
};

Sushi.propTypes = {
  sushi: PropTypes.object.isRequired,
  grab: PropTypes.func.isRequired,
  drop: PropTypes.func.isRequired,
  fumble: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default DragSource('sushi', sushiDragSource, collect)(Sushi);
