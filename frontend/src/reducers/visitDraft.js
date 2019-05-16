import Store from '../store/visitDraft';

export const initialState = Store.visitDraft;

export default function visitDraftReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_VISIT_DRAFT_TARGET_USER_ID': {
      return {
        ...state,
        targetUserId: action.targetUserId,
      };
    }
    case 'SET_FAV_TIME': {
      return {
        ...state,
        favTime: action.selected,
      };
    }
    default:
      return state;
  }
}
