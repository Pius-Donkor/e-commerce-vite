/* eslint-disable no-case-declarations */
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        const updatedState = { ...state, cartItems: updatedCartItems };
        localStorage.setItem("cart", JSON.stringify(updatedState));
        return updatedState;
      } else {
        const updatedState = {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
        localStorage.setItem("cart", JSON.stringify(updatedState));
        return updatedState;
      }

    case "REMOVE_FROM_CART":
      console.log("in cart", action.payload.id);
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      const updatedState = { ...state, cartItems: filteredCartItems };
      console.log(filteredCartItems, updatedState);
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;

    case "UPDATE_QUANTITY":
      console.log("quantity", action.payload.id, action.payload.quantity);
      const updatedItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      const newState = { ...state, cartItems: updatedItems };
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    case "CLEAR_CART":
      localStorage.removeItem("cart");
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

// Action Creator for adding an item to the cart
export function addCartItem(cartItem) {
  return { type: "ADD_TO_CART", payload: cartItem };
}

// Action Creator for removing an item from the cart
export function removeCartItem(id) {
  return { type: "REMOVE_FROM_CART", payload: { id } };
}

// Action Creator for updating the quantity of an item in the cart
export function updateCartItemQuantity(id, quantity) {
  return {
    type: "UPDATE_QUANTITY",
    payload: { id, quantity },
  };
}

// Action Creator for clearing the entire cart
export function clearCart() {
  return { type: "CLEAR_CART" };
}

export default cartReducer;
