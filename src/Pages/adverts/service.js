import { client } from '../../api/client'

const advertsUrl = '/api/v1/adverts'

export const getAdverts = () => {
  return client.get(advertsUrl)
}

export const getAdvert = (advertId) => {
  console.log(advertId)
  const url = `${advertsUrl}/${advertId}`
  return client.get(url)
}
