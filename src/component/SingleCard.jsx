import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SingleCard = (props) => {
  const dispatch = useDispatch();
  // creo la card singola
  // Riga 16 creo dispatch(azione) e gli passo come payload(argomento) l'intero oggetto

  return (
    <Card className="mt-5">
      <Card.Img variant="top" id="image" src={props.el.thumbnail} />
      <Card.Body>
        <Card.Title className="text-truncate">{props.el.title}</Card.Title>
        <Card.Text className="text-truncate">{props.el.description}</Card.Text>
        <Card.Text>{props.el.price} $</Card.Text>
        <Button
          onClick={() =>
            dispatch({
              type: "VIEW_DETAIL",
              payload: props.el,
            })
          }
          variant="primary"
        >
          View Detail
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
