import { client } from '../../api/client'

const advertsUrl = '/api/v1/adverts'

export const getAdverts = () => {
  return client.get(advertsUrl)
}

export const getAdvert = (advertId) => {
  const url = `${advertsUrl}/${advertId}`
  return client.get(url)
}

export const createAdvert = (data) => {
  console.log(data)
  return client.post(advertsUrl, data, {
    'Content-Type': 'multipart/form-data',
  })
}

export const removeAdvert = (advertId) => {
  const url = `${advertsUrl}/${advertId}`
  return client.delete(url)
}
