// Setto stato iniziale
const initialState = {
  product: {
    content: [],
  },
};

// Creo funzione reducer che legge le azioni(dispatch)
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_DETAIL":
      return {
        // Copio prima tutto l'oggetto e ne creo uno nuovo passandogli i nuovi contenuti
        ...state,
        product: {
          ...state.product,
          content: [...state.product.content, action.payload],
        },
      };
    case "REMOVE_FROM_DETAIL":
      return {
        ...state,
        product: {
          ...state.product,
          // Funzione per rimuovere un qualcosa da un array
          content: state.product.content.filter((el) => el !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
