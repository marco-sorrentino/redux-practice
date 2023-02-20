import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const CardList = (props) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch("https://dummyjson.com/products");

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        const prodotti = data.products;
        setProducts(prodotti);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {products?.map((el, i) => {
        return (
          <SingleCard
            key={i}
            img={el.thumbnail}
            title={el.title}
            description={el.description}
            price={el.price}
          />
        );
      })}
    </>
  );
};

export default CardList;
