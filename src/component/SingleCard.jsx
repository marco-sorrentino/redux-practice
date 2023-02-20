import { Card, Button } from "react-bootstrap";

const SingleCard = (props) => {
  return (
    <Card className="mt-5">
      <Card.Img variant="top" id="image" src={props.img} />
      <Card.Body>
        <Card.Title className="text-truncate">{props.title}</Card.Title>
        <Card.Text className="text-truncate">{props.description}</Card.Text>
        <Card.Text>{props.price} $</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
