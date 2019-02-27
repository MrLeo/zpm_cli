export default {
  // #region 异步设置uid
  async getUid ({ commit, dispatch, state }, uid) {
    commit('setUid', uid)
  }
  // #endregion
}
