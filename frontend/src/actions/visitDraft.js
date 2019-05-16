export const updatePractice = pid => {
  return dispatch => new Promise((resolve, reject) =>
    resolve(dispatch({ type: 'USERS_REPLACE', data: [] }))
    .catch(reject))
      .catch((err) => { throw err.message; });
}

export const setVisitDraftTargetUserId = targetUserId => ({
  type: 'SET_VISIT_DRAFT_TARGET_USER_ID',
  targetUserId,
})

export const setFavTime = selected => ({
    type: 'SET_FAV_TIME',
    selected
})


