import { GetterTree, MutationTree, ActionTree } from 'vuex'

export const state = () => ({
  appWidth: <Number> 0
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setApplicationWidth (state: any, payload: Number) {
    state.appWidth = payload
  }
}

export const getters: GetterTree<RootState, RootState> = {
  getApplicationWidth (state: any): Number {
    return state.appWidth
  }
}

export const actions: ActionTree<RootState, RootState> = {}
