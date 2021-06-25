import PropTypes from 'react-proptypes'

export default function AddTextToIcon({ icon, text }) {
  return (
    <div className='mt-1 mb-1' style={{ position: 'relative' }}>
      {icon}
      <span style={{ position: 'absolute', top: 0, left: 0, right: 0, bot: 0 }}>
        {text}
      </span>
    </div>
  )
}

AddTextToIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
}
