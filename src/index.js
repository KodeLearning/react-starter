import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import storage from './Utils/storage'
import { setAuthorizationHeader } from './api/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/index'

const accessToken = storage.get('auth')
if (accessToken) setAuthorizationHeader(accessToken)

const router = createBrowserRouter([{ path: '*', element: <App /> }])
const store = configureStore({ auth: !!accessToken }, { router })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
