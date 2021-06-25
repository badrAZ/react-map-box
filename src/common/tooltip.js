import Overlay from 'react-bootstrap/OverlayTrigger'
import T from 'react-bootstrap/Tooltip'
import PropTypes from 'react-proptypes'

export default function Tooltip({ content, children }) {
  return (
    <Overlay placement='top' overlay={<T id='tooltip-top'>{content}</T>}>
      {children}
    </Overlay>
  )
}

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
}
