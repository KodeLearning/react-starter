export function failureRedirects(router) {
  return function (store) {
    return function (next) {
      return function (action) {
        const result = next(action)

        if (!action.error) return

        if (action.payload.status === 401) {
          router.navigate('/login')
        }

        if (action.payload.status === 404) {
          router.navigate('/404')
        }

        return result
      }
    }
  }
}
