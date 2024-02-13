import {Container, Row,Col,Button, Alert,Breadcrumb,Card,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//reference : https://www.youtube.com/watch?v=8pKjULHzs0s
//Topic : React Bootstrap Tutorial
export default function TestBrootstrap20240213() {
    return (      
  <>
        <br/>
<br/>
        <Container >
        <Row>
        <Col md={8}>md=8</Col>
        <Col></Col>
        <Col md="auto">Col = auto</Col>
          </Row>        
        <Row>
        <Col md={8}>md=8</Col>
        <Col>Col = auto</Col>
          </Row>  
      <Row>
        
        <Col>1 of 3</Col>
        <Col md={6}>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col md={5}>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    <br/>
    <br/>
          <Container fluid>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId = "formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com"/>
                <Form.Text className="text-muted">
                    We'll never share your email address, trust us!
                </Form.Text>
                </Form.Group> 
              </Col>
              <Col md>
              <Form.Group controlId = "formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"/>
              
              </Form.Group> 

              </Col>
            </Row>
            <Button variant="secondary" type="submit">Login</Button>

              
          </Form>
          <Card className="mb-3" style = {{color:"#F00"}}>
            <Card.Img src="https://picsum.photos/200/50"/>
            <Card.Body>
              <Card.Title>
                Card Example 
              </Card.Title>
              <Card.Text>
                This is an example of react Bootstrap cards.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test 1</Breadcrumb.Item>
            <Breadcrumb.Item active>Test 2</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="success">This is a button</Alert>
          <Button>Test Button</Button>
          </Container>
          </>
    )
  }