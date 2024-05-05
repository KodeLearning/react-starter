import { useEffect, useRef, useState } from 'react'
import styles from './AdvertsPage.module.css'

import { getAdverts } from './service'
import Layout from '../../Components/layout/Layout'
import { Link } from 'react-router-dom'

function AdvertsPage() {
  const [adverts, setAdverts] = useState([])
  const advertItem = useRef(null)

  const handleItemLink = () => {
    // Se que no deberia hacerse esto
    // Es por darle uso al Ref, no se me ocurrió nada más 😅
    window.location.href = advertItem.current.href
  }

  useEffect(() => {
    getAdverts().then((adverts) => setAdverts(adverts))
  }, [])

  return (
    <Layout title="Latest Adverts">
      <div className={styles.adverts}>
        {adverts.length ? (
          adverts.map(({ id, ...advert }) => (
            <div
              className={styles.advert_item}
              key={advert.id}
              onClick={handleItemLink}
            >
              <div className={styles.advert_content}>
                <img
                  src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
                  alt="placeholder"
                />
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
