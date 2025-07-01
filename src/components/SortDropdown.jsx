import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const SortDropdown = ({ value, onChange, options }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const selected = options.find((opt) => opt.value === value) || options[0]

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        minWidth: 160,
        fontFamily: 'Montserrat, sans-serif'
      }}
    >
      <button
        type='button'
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          height: 40,
          background: '#faf9f8',
          border: '1px solid transparent',
          borderRadius: 0,
          fontWeight: 600,
          fontSize: 14,
          color: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          cursor: 'pointer',
          outline: 'none',
          gap: 8
        }}
        aria-haspopup='listbox'
        aria-expanded={open}
      >
        <span>{selected.label}</span>
        <span style={{ fontSize: 10, marginLeft: 8, fontWeight: 700 }}>▼</span>
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 44,
            right: 0,
            left: 0,
            background: '#fff',
            border: '1px solid #000',
            borderRadius: 0,
            boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
            zIndex: 10,
            minWidth: 160
          }}
          role='listbox'
        >
          {options.map((opt) => (
            <label
              key={opt.value}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 16px',
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: 14,
                color: '#000',
                background: '#fff',
                borderBottom: '1px solid #F2F2F2',
                userSelect: 'none'
              }}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
            >
              <input
                type='radio'
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
                style={{ accentColor: '#000', marginRight: 8 }}
                name='sort-dropdown'
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

SortDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
}

export default SortDropdown
