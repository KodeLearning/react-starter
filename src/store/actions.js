import {
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  AUTH_LOGOUT,
  ADVERTS_LOADED_PENDING,
  ADVERTS_LOADED_FULFILLED,
  ADVERTS_LOADED_REJECTED,
  ADVERTS_CREATED_PENDING,
  ADVERTS_CREATED_FULFILLED,
  ADVERTS_CREATED_REJECTED,
  ADVERTS_DETAIL,
  TAGS_LOADED,
  UI_RESET_ERROR,
} from './actionTypes'
import { areAdvertsLoaded, getAdvertById } from './selectors'

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
  return async function (dispatch, _getState, { services: { auth }, router }) {
    try {
      dispatch(authLoginPending())
      await auth.login(credentials, rememberMe)
      dispatch(authLoginFulfilled())

      const to = router.state.location.state?.from || '/'
      router.navigate(to)
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
  return async function (dispatch, getState, { services: { adverts } }) {
    let tags = new Set()

    if (areAdvertsLoaded(getState())) {
      return
    }

    try {
      dispatch(advertsLoadedPending())
      adverts.getAdverts().then((adverts) => {
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

export const advertDetail = (advert) => ({
  type: ADVERTS_DETAIL,
  payload: advert,
})

export const loadAdvert = (advertId) => {
  return async function (dispatch, getState, { services: { adverts } }) {
    const state = getState()
    if (getAdvertById(advertId)(state)) {
      return
    }
    const advert = await adverts.getAdvert(advertId)
    console.log(advertDetail(advert))
    dispatch(advertDetail(advert))
  }
}

export const advertsCreatedPending = () => ({
  type: ADVERTS_CREATED_PENDING,
})
export const advertsCreatedFulfilled = (advert) => ({
  type: ADVERTS_CREATED_FULFILLED,
  payload: advert,
})
export const advertsCreatedRejected = (error) => ({
  type: ADVERTS_CREATED_REJECTED,
  payload: error,
  error: true,
})

export const createAdvert = (name, price, sale, tags, photo) => {
  return async function (
    dispatch,
    _getState,
    { services: { adverts }, router }
  ) {
    const { id } = await adverts.createAdvert({
      name,
      price,
      sale,
      tags,
      photo,
    })
    const createdAdvert = await adverts.getAdvert(id)
    router.navigate(`/adverts/${createdAdvert.id}`)

    return createdAdvert
  }
}

export const tagsLoaded = (tags) => ({
  type: TAGS_LOADED,
  payload: tags,
})

export const uiResetError = () => ({
  type: UI_RESET_ERROR,
})
