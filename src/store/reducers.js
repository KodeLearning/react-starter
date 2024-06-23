import {
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGOUT,
  ADVERTS_CREATED,
  TAGS_LOADED,
  UI_RESET_ERROR,
  ADVERTS_LOADED_FULFILLED,
} from './actionTypes'

export const defaultState = {
  auth: false,
  adverts: {
    loaded: false,
    data: [],
  },
  tags: [],
  ui: {
    pending: false,
    error: null,
  },
}

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_FULFILLED:
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

export function ui(state = defaultState.ui, action) {
  if (action.error) {
    return { ...state, pending: false, error: action.payload }
  }

  if (action.type === UI_RESET_ERROR) {
    return { ...state, error: null }
  }

  if (action.type.endsWith('/pending')) {
    return { ...state, pending: true }
  }

  if (action.type.endsWith('/fulfilled')) {
    return { ...state, pending: false, error: null }
  }

  return state
}

export function adverts(state = defaultState.adverts, action) {
  switch (action.type) {
    case ADVERTS_LOADED_FULFILLED:
      return { ...state, loaded: true, data: action.payload }
    case ADVERTS_CREATED:
      return { ...state, data: [action.payload, ...state] }
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
