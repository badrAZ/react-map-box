import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import React from 'react'
import Row from 'react-bootstrap/Row'

import './App.css'
import Map from './common/Map'
import LeftBar from './bar/left'
import RightBar from './bar/right'

function App() {
  const ref = React.useRef(null)
  const map = Map(ref)

  return (
    <Container fluid>
      <Row className='mt-1'>
        <LeftBar map={map} />
        <Col>
          <div ref={ref} className='map-container'></div>
        </Col>
        <RightBar />
      </Row>
    </Container>
  )
}

export default App
