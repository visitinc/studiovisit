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
    default:
      return state;
  }
}
