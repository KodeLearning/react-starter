import { client } from '../../api/client'

const advertsUrl = '/api/v1/adverts'

export const getAdverts = () => {
  return client.get(advertsUrl)
}
