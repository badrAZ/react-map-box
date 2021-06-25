import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Proptypes from 'react-proptypes'
import React from 'react'
import { SketchPicker } from 'react-color'

export default function PickColor({ onChange, value }) {
  const [displayedModal, setDisplayedModal] = React.useState(false)

  const toggleModal = React.useCallback(() => {
    setDisplayedModal(!displayedModal)
  }, [displayedModal])
  const onColorChange = React.useCallback(
    color => {
      onChange(color.hex)
    },
    [onChange]
  )

  return (
    <span>
      <Button variant='secondary' onClick={toggleModal}>
        <strong>Pick Color</strong>
      </Button>

      <Modal show={displayedModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Choose color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SketchPicker color={value} onChange={onColorChange} />
        </Modal.Body>
      </Modal>
    </span>
  )
}

PickColor.propTypes = {
  onChange: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
}
