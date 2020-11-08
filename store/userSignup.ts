import { GetterTree, MutationTree } from 'vuex'

export const state = () => ({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setUsername (state: any, payload: String) {
    state.username = payload
  },
  setEmail (state: any, payload: String) {
    state.email = payload
  },
  setPassword (state: any, payload: String) {
    state.password = payload
  },
  setConfirmPassword (state: any, payload: String) {
    state.confirmPassword = payload
  }
}

export const getters: GetterTree<RootState, RootState> = {
  getApplicationWidth (state: any): Number {
    return state.appWidth
  }
}
