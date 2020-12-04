export default (state = [{name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" }], action) => {
  const { name, brand, flavor, price, quantity, id } = action;
  switch (action.type) {
  case 'ADD_KEG':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  case 'DELETE_KEG':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};