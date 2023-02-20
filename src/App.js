import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardList from "./component/CardList";
import { Container, Row, Col } from "react-bootstrap";
import CardDetails from "./component/CardDetails";
import RightCart from "./component/RightCart";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={3}>
            <CardList />
          </Col>
          <Col md={6}>
            <CardDetails />
          </Col>
          <Col>
            <RightCart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
