import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import Marker from './Marker'

export default function LeftBar({ map }) {
  const [displayed, setDisplayed] = React.useState(false)
  const [marker, setMarker] = React.useState()

  const clean = React.useCallback(() => {
    setMarker(undefined)
  }, [])

  React.useEffect(() => {
    const onClick = e => {
      if (marker !== undefined) {
        new mapboxgl.Marker(marker).setLngLat(e.lngLat).addTo(map)
        clean()
        map.off('click', onClick)
      }
    }
    map?.on('click', onClick)
  }, [map, marker, clean])

  const icon = React.useMemo(
    () => (
      <Button
        onClick={() => setDisplayed(!displayed)}
        className='float-md-right ml-1'
        variant='secondary'
      >
        <AiOutlineMenu size={32} />
      </Button>
    ),

    [displayed]
  )

  return displayed ? (
    <Col md='3'>
      <Card>
        <Card.Header>
          <h3>Resources {icon}</h3>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              <Marker marker={marker} setMarker={setMarker} />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  ) : (
    <div>{icon}</div>
  )
}
