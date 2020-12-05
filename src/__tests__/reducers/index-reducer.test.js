import rootReducer from '../../reducers/index';
import editingReducer from '../../reducers/editing-reducer';
import formVisibleOnPageReducer from '../../reducers/form-visible-on-page-reducer';
import kegListVisibleOnPageReducer from '../../reducers/keg-list-visible-on-page-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import masterKegListReducer from '../../reducers/master-keg-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe ("rootReducer", () => {

  let action;
  [{name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" }]
  const currentState = {
    1: {name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" },
    2: {name: "Main Bar 2", brand: "Quality Booch", flavor: "Lemon", price: "9", quantity: "124", id:"2" }
  }

  const kegData = {name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" };

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      kegListVisibleOnPage: true,
      formVisibleOnPage: false,
      masterKegList: [{name: "Main Bar 1", brand: "Quality Booch", flavor: "Persimmon", price: "9", quantity: "124", id:"1" }],
      selectedKeg: null,
      editing: false,
    });
  });

  test('Confirm TOGGLE_EDITING works for editingReducer', () => {
    expect(editingReducer(false, { type: 'TOGGLE_EDITING' })).toEqual(true);
  });

  test('Should toggle form visibility state to true', () => {
    expect(formVisibleOnPageReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
  });

  test('Should toggle keg list visibility state to true', () => {
    expect(kegListVisibleOnPageReducer(true, { type: 'TOGGLE_KEG_LIST' })).toEqual(false);
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

  test('Should successfully update a keg in masterKegList', () => {
    const { name, brand, flavor, price, quantity, id } = kegData;
    action = {
      type: 'UPDATE_KEG',
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

  test('Should successfully reduce the quantity of a keg in masterKegList', () => {
    const { name, brand, flavor, price, quantity, id } = kegData;
    action = {
      type: 'POUR_KEG',
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
        quantity: quantity-1,
        id: id
      }
    });
  });
});
