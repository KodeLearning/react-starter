import { getAdvertById } from '../selectors'

describe('getAdvertById', () => {
  const advertId = '1'
  const adverts = [{ id: +advertId }]
  const state = { adverts: { data: adverts } }

  test('should return an advert by advertId', () => {
    // No se por qué espera 'Undefined'
    expect(getAdvertById(advertId)(state)).toBe(adverts)
  })

  test('should not return any advert', () => {
    expect(getAdvertById('456')(state)).toBeUndefined()
  })
})
