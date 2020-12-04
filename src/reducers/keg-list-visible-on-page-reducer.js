export default (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_KEG_LIST':
      return !state;
    default:
      return state;
    }
  };