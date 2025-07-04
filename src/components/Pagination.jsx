import PropTypes from 'prop-types'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const btnStyle = {
    minWidth: 36,
    height: 36,
    border: '1px solid #ddd',
    background: '#fff',
    color: '#222',
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'all 0.15s',
    margin: '0 2px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
  }
  const activeBtnStyle = {
    ...btnStyle,
    background: '#E13636',
    color: '#fff',
    border: '1.5px solid #E13636',
    boxShadow: '0 2px 8px rgba(225,54,54,0.08)'
  }
  const navBtnStyle = {
    ...btnStyle,
    fontWeight: 700,
    fontSize: 18
  }

  return (
    <div
      className='pagination-container'
      style={{
        display: 'flex',
        gap: 4,
        justifyContent: 'center',
        margin: '40px 0 24px 0'
      }}
    >
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        aria-label='Go to first page'
        style={{ ...navBtnStyle, opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        {'<<'}
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label='Go back one page'
        style={{ ...navBtnStyle, opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        {'<'}
      </button>
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          style={num === currentPage ? activeBtnStyle : btnStyle}
          aria-current={num === currentPage ? 'page' : undefined}
        >
          {num}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label='Go forward one page'
        style={{
          ...navBtnStyle,
          opacity: currentPage === totalPages ? 0.5 : 1
        }}
      >
        {'>'}
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        aria-label='Go to last page'
        style={{
          ...navBtnStyle,
          opacity: currentPage === totalPages ? 0.5 : 1
        }}
      >
        {'>>'}
      </button>
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}
