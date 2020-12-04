import kegListVisibleReducer from '../../reducers/keg-list-visible-on-page-reducer';

describe("kegListVisibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(kegListVisibleReducer(true, { type: null })).toEqual(true);
  });
  test('Should toggle keg list visibility state to true', () => {
    expect(kegListVisibleReducer(true, { type: 'TOGGLE_KEG_LIST' })).toEqual(false);
  });
});