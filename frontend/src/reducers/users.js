import Store from '../store/users';

export const initialState = Store;

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case 'USERS_REPLACE': {
      let users = [];

      // Pick out the props I need
      if (action.data) {
        users = data;
      }

      return {
        ...state,
        users,
      };
    }
    default:
      return state;
  }
}
