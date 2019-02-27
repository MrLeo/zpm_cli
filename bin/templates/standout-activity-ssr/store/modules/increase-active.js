// #region 获取url中参数
export function getQueryVariable(variable) {
  const query = window.location.href.split('?')[1]
  if (!query) {
    throw new Error(`URL无参数`)
  }
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1])
    }
  }
  throw new Error(`Missing parameter: ${variable}`)
}
// #endregion

export default {
  namespaced: true,

  state: {
    eventName: getQueryVariable('growth_batch_id') || '', // 批次
    mid: getQueryVariable('mid') || '', // 手机号
    job: getQueryVariable('job') || '', // 职位名称
    company: getQueryVariable('company') || '', // 公司名称
    companyNum: getQueryVariable('companyNum') || '', // 公司编号
    jobNum: getQueryVariable('jobNum') || '', // 职位编号
    industry: getQueryVariable('industry') || '', // 行业编号
    ut: getQueryVariable('ut') || '1', // 用户类型 ： 1 increase 拉新， 2 active 激活
    to: getQueryVariable('to') || '1', // 登录成功后跳转的页面：  1 m 站首页 ，   2 下载页
    famous: getQueryVariable('famous') || '2', // 1 名企    2 非名企
    salary: getQueryVariable('maxPay'), // 最大薪资
    gender: getQueryVariable('gender') || '1', // 性别：1 男  2女
    orderId: getQueryVariable('orderId') || '',
    mobile: '', // 显示的手机
  },

  getters: {
    // ut: (state, getters, rootState) => (~~state.ut === 1 ? 'increase' : 'active')
  },

  mutations: {
    setState(state, data) {
      state.eventName = data.growth_batch_id || ''

      state.mid = data.mid || ''
      state.company = data.company || ''
      state.mobile = data.mobile || ''
      state.companyNum = data.companyNum || ''

      state.job = data.job || ''
      state.jobNum = data.jobNum || ''
      state.industry = data.industry || ''
      state.ut = data.ut || '1'
      state.to = data.to || '1'
      state.famous = data.famous || '1'
      state.salary = data.maxPay || ''
      state.gender = data.gender || '1'
    },
  },

  actions: {
    getState({ commit }) {
      commit('setState', {})
    },
  },
}
