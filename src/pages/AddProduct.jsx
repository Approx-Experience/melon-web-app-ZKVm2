import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const sizesList = ['XS', 'S', 'M', 'L', 'XL']
const colorsList = ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow']
const categories = ['Shirts', 'Shorts', 'Hats', 'Shoes', 'Accessories', 'Other']

export default function AddProduct() {
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [sizes, setSizes] = useState([])
  const [colors, setColors] = useState([])
  const [category, setCategory] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // TODO: Replace with real admin check
  const isAdmin = true
  if (!isAdmin) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Access denied</div>
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setImagePreview(reader.result)
      reader.readAsDataURL(file)
    } else {
      setImagePreview(null)
    }
  }
  const handleRemoveImage = () => {
    setImage(null)
    setImagePreview(null)
  }
  const handleSizesChange = (e) => {
    const value = e.target.value
    setSizes((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    )
  }
  const handleColorsChange = (e) => {
    const value = e.target.value
    setColors((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    )
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      !image ||
      !title ||
      !description ||
      !price ||
      !sizes.length ||
      !colors.length ||
      !category
    ) {
      setError('Please fill in all fields.')
      return
    }
    setError('')
    const formData = new FormData()
    formData.append('image', image)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('sizes', JSON.stringify(sizes))
    formData.append('colors', JSON.stringify(colors))
    formData.append('category', category)
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        body: formData
        // headers: { 'Authorization': 'Bearer ...' } // якщо потрібен токен
      })
      if (!res.ok) throw new Error('Failed to add product')
      // const data = await res.json()
      navigate('/')
    } catch {
      setError('Failed to add product')
    }
  }

  return (
    <div
      style={{
        maxWidth: 500,
        margin: '40px auto',
        background: '#fff',
        padding: 32,
        borderRadius: 0,
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}
    >
      <h2
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          fontSize: 28,
          marginBottom: 24
        }}
      >
        Add Product
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 600, display: 'block', marginBottom: 8 }}>
            Image
          </label>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <label
              htmlFor='product-image-upload'
              style={{
                border: '2px dashed #36E15C',
                borderRadius: 0,
                padding: '24px 0',
                width: '100%',
                textAlign: 'center',
                background: '#FAF9F8',
                color: '#000',
                fontWeight: 600,
                fontFamily: 'Montserrat, sans-serif',
                cursor: 'pointer',
                marginBottom: 10
              }}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt='Preview'
                  style={{
                    maxWidth: 180,
                    maxHeight: 180,
                    objectFit: 'cover',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              ) : (
                <>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>📷</div>
                  <div>Click or drag to upload image</div>
                </>
              )}
              <input
                id='product-image-upload'
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </label>
            {imagePreview && (
              <button
                type='button'
                onClick={handleRemoveImage}
                style={{
                  background: 'none',
                  color: '#E13636',
                  border: 'none',
                  fontWeight: 600,
                  marginTop: 8,
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            )}
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 600 }}>Title</label>
          <br />
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: '100%',
              padding: 8,
              border: '1px solid #000',
              borderRadius: 0
            }}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 600 }}>Description</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: '100%',
              padding: 8,
              border: '1px solid #000',
              borderRadius: 0,
              minHeight: 60,
              background: '#fff',
              color: '#000'
            }}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 600 }}>Price</label>
          <br />
          <input
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              width: '100%',
              padding: 8,
              border: '1px solid #000',
              borderRadius: 0
            }}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 600 }}>Available Sizes</label>
          <br />
          {sizesList.map((s) => (
            <label key={s} style={{ marginRight: 12 }}>
              <input
                type='checkbox'
                value={s}
                checked={sizes.includes(s)}
                onChange={handleSizesChange}
              />{' '}
              {s}
            </label>
          ))}
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 600 }}>Colors</label>
          <br />
          {colorsList.map((c) => (
            <label key={c} style={{ marginRight: 12 }}>
              <input
                type='checkbox'
                value={c}
                checked={colors.includes(c)}
                onChange={handleColorsChange}
              />{' '}
              {c}
            </label>
          ))}
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 600 }}>Category</label>
          <br />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: '100%',
              padding: 8,
              border: '1px solid #000',
              borderRadius: 0
            }}
          >
            <option value=''>Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
        <button
          type='submit'
          style={{
            background: '#36E15C',
            color: '#000',
            fontWeight: 700,
            border: 'none',
            padding: '12px 0',
            width: '100%',
            fontSize: 15,
            borderRadius: 0,
            fontFamily: 'Montserrat, sans-serif',
            cursor: 'pointer'
          }}
        >
          Add product
        </button>
      </form>
    </div>
  )
}
