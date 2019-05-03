import member from './member';
import users from './users';
import visitDraft from './visitDraft';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  member,
  users,
  visitDraft
};
