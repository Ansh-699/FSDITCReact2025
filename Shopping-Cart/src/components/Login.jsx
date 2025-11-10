import React from 'react'

const Login = () => {
  return (
    <form style={{ maxWidth: 420, margin: '0 auto', padding: 24 }}>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="form2Example1" style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
          Email address
        </label>
        <input
          type="email"
          id="form2Example1"
          style={{
            width: '100%',
            padding: '10px 12px',
            border: '1px solid #ced4da',
            borderRadius: 6,
            outline: 'none',
            fontSize: 14,
          }}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label htmlFor="form2Example2" style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
          Password
        </label>
        <input
          type="password"
          id="form2Example2"
          style={{
            width: '100%',
            padding: '10px 12px',
            border: '1px solid #ced4da',
            borderRadius: 6,
            outline: 'none',
            fontSize: 14,
          }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <label htmlFor="form2Example31" style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <input type="checkbox" id="form2Example31" defaultChecked />
          <span>Remember me</span>
        </label>
        <a href="#!" style={{ color: '#0d6efd', textDecoration: 'none' }}>Forgot password?</a>
      </div>

      <button
        type="button"
        style={{
          width: '100%',
          backgroundColor: '#0d6efd',
          color: '#fff',
          border: 'none',
          padding: '10px 16px',
          borderRadius: 6,
          cursor: 'pointer',
          marginBottom: 16,
          fontWeight: 600,
        }}
      >
        Sign in
      </button>

      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '8px 0' }}>
          Not a member?{' '}
          <a href="#!" style={{ color: '#0d6efd', textDecoration: 'none' }}>Register</a>
        </p>
        <p style={{ margin: '8px 0' }}>or sign up with:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          <button
            type="button"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#0d6efd',
              cursor: 'pointer',
              padding: 8,
            }}
            aria-label="Sign in with Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button
            type="button"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#0d6efd',
              cursor: 'pointer',
              padding: 8,
            }}
            aria-label="Sign in with Google"
          >
            <i className="fab fa-google"></i>
          </button>
          <button
            type="button"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#0d6efd',
              cursor: 'pointer',
              padding: 8,
            }}
            aria-label="Sign in with Twitter"
          >
            <i className="fab fa-twitter"></i>
          </button>
          <button
            type="button"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#0d6efd',
              cursor: 'pointer',
              padding: 8,
            }}
            aria-label="Sign in with GitHub"
          >
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
    </form>
  )
}

export default Login