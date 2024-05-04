import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import storage from './Utils/storage'
import { setAuthorizationHeader } from './api/client'
import { AuthContextProvider } from './Pages/auth/context'
import { BrowserRouter } from 'react-router-dom'

const accessToken = storage.get('auth')
if (accessToken) setAuthorizationHeader(accessToken)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider isDefaultLogged={!!accessToken}>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
