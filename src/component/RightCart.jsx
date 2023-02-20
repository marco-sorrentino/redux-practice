import { Badge, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const RightCart = () => {
  const numberOfItem = useSelector((state) => state.product.content.length);
  const seeCart = useSelector((state) => state.product.content);
  console.log(numberOfItem);

  return (
    <div className="mt-5 ">
      <div className="ms-2 me-auto fw-bold">
        <p>Cart item: {numberOfItem}</p>
      </div>
      {seeCart.map((el) => {
        return (
          <ListGroup.Item
            key={el.id}
            as="li"
            className="d-flex justify-content-between align-items-start mt-3"
          >
            <div className="ms-2 me-auto">{el.title}</div>
            <Badge bg="dark p-2" pill>
              {el.price} $
            </Badge>
          </ListGroup.Item>
        );
      })}
    </div>
  );
};

export default RightCart;
