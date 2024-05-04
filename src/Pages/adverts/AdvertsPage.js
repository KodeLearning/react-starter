import { useEffect, useState } from 'react'
import styles from './AdvertsPage.module.css'

import { getAdverts } from './service'
import Layout from '../../Components/layout/Layout'
import { Link } from 'react-router-dom'

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
              <li key={advert.id}>
                <Link to={`/adverts/${id}`}>{advert.name}</Link>
                {advert.sale ? <span>Venta</span> : <span>Compra</span>}
                <div>
                  {advert.price}€ -{' '}
                  {advert.tags.map((tag) => (
                    <div>{tag}</div>
                  ))}
                </div>
              </li>
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
