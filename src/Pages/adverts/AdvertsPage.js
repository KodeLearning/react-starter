import { useEffect, useState } from 'react'
import styles from './AdvertsPage.module.css'

import { getAdverts } from './service'
import Layout from '../../Components/layout/Layout'

function AdvertsPage() {
  const [adverts, setAdverts] = useState([])

  useEffect(() => {
    getAdverts().then((adverts) => setAdverts(adverts))
  }, [])

  return (
    <Layout title="Advert">
      <div className={styles.adverts}>
        {adverts.length ? (
          <ul>
            {adverts.map(({ id, ...advert }) => (
              <li key={advert.id}>{advert.name}</li>
            ))}
          </ul>
        ) : (
          <div>Empty</div>
        )}
      </div>
    </Layout>
  )
}

export default AdvertsPage
