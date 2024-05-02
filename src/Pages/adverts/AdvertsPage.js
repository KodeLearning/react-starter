import { useEffect, useState } from 'react'
import styles from './AdvertsPage.module.css'

import { getAdverts } from './service'
import Layout from '../../Components/layout/Layout'

function AdvertsPage(props) {
  const [adverts, setAdverts] = useState([])

  useEffect(() => {
    getAdverts().then((adverts) => setAdverts(adverts))
  }, [])

  return (
    <Layout title="Advert" {...props}>
      <div className={styles.adverts}>
        <ul>
          {adverts &&
            adverts.map((advert) => <li key={advert.id}>{advert.name}</li>)}
        </ul>
      </div>
    </Layout>
  )
}

export default AdvertsPage
