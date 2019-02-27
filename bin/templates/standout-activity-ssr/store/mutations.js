export default {
  // #region 设置 uid
  setUid (state, uid) {
    state.uid = uid
  },
  // #endregion

  // #region 设置当前登录用户信息
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
    state.uid = userInfo.uid
  },
  // #endregion

  // #region 设置 at & rt
  setAtAndRt (state, atAndRt) {
    state.atAndRt = atAndRt
  }
  // #endregion
}
