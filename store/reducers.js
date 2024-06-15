import { combineReducers } from 'redux'
import {
  ADVERTS_CREATED,
  ADVERTS_LOADED,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from './actionTypes'

export const defaultState = {
  auth: false,
  adverts: [],
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
      return {
        ...state,
        adverts: action.payload,
      }
    case ADVERTS_CREATED:
      return {
        ...state,
        adverts: [...state.adverts, action.payload],
      }
    default:
      return state
  }
}

const reducer = combineReducers({ auth, adverts })

export default reducer
