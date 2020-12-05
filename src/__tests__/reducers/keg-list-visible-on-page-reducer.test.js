import kegListVisibleOnPageReducer from '../../reducers/keg-list-visible-on-page-reducer';

describe("kegListVisibleOnPageReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(kegListVisibleOnPageReducer(true, { type: null })).toEqual(true);
  });
  test('Should toggle keg list visibility state to true', () => {
    expect(kegListVisibleOnPageReducer(true, { type: 'TOGGLE_KEG_LIST' })).toEqual(false);
  });
});