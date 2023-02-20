const initialState = {
  product: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_DETAIL":
      return {
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
          content: state.product.content.filter((el) => el !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
