import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const [query, setQuery] = useState(params.get('search') || '')

  useEffect(() => {
    setQuery(params.get('search') || '')
    // eslint-disable-next-line
  }, [location.search])

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/browse?search=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleClear = () => {
    setQuery('')
    params.delete('search')
    navigate(`/browse?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 40,
        border: '1px solid #000',
        background: '#fff',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 14,
        width: '100%',
        maxWidth: 400,
        margin: '0 auto 32px auto',
        position: 'relative'
      }}
    >
      <button
        type='submit'
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0 12px'
        }}
        aria-label='Search'
      >
        <img
          src='/public/search.svg'
          alt='search'
          style={{ width: 18, height: 18 }}
        />
      </button>
      <input
        type='text'
        placeholder='Search products'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          fontFamily: 'inherit',
          fontSize: 14,
          color: '#000',
          background: 'transparent'
        }}
      />
      {query && (
        <button
          type='button'
          onClick={handleClear}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0 12px'
          }}
          aria-label='Clear'
        >
          <img
            src='/public/close.svg'
            alt='clear'
            style={{ width: 16, height: 16 }}
          />
        </button>
      )}
    </form>
  )
}

export default SearchBar
