import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

export default function RightBar() {
  const [displayed, setDisplayed] = React.useState(false)

  const icon = React.useMemo(() => {
    return (
      <Button
        onClick={() => setDisplayed(!displayed)}
        className='float-md-right mr-1'
        variant='secondary'
      >
        <AiOutlineMenu size={32} />
      </Button>
    )
  }, [displayed])

  return displayed ? (
    <Col md='3'>
      <Card>
        <Card.Header>
          <h3>Data {icon}</h3>
        </Card.Header>
        <Card.Body>ok</Card.Body>
      </Card>
    </Col>
  ) : (
    <div>{icon}</div>
  )
}
