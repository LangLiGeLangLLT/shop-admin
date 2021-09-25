// import { getItem, setItem } from '@/utils/storage'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { IMenu, IUserInfo } from '@/api/types/common'
// import { USER } from '@/utils/constants'
import createPersistedState from 'vuex-persistedstate'

const state = {
  isCollapse: false,
  isFullScreen: false,
  user: null as ({ token: string } & IUserInfo) | null,
  // user: getItem<{ token: string } & IUserInfo>(USER),
  menus: [] as IMenu[]
}

export type State = typeof state

export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
export const store = createStore<State>({
  plugins: [createPersistedState()],
  state,
  mutations: {
    setIsCollapse(state, payload) {
      state.isCollapse = payload
    },
    setIsFullScreen(state, payload) {
      state.isFullScreen = payload
    },
    setUser(state, payload) {
      state.user = payload
      // setItem(USER, state.user)
    },
    setMenus(state, payload) {
      state.menus = payload
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
