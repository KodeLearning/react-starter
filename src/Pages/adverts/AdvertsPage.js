import { useEffect, useRef, useState } from 'react'
import styles from './AdvertsPage.module.css'

import { getAdverts } from './service'
import Layout from '../../Components/layout/Layout'
import { Link } from 'react-router-dom'
import Placeholder from './components/Placeholder'
import { useDispatch, useSelector } from 'react-redux'
import { advertsLoaded, tagsLoaded } from '../../store/actions'
import { getAllAdverts } from '../../store/selectors'

function AdvertsPage() {
  const dispatch = useDispatch()
  const adverts = useSelector(getAllAdverts)
  const [filterValues, setFilterValues] = useState({
    nameFilter: '',
    typeFilter: '',
  })
  let tags = new Set()
  const advertItem = useRef(null)

  const handleChange = (e) => {
    setFilterValues((currentFilterValues) => ({
      ...currentFilterValues,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    getAdverts().then((adverts) => {
      dispatch(advertsLoaded(adverts))
      adverts.map((advert) => advert.tags.map((tag) => tags.add(tag)))
      dispatch(tagsLoaded(Array.from(tags)))
    })
  }, [])

  const { nameFilter, typeFilter } = filterValues

  return (
    <Layout title="Latest Adverts">
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Filter by name"
          name="nameFilter"
          value={nameFilter}
          onChange={handleChange}
        />
        <div className={styles.customCheckBoxHolder}>
          <input
            className={styles.customCheckBoxInput}
            id="sales"
            type="radio"
            name="typeFilter"
            value="sales"
            onChange={handleChange}
          />
          <label className={styles.customCheckBoxWrapper} for="sales">
            <div className={styles.customCheckBox}>
              <div className={styles.inner}>Sales</div>
            </div>
          </label>

          <input
            className={styles.customCheckBoxInput}
            id="purchases"
            type="radio"
            name="typeFilter"
            value="purchases"
            onChange={handleChange}
          />
          <label className={styles.customCheckBoxWrapper} for="purchases">
            <div className={styles.customCheckBox}>
              <div className={styles.inner}>Purchases</div>
            </div>
          </label>

          <input
            className={styles.customCheckBoxInput}
            id="all"
            type="radio"
            name="typeFilter"
            value="all"
            onChange={handleChange}
          />
          <label className={styles.customCheckBoxWrapper} for="all">
            <div className={styles.customCheckBox}>
              <div className={styles.inner}>All</div>
            </div>
          </label>
        </div>
      </div>
      <div className={styles.adverts}>
        {adverts.length ? (
          adverts
            .filter((advert) => {
              if (nameFilter) {
                if (nameFilter !== advert.name) return false
              }

              if (typeFilter !== 'all') {
                if (typeFilter === 'sales' && !advert.sale) {
                  return false
                }
                if (typeFilter === 'purchases' && advert.sale) {
                  return false
                }
              }

              return true
            })
            .map(({ id, ...advert }) => (
              <div className={styles.advert_item} key={id}>
                <div className={styles.advert_content}>
                  <Placeholder photo={advert.photo} />
                  <Link to={`/adverts/${id}`} ref={advertItem}>
                    {advert.name}
                  </Link>
                  <div>
                    {advert.sale ? (
                      <span>Selling for </span>
                    ) : (
                      <span>Willing to pay </span>
                    )}
                    {advert.price}€
                  </div>
                  <div className={styles.tags}>
                    {advert.tags.map((tag, index) => (
                      <div key={index}>{tag}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))
        ) : (
          <div>Empty</div>
        )}
      </div>
    </Layout>
  )
}

export default AdvertsPage
