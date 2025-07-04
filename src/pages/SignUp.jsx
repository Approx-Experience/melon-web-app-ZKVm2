import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      if (!res.ok) throw new Error('Invalid credentials')
      const data = await res.json()
      localStorage.setItem('user', JSON.stringify(data))
      navigate('/')
      window.location.reload()
    } catch {
      setError('Invalid email or password')
    }
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
          padding: 40,
          borderRadius: 0,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          minWidth: 320
        }}
      >
        <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 24 }}>
          Login
        </h2>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 600 }}>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: 10,
              border: '1px solid #000',
              borderRadius: 0,
              marginTop: 6,
              marginBottom: 16
            }}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 600 }}>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: 10,
              border: '1px solid #000',
              borderRadius: 0,
              marginTop: 6,
              marginBottom: 16
            }}
          />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
        <button
          type='submit'
          style={{
            background: '#36E15C',
            color: '#000',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 15,
            border: 'none',
            borderRadius: 0,
            height: 44,
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
