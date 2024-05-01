import { useEffect, useState } from 'react'
import styles from './AdvertsPage.module.css'

import { getAdverts } from './service'

function AdvertsPage() {
  const [adverts, setAdverts] = useState([])

  useEffect(() => {
    getAdverts().then((adverts) => setAdverts(adverts))
  }, [])

  return (
    <div className={styles.adverts}>
      <ul>{adverts && adverts.map((advert) => <li key={advert.id}>{advert.title}</li>)}</ul>
    </div>
  )
}

export default AdvertsPage
