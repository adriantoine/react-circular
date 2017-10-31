import PropTypes from 'prop-types';
import {toRadians} from './utils';

const LineCirclePosition = props => {
  const radians = toRadians(props.angle);
  const sin = Math.sin(radians);
  const cos = Math.cos(radians);

  const x1 = sin * (props.radius + props.adjust) + props.radius;
  const y1 = cos * (props.radius + props.adjust) + props.radius;
  const x2 = sin * (props.radius + props.adjust + props.length) + props.radius;
  const y2 = cos * (props.radius + props.adjust + props.length) + props.radius;

  const render = props.render || props.children;
  return render({x1, y1, x2, y2});
};

LineCirclePosition.defaultProps = {
  adjust: 0,
  children: () => {},
};

LineCirclePosition.propTypes = {
  angle: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  adjust: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  render: PropTypes.func,
  children: PropTypes.func,
};

export default LineCirclePosition;
