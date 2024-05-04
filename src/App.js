import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import AdvertsPage from './Pages/adverts/AdvertsPage'
import NewAdvertPage from './Pages/adverts/NewAdvertPage'
import LoginPage from './Pages/auth/LoginPage'
import AdvertPage from './Pages/adverts/AdvertPage'
import RequireAuth from './Pages/auth/components/RequireAuth'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adverts" element={<Outlet />}>
        <Route
          index
          element={
            <RequireAuth>
              <AdvertsPage />
            </RequireAuth>
          }
        />
        <Route
          path=":advertId"
          element={
            <RequireAuth>
              <AdvertPage />
            </RequireAuth>
          }
        />
        <Route
          path="new"
          element={
            <RequireAuth>
              <NewAdvertPage />
            </RequireAuth>
          }
        />
      </Route>

      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="/404" element={<div>404 | Not found</div>} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}

export default App
