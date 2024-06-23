import { getAdverts } from '../Pages/adverts/service'
import { login } from '../Pages/auth/service'
import {
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  AUTH_LOGOUT,
  ADVERTS_LOADED_PENDING,
  ADVERTS_LOADED_FULFILLED,
  ADVERTS_LOADED_REJECTED,
  ADVERTS_CREATED,
  TAGS_LOADED,
  UI_RESET_ERROR,
} from './actionTypes'
import { areAdvertsLoaded } from './selectors'

export const authLoginPending = () => ({
  type: AUTH_LOGIN_PENDING,
})

export const authLoginFulfilled = () => ({
  type: AUTH_LOGIN_FULFILLED,
})

export const authLoginRejected = (error) => ({
  type: AUTH_LOGIN_REJECTED,
  payload: error,
  error: true,
})

export const authLogin = (credentials, rememberMe) => {
  return async function (dispatch) {
    try {
      dispatch(authLoginPending())
      await login(credentials, rememberMe)
      dispatch(authLoginFulfilled())
    } catch (error) {
      dispatch(authLoginRejected(error))
    }
  }
}

export const authLogout = () => ({
  type: AUTH_LOGOUT,
})

export const advertsLoadedPending = () => ({
  type: ADVERTS_LOADED_PENDING,
})
export const advertsLoadedFulfilled = (adverts) => ({
  type: ADVERTS_LOADED_FULFILLED,
  payload: adverts,
})
export const advertsLoadedRejected = (error) => ({
  type: ADVERTS_LOADED_REJECTED,
  payload: error,
  error: true,
})

export const loadAdverts = () => {
  return async function (dispatch, getState) {
    let tags = new Set()

    if (areAdvertsLoaded(getState())) {
      return
    }

    try {
      dispatch(advertsLoadedPending())
      getAdverts().then((adverts) => {
        dispatch(advertsLoadedFulfilled(adverts))
        adverts.map((advert) => advert.tags.map((tag) => tags.add(tag)))
        dispatch(tagsLoaded(Array.from(tags)))
      })
    } catch (error) {
      dispatch(advertsLoadedRejected(error))
      throw error
    }
  }
}

export const advertsCreated = (advert) => ({
  type: ADVERTS_CREATED,
  payload: advert,
})

export const tagsLoaded = (tags) => ({
  type: TAGS_LOADED,
  payload: tags,
})

export const uiResetError = () => ({
  type: UI_RESET_ERROR,
})
