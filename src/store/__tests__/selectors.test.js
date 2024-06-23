import { getAdvertById } from '../selectors'

describe('getAdvertById', () => {
  const advertId = '1'
  const adverts = [{ id: +advertId }]
  const state = { adverts: { data: adverts } }

  test('should return an advert by advertId', () => {
    expect(getAdvertById(advertId)(state)).toBe(adverts[0])
  })

  test('should not return any advert', () => {
    expect(getAdvertById('456')(state)).toBeUndefined()
  })
})
