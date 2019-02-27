// let types = {
//   ...(r => {
//     // 去中心化
//     let sourceMap = {
//       mutations: {},
//       actions: {}
//     }
//     // eslint-disable-next-line
//     let res = r.keys().map(key => {
//       let rKey = r(key)
//       let newKey = key.replace(/^\.\/modules\/(.*)\.js$/g, '$1')
//       let namespaced = rKey.default.namespaced ? `${newKey}/` : ''
//       sourceMap.mutations[newKey] = {}
//       sourceMap.actions[newKey] = {}
//       for (let key in rKey.default.mutations) {
//         sourceMap.mutations[newKey][key] = `${namespaced}${key}`
//       }
//       for (let key in rKey.default.actions) {
//         sourceMap.actions[newKey][key] = `${namespaced}${key}`
//       }
//       return rKey.default
//     })
//     return sourceMap
//   })(require.context('./', true, /^\.\/modules\/\w+\.js$/))
// }
