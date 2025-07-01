import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  // const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    // TODO: handle registration logic
    setError('')
    alert('Registered!')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#FAF9F8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Montserrat, sans-serif',
        color: '#000',
        padding: '40px 0'
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          padding: 32,
          minWidth: 320,
          maxWidth: 360,
          width: '100%',
          boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
          borderRadius: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          border: '1px solid #eee'
        }}
      >
        <div
          style={{
            fontWeight: 800,
            fontSize: 24,
            marginBottom: 8,
            textAlign: 'left'
          }}
        >
          register
        </div>
        <div
          style={{
            fontWeight: 500,
            fontSize: 14,
            marginBottom: 18,
            color: '#222',
            textAlign: 'start'
          }}
        >
          become a member — enjoy first dibs on new products and rewards.
        </div>
        {error && (
          <div style={{ color: '#E13636', fontWeight: 600, marginBottom: 8 }}>
            {error}
          </div>
        )}
        <label style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>
          email
        </label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            height: 40,
            border: '1px solid #000',
            borderRadius: 0,
            background: '#fff',
            fontSize: 14,
            color: '#000',
            padding: '0 10px',
            marginBottom: 16,
            fontFamily: 'Montserrat, sans-serif',
            outline: 'none'
          }}
          required
        />
        <label style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>
          password
        </label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            height: 40,
            border: '1px solid #000',
            borderRadius: 0,
            background: '#fff',
            fontSize: 14,
            color: '#000',
            padding: '0 10px',
            marginBottom: 16,
            fontFamily: 'Montserrat, sans-serif',
            outline: 'none'
          }}
          required
        />
        <label style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>
          confirm password
        </label>
        <input
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{
            height: 40,
            border: '1px solid #000',
            borderRadius: 0,
            background: '#fff',
            fontSize: 14,
            color: '#000',
            padding: '0 10px',
            marginBottom: 24,
            fontFamily: 'Montserrat, sans-serif',
            outline: 'none'
          }}
          required
        />
        <button
          type='submit'
          style={{
            background: '#000',
            color: '#fff',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 15,
            border: 'none',
            borderRadius: 0,
            height: 44,
            marginBottom: 12,
            cursor: 'pointer',
            textTransform: 'lowercase',
            letterSpacing: 0.2
          }}
        >
          register account
        </button>
        <button
          type='button'
          // onClick={() => navigate('/login')}
          style={{
            background: '#fff',
            color: '#000',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 15,
            border: '1px solid #000',
            borderRadius: 0,
            height: 44,
            cursor: 'pointer',
            textTransform: 'lowercase',
            letterSpacing: 0.2
          }}
        >
          login
        </button>
      </form>
    </div>
  )
}

export default SignUp
