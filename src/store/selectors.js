export const getIsLogged = (state) => state.auth

export const getAllAdverts = (state) => state.adverts

export const getAdvertById = (advertId) => (state) => {
  return getAllAdverts(state).find((advert) => advert.id === advertId)
}
