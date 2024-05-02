import { useEffect, useState } from 'react'
import styles from './AdvertsPage.module.css'

import { getAdverts } from './service'
import { logout } from '../auth/service'

function AdvertsPage({ onLogout }) {
  const [adverts, setAdverts] = useState([])

  useEffect(() => {
    getAdverts().then((adverts) => setAdverts(adverts))
  }, [])

  const handleLogout = () => {
    logout()
    onLogout()
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <div className={styles.adverts}>
        <ul>
          {adverts &&
            adverts.map((advert) => <li key={advert.id}>{advert.title}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default AdvertsPage
