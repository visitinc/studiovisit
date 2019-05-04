export default function userReducer(state = {}, action) {
  switch (action.type) {
    case 'USER_LOGIN': {
      if (action.data) {
        const {
          access_token: accessToken,
          expires_in: expiresIn,
          refresh_token: refreshToken,
          scope,
          token_type: tokenType,
          username
        } = action.data;
        return {
          ...state,
          accessToken,
          expiresIn,
          refreshToken,
          scope,
          tokenType,
          username
        };
      }
      return {};
    }
    case 'USER_DETAILS_UPDATE': {
      if (action.data) {
        return {
          ...state,
          firstName: action.data.firstName,
          lastName: action.data.lastName,
          signedUp: action.data.signedUp,
          role: action.data.role,
        };
      }
      return {};
    }
    case 'USER_RESET': {
      return {};
    }
    default:
      return state;
  }
}
