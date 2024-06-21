import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  ADVERTS_CREATED,
  ADVERTS_LOADED,
  TAGS_LOADED,
} from './actionTypes'

export const defaultState = {
  auth: false,
  adverts: [],
  tags: [],
}

export function auth(state = defaultState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        auth: true,
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        auth: false,
      }
    default:
      return state
  }
}

export function adverts(state = defaultState, action) {
  switch (action.type) {
    case ADVERTS_LOADED:
      return action.payload
    case ADVERTS_CREATED:
      return {
        ...state,
        adverts: [...state, action.payload],
      }
    default:
      return state
  }
}

export function tags(state = defaultState, action) {
  switch (action.type) {
    case TAGS_LOADED:
      return action.payload
    default:
      return state
  }
}
