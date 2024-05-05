import { useEffect, useRef, useState } from 'react'
import styles from './AdvertsPage.module.css'

import { getAdverts } from './service'
import Layout from '../../Components/layout/Layout'
import { Link } from 'react-router-dom'
import Placeholder from './components/Placeholder'

function AdvertsPage() {
  const [adverts, setAdverts] = useState([])
  const advertItem = useRef(null)

  useEffect(() => {
    getAdverts().then((adverts) => setAdverts(adverts))
  }, [])

  return (
    <Layout title="Latest Adverts">
      <div className={styles.adverts}>
        {adverts.length ? (
          adverts.map(({ id, ...advert }) => (
            <div className={styles.advert_item} key={id}>
              <div className={styles.advert_content}>
                <Placeholder photo={advert.photo} />
                <Link to={`/adverts/${id}`} ref={advertItem}>
                  {advert.name}
                </Link>
                <div>
                  {advert.sale ? <span>En venta</span> : <span>Se compra</span>}{' '}
                  por {advert.price}€
                </div>
                <div className={styles.tags}>
                  {advert.tags.map((tag) => (
                    <div>{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Empty</div>
        )}
      </div>
    </Layout>
  )
}

export default AdvertsPage
