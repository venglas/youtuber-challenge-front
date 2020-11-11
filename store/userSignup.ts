import { MutationTree } from 'vuex'

export const state = () => ({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  verificationCode: '',
  verificationCodeApi: '',
  signupStep: 0
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
  },
  setVerificationCode (state: any, payload: string) {
    state.verificationCode = payload
  },
  setVerificationCodeApi (state: any, payload: string) {
    state.verificationCodeApi = payload
  },
  setSignupStep (state: any, payload: Number) {
    state.signupStep = payload
  }
}
