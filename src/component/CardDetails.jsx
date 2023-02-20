import { Card, Button, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const CardDetails = (props) => {
  const seeDetail = useSelector((state) => state.product.content);
  const dispatch = useDispatch();
  console.log(seeDetail);

  return (
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
