export default (state = null, action) => {
  const { name, brand, flavor, price, quantity, id } = action;
  switch (action.type) {
  case 'SELECT_KEG':
    return {
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        quantity: quantity,
        id: id
      };
  case 'DESELECT_KEG':
    return null;
  default:
    return state;
  }
};