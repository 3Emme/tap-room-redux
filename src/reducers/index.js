import editingReducer from './editing-reducer';
import kegListVisibleOnPageReducer from './keg-list-visible-on-page-reducer';
import formVisibleOnPageReducer from './form-visible-on-page-reducer';
import selectedKegReducer from './selected-keg-reducer';
import masterKegListReducer from './master-keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  kegListVisibleOnPage: kegListVisibleOnPageReducer,
  formVisibleOnPage: formVisibleOnPageReducer,
  masterKegList: masterKegListReducer,
  selectedKeg: selectedKegReducer,
  editing: editingReducer,
});

export default rootReducer;