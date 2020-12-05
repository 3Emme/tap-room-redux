import formVisibleOnPageReducer from '../../reducers/form-visible-on-page-reducer';

describe("formVisibleOnPageReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleOnPageReducer(false, { type: null })).toEqual(false);
  });
  test('Should toggle form visibility state to true', () => {
    expect(formVisibleOnPageReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
  });
});