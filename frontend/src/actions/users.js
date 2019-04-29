/**
  * Get Users
  */
export function getUsers() {
  return dispatch => new Promise((resolve, reject) =>
    resolve(dispatch({ type: 'USERS_REPLACE', data: [] }))
    .catch(reject)).catch((err) => { throw err.message; });
}
