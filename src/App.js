import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm'
import {
  Row, 
  Col,
  Navbar, 
  Container,
  Nav,
  NavDropdown,
  Image,
  Card,
  CardGroup,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home">Mélinda F. Lawyer</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#aboutme">About me</Nav.Link>
                <Nav.Link href="#practice">Practice</Nav.Link>
                <NavDropdown title="Contact me" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#phone">Phone number</NavDropdown.Item>
                  <NavDropdown.Item href="#mail">Mail</NavDropdown.Item>
                  <NavDropdown.Item href="#appointment">Appointment</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#sendmessage">Send me a message</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      <Navbar className="my-3"></Navbar>
      </header>


      <main>
      <Container>
        <Row>
          <Col sm={4} className="px-4 my-5">
            <Image 
            src="https://entiretools.com/placeholder/200x300/d5d5d5/584959/Picture of the lawyer"
            fluid
            rounded/>
          </Col>
          <Col sm={8} className="px-4 my-5">
            <Card id="aboutme" border="secondary" dark>
              <Card.Title>Mélinda F.</Card.Title>
              <Card.Text position="absolute">
              Lorem ipsum dolor sit amet. Cum sint cumque sit unde commodi qui quas mollitia sed laborum eveniet. Qui quidem cupiditate in quasi quia vel enim esse. Cum nobis error non neque minus aut cumque voluptatem nam esse nihil.

              Rem voluptas inventore eum illo eligendi et deserunt repellendus et totam eveniet et optio reprehenderit sed aliquid neque in esse dolores? Et dolorem saepe ut sunt officiis est fugit rerum aut quam obcaecati ad voluptatem voluptas. Non exercitationem ratione est enim nesciunt eos veritatis ipsa est earum quia qui debitis veniam est neque quisquam. In velit autem qui dolores sapiente quo tenetur quia qui esse culpa.

              Quo voluptas quae est explicabo facere cum deleniti voluptate sed rerum suscipit ut molestias magnam est commodi quia qui rerum magni? Et dolorum recusandae ut suscipit quaerat eos soluta tempore eos consequatur modi aut dolorem rerum quo sapiente totam in saepe commodi. Et atque architecto est quod ullam et explicabo quidem 33 suscipit reprehenderit sit quos minima in cumque iste. Eos esse illum est praesentium amet id ratione ullam et quae quas.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="px-4 my-3">
          <Card id="practice" className="bg-dark text-white">
            <Card.Title>Practice</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet. Cum sint cumque sit unde commodi qui quas mollitia sed laborum eveniet. Qui quidem cupiditate in quasi quia vel enim esse. Cum nobis error non neque minus aut cumque voluptatem nam esse nihil. Rem voluptas inventore eum illo eligendi et deserunt repellendus et totam eveniet et optio reprehenderit sed aliquid neque in esse dolores? Et dolorem saepe ut sunt officiis est fugit rerum aut quam obcaecati ad voluptatem voluptas. Non exercitationem ratione est enim nesciunt eos veritatis ipsa est earum quia qui debitis veniam est neque quisquam. In velit autem qui dolores sapiente quo tenetur quia qui esse culpa.
            </Card.Text>
          </Card>
        </Row>
      </Container>

      <Container>
        <Row >
        <CardGroup>
      <Card id="phone">
        <Card.Header>
          <Card.Title>Phone number</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">From the Monday to Friday, 9 am to 8 pm.</small>
        </Card.Footer>
      </Card>
      <Card id="mail">
        <Card.Header>
          <Card.Title>Mail</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Monday to Friday</small>
        </Card.Footer>
      </Card>
      <Card id="appointment">
        <Card.Header>
          <Card.Title>Appointment</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Monday, Tuesday, Friday : all the day.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Thank you to take an appointment with the secretary.</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </Row>
      </Container>

      <Container>
        <Row className="px-4 my-5">
          <Card id="sendmessage" className="bg-dark text-white">
            <div className="App">
              <ContactForm />
            </div>
          </Card>
        </Row>
      </Container>
      </main>


      <footer class="py-5 my-5 bg-dark">
        <div>
          <p class="m-0 text-center text-white">
            Copyright &copy; Barbara Queval 2023
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
