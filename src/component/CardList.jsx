import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const CardList = (props) => {
  //Inizializzo state
  const [products, setProducts] = useState();

  // Inizializzo component
  useEffect(() => {
    getData();
  }, []);

  // Faccio chiamata per salvare i dati
  const getData = async () => {
    try {
      let res = await fetch("https://dummyjson.com/products");

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        const prodotti = data.products;
        //Setto i dati trovati dalla chiamata e li salvo nello stato in modo tale da poterci lavorare
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
          //Richiamo la singola carta, la ciclo e passo come props l'intero oggetto, in modo tale da richiamare i dati voluti nella singleCard
          <SingleCard
            key={i}
            /* img={el.thumbnail}
            title={el.title}
            description={el.description}
            price={el.price} */
            el={el}
          />
        );
      })}
    </>
  );
};

export default CardList;
