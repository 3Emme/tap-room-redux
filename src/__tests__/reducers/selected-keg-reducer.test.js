import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegListReducer', () => {

  let action;
  [{name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" }]
  const currentState = {
    1: {name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" },
    2: {name: "Main Bar 2", brand: "Quality Booch", flavor: "Lemon", price: "9", quantity: "124", id:"2" }
  }

  const kegData = {name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" };

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully update selected keg', () => {
    const { name, brand, flavor, price, quantity, id } = kegData;
    action = {
      type: 'SELECT_KEG',
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      quantity: quantity,
      id: id
    };
    expect(selectedKegReducer({}, action)).toEqual({
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      quantity: quantity,
      id: id
    });
  });
});