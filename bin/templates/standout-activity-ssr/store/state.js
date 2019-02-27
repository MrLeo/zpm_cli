import Cookie from 'js-cookie'

const userInfo = Cookie('userInfo') || { uid: '' }

export default {
  uid: userInfo.uid,
  userInfo,
  atAndRt: {
    at: Cookie('at'),
    rt: Cookie('rt')
  }
}
