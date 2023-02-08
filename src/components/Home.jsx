import { Row, Container, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className={"justify-content-center mt-5"}>
        <Col xs={12} md={6}>
          <div>HOME PAGE</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
