import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../Components/layout/Layout'
import { getAdvert } from './service'

function AdvertPage() {
  const params = useParams()

  const [advert, setAdvert] = useState(null)

  useEffect(() => {
    async function getAdvertsFromService() {
      const advert = await getAdvert(params.advertId)
      setAdvert(advert)
    }

    getAdvertsFromService()
  }, [params.advertId])

  return <Layout title="Tweet detail">{advert && advert.name}</Layout>
}

export default AdvertPage
