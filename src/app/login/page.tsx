'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/components/AuthProvider';
// NextAuth 제거
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  ArrowRight,
  Globe,
  Zap,
  Shield,
  CheckCircle
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  // 허용된 사용자 목록
  const ALLOWED_USERS = [
    'Neil',
    'Alex', 
    'Jun',
    'Cameron',
    'Tim',
    'Raleigh',
    'Olivia',
    'Athena',
    'Pat'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      console.log('Attempting login with:', { username, password });
      
      // 간단한 로그인 검증
      if (!ALLOWED_USERS.includes(username)) {
        setError('Invalid username. Access denied.');
        setIsLoading(false);
        return;
      }

      if (password !== '18001') {
        setError('Invalid password. Please use the company password.');
        setIsLoading(false);
        return;
      }

      // 로그인 성공
      console.log('Login successful for:', username);
      login(`${username.toLowerCase()}@evnation.us`);
      router.push('/');
      
    } catch (error) {
      console.error('Login exception:', error);
      setError(`Login error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    
    setIsLoading(false);
  };

  // Google sign-in removed

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Zap className="w-3 h-3 text-yellow-900" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              EVnation
            </span>
          </h1>
          <p className="text-slate-300 text-lg">EV Charger Installation Specialist</p>
          <p className="text-slate-400 text-sm mt-2">Secure Access Portal</p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="liquid-glass-card rounded-3xl p-8 shadow-2xl"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Welcome Back</h2>
            <p className="text-slate-300">Sign in to access the EVnation manual system</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-slate-300">
                Username
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 liquid-glass-input rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 liquid-glass-input rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Login Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>

            {/* Divider - Temporarily hidden */}
            {/* <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900 text-slate-400">Or continue with</span>
              </div>
            </div> */}

            {/* Google Sign In Button - Removed */}
          </form>

          {/* Company Access Info */}
          <div className="mt-6 p-5 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/30 rounded-xl backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-blue-300 mb-3 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
              Company Access
            </h3>
            <div className="text-xs text-slate-300 space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <p><span className="text-blue-200 font-medium">Note:</span> Only authorized team members can access</p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/50">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  <p className="text-emerald-200 font-medium">IT Support - Jun Kim</p>
                </div>
                <div className="ml-4 text-slate-400 space-y-1">
                  <p>📞 (949) 577-7030</p>
                  <p>✉️ jkim@evnation.us</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-slate-400 text-sm">
            © 2024 EVnation. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-1">
            Secure access to EV charger installation resources
          </p>
        </motion.div>
      </div>
    </div>
  );
}
