import {
  ADVERTS_CREATED,
  ADVERTS_LOADED,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from './actionTypes'

export const authLogin = () => ({
  type: AUTH_LOGIN,
})

export const authLogout = () => ({
  type: AUTH_LOGOUT,
})

export const advertsLoaded = (adverts) => ({
  type: ADVERTS_LOADED,
  payload: adverts,
})

export const advertsCreated = (advert) => ({
  type: ADVERTS_CREATED,
  payload: advert,
})
