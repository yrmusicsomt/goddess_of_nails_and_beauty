import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-light tracking-widest text-center mb-8 text-charcoal">ADMIN LOGIN</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded">{error}</div>
          )}

          <div>
            <label className="block text-sm text-charcoal/70 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-charcoal/20 rounded bg-white text-charcoal focus:outline-none focus:border-brown"
            />
          </div>

          <div>
            <label className="block text-sm text-charcoal/70 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-charcoal/20 rounded bg-white text-charcoal focus:outline-none focus:border-brown"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-charcoal text-cream rounded hover:bg-brown transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
