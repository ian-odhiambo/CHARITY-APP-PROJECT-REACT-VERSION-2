import { useState } from 'react';

const Login = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    
    // Clear previous messages
    setMessage('');
    
    // Basic validation
    if (!email.trim() || !password.trim()) {
      setMessage('Please enter both fields');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setMessage('Please enter a valid email address');
      return;
    }

    // Start loading
    setLoading(true);

    try {
      // API call
      const res = await fetch('https://charity-minds.onrender.com/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token/user data
        localStorage.setItem('auth', JSON.stringify(data));
        
        // Show success message
        setMessage('Login successful! Redirecting...');
        
        // Redirect to dashboard after delay
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
      } else {
        // Show error from API
        setMessage(data?.message || 'Login failed. Please check your details.');
      }
    } catch (error) {
      // Network or other errors
      setMessage('Network error. Please try again.');
    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  return (
    <main className="auth-content">
      <form onSubmit={handleSubmit} id="loginForm">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="john@wick.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          
          {/* Message display */}
          {message && (
            <p className={`text-center text-sm mt-3 ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="**************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 text-white cursor-pointer py-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className="text-center mt-4">
          Don't have an account?
          <a href="/register" className="text-red-800 ml-1">
            Register.
          </a>
        </p>
      </form>
    </main>
  );
};

export default Login;