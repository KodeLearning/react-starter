import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../../Components/layout/Layout'
import { getAdvert, removeAdvert } from './service'
import Button from '../../Components/form/Button'

import styles from './AdvertPage.module.css'

function AdvertPage() {
  const params = useParams()
  const navigate = useNavigate()

  const [advert, setAdvert] = useState(null)
  const [removeConfirmed, setRemoveConfirmed] = useState(false)

  useEffect(() => {
    async function getAdvertsFromService() {
      try {
        const advert = await getAdvert(params.advertId)
        setAdvert(advert)
      } catch (error) {
        if (error.status === 404) {
          navigate('/404')
        }
      }
    }

    getAdvertsFromService()
  }, [params.advertId, navigate])

  function handleRemoveAdvert() {
    removeAdvert(params.advertId)

    navigate('/')
  }

  function handleRemoveConfirmation() {
    setRemoveConfirmed(true)
  }

  return (
    <Layout title="Advert detail">
      {advert ? (
        <div>
          {advert.photo && <img src={advert.photo} alt="item" />}
          <h1>{advert.name}</h1>
          <h3>
            {advert.sale ? 'Selling for' : 'Willing to pay'} {advert.price}€
          </h3>
          <div className={styles.tags}>
            {advert.tags.map((tag) => (
              <div>{tag}</div>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
      <Button
        $variant="primary"
        onClick={
          removeConfirmed ? handleRemoveAdvert : handleRemoveConfirmation
        }
      >
        {!removeConfirmed ? 'Remove' : 'Are you sure?'}
      </Button>
    </Layout>
  )
}

export default AdvertPage
