import Store from '../store/users';

export const initialState = Store.users;

export default function userReducer(state = initialState, action) {
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
