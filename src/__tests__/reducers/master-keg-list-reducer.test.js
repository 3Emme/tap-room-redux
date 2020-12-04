import masterKegListReducer from '../../reducers/master-keg-list-reducer';

describe('masterKegListReducer', () => {

  let action;
  [{name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" }]
  const currentState = {
    1: {name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" },
    2: {name: "Main Bar 2", brand: "Quality Booch", flavor: "Lemon", price: "9", quantity: "124", id:"2" }
  }

  const kegData = {name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" };

  test('Should return default state if no action type is recognized', () => {
    expect(masterKegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to masterKegList', () => {
    const { name, brand, flavor, price, quantity, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      quantity: quantity,
      id: id
    };
    expect(masterKegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(masterKegListReducer(currentState, action)).toEqual({
      2: {name: "Main Bar 2", brand: "Quality Booch", flavor: "Lemon", price: "9", quantity: "124", id:"2" }
    });
  });

});