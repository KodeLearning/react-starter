import { useRef, useState } from 'react'
import Layout from '../../Components/layout/Layout'
import Button from '../../Components/form/Button'
import { useNavigate } from 'react-router-dom'

import styles from './NewAdvertPage.module.css'
import { useDispatch } from 'react-redux'
import { createAdvert } from '../../store/actions'

export default function NewAdvertPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cbSale = useRef(null)
  const photoRef = useRef(null)
  const [error, setError] = useState(null)
  const [formValues, setFormValues] = useState({
    name: '',
    price: 0,
    sale: false,
    tags: [],
    photo: null,
  })

  const handleChange = (e) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [e.target.name]:
        e.target.name === 'tags'
          ? Array.from(e.target.selectedOptions, (option) => option.value)
          : e.target.name === 'sale'
          ? e.target.checked
          : e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const createdAdvert = await dispatch(
      createAdvert(name, price, sale, tags, photoRef.current.files[0])
    )
    navigate(`/adverts/${createdAdvert.id}`)
  }

  const { name, price, sale, tags } = formValues
  const emptyForm = !name || !price || !tags

  return (
    <Layout title="New Advert">
      <div className="newAdvertPage">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={name}
              placeholder="Advert title"
              required
            />{' '}
          </div>
          <div>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              value={price}
              placeholder="Advert price"
              required
            />
          </div>
          <div className={styles.customCheckBoxHolder}>
            <input
              type="checkbox"
              id="sale"
              className={styles.customCheckBoxInput}
              name="sale"
              ref={cbSale}
              onChange={handleChange}
            />
            <label htmlFor="sale" className={styles.customCheckBoxWrapper}>
              <div className={styles.customCheckBox}>
                <div className={styles.inner}>For sell</div>
              </div>
            </label>
          </div>
          <div>
            <select multiple name="tags" onChange={handleChange} required>
              <option value="lifestyle">Lifestyle</option>
              <option value="mobile">Mobile</option>
              <option value="motor">Motor</option>
              <option value="work">Work</option>
            </select>
          </div>
          <div>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              ref={photoRef}
              accept="image/png, image/jpeg"
            />
          </div>
          <div>
            <Button type="submit" disabled={emptyForm}>
              Create Advert
            </Button>
          </div>
        </form>
      </div>
      {error && <div>{error.message}</div>}
    </Layout>
  )
}
