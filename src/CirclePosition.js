import PropTypes from 'prop-types';
import {toRadians} from './utils';

const CirclePosition = props => {
  const radians = toRadians(props.angle);
  const x = Math.sin(radians) * (props.radius + props.adjust) + props.radius;
  const y = Math.cos(radians) * (props.radius + props.adjust) + props.radius;

  const render = props.render || props.children;
  return render({x, y});
};

CirclePosition.defaultProps = {
  adjust: 0,
  children: () => {},
};

CirclePosition.propTypes = {
  angle: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  adjust: PropTypes.number.isRequired,
  render: PropTypes.func,
  children: PropTypes.func,
};

export default CirclePosition;
