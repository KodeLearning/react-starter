export const getIsLogged = (state) => state.auth

export const areAdvertsLoaded = (state) => state.adverts.loaded
export const getAllAdverts = (state) => state.adverts.data

export const getAdvertById = (advertId) => (state) => {
  return getAllAdverts(state).find((advert) => advert.id === advertId)
}

export const getUi = (state) => state.ui
