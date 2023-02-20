import { Card, Button, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const CardDetails = (props) => {
  // Vado a leggere ciò che c'è dentro lo state in modo tale da poterli mappare ed andare a generare le cards details
  const seeDetail = useSelector((state) => state.product.content);
  // Uso funzione dispatch in modo tale da poter eseguire un'azione
  const dispatch = useDispatch();
  console.log(seeDetail);

  return (
    // Mappo seeDetail e genero le cards details in base agli oggetti che ci sono.
    // Riga 23 creo un dispatch per poter eliminare al click del bottone le cards
    <>
      {seeDetail.map((el) => {
        return (
          <Card key={el.id} className="mt-5">
            <Card.Img id="image2" variant="top" src={el.images[2]} />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.description}</Card.Text>
              <Button variant="primary">Buy now</Button>
              <Button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_DETAIL",
                    payload: el,
                  })
                }
                className="ms-3"
                variant="danger"
              >
                Remove
              </Button>
              <Badge className="ms-3 p-2" bg="success">
                {el.price} $
              </Badge>
              <Badge className="ms-3 p-2" bg="success">
                {el.brand}
              </Badge>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default CardDetails;
