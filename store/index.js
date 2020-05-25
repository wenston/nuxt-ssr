export const state = () => ({
  token: ''
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let cookie = req.headers.cookie
    console.log(cookie)
  },
  SET_TOKEN({ commit }, token) {
    commit('setToken', token)
  }
}
