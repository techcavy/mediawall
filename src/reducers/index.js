export default function mainReducer(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return {
        title: action.title
      };
    default:
      return state;
  }
}
