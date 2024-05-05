import { useState } from 'react'
import Layout from '../../Components/layout/Layout'
import Button from '../../Components/form/Button'
import { useNavigate } from 'react-router-dom'
import { createAdvert } from './service'

export default function NewAdvertPage() {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    price: 0,
    sale: false,
    tags: [],
  })

  const handleChange = (event) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [currentFormValues.isSelling]: !!event.target.value,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const createdAdvert = await createAdvert({
        name,
        price,
        sale,
        tags,
      })

      navigate(`/adverts/${createdAdvert.id}`)
    } catch (error) {
      if (error.status === 401) {
        navigate('/login')
      }
    }
  }

  const { name, price, sale, tags } = formValues
  const emptyForm = !name || !price || !sale || !tags

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
            />
          </div>
          <div>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              value={price}
            />
          </div>
          <div>
            <input type="radio" name="sale" value="1" onChange={handleChange} />{' '}
            Venta
            <input
              type="radio"
              name="sale"
              value="0"
              onChange={handleChange}
            />{' '}
            Compra
          </div>
          <div>
            <select multiple name="tags" onClick={handleChange}>
              <option value="lifestyle">Lifestyle</option>
              <option value="mobile">Mobile</option>
              <option value="motor">Motor</option>
              <option value="work">Work</option>
            </select>
          </div>
          <div>
            <Button type="submit" disabled={emptyForm}>
              Create Advert
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
