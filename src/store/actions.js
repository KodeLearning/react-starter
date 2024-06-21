import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  ADVERTS_CREATED,
  ADVERTS_LOADED,
  TAGS_LOADED,
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

export const tagsLoaded = (tags) => ({
  type: TAGS_LOADED,
  payload: tags,
})
