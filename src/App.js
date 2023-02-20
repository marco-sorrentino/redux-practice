import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardList from "./component/CardList";
import { Container, Row, Col } from "react-bootstrap";
import CardDetails from "./component/CardDetails";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={3}>
            <CardList />
          </Col>
          <Col>
            <CardDetails />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
