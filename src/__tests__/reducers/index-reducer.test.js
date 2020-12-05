import rootReducer from '../../reducers/index';
import editingReducer from '../../reducers/editing-reducer';
import formVisibleOnPageReducer from '../../reducers/form-visible-on-page-reducer';
import kegListVisibleOnPageReducer from '../../reducers/keg-list-visible-on-page-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import masterKegListReducer from '../../reducers/master-keg-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe ("rootReducer", () => {
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
});
