'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BookOpen,
  Globe,
  Target,
  Users,
  Heart,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import LiveChatBot from '@/components/LiveChatBot';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"> 
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Header */}
      <header className="liquid-glass-header sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap className="w-2 h-2 text-yellow-900" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-white">EVnation</h1>
                <p className="text-slate-300 text-sm">EV Charger Installation Specialist</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex items-center space-x-6 text-slate-300"
            >
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">500+ installations completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">4.9/5.0</span>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-semibold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">EV Charger</span>
                <br />
                <span className="text-slate-200">Installation Manual</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Comprehensive guide for EV Charger installation.
                <br className="hidden md:block" />
                Providing a perfect guide for safe and accurate installation.
              </p>
              
              {/* Stats */}
              <div className="flex justify-center items-center space-x-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-white mb-1">5</div>
                  <div className="text-slate-300 text-sm">Available Manuals</div>
                </div>
                <div className="w-px h-12 bg-slate-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-white mb-1">1,850</div>
                  <div className="text-slate-300 text-sm">Total Downloads</div>
                </div>
                <div className="w-px h-12 bg-slate-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-white mb-1">4.9</div>
                  <div className="text-slate-300 text-sm">Average Rating</div>
                </div>
                <div className="w-px h-12 bg-slate-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-white mb-1">5</div>
                  <div className="text-slate-300 text-sm">Success Processes</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Sections Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Choose Your
                </span>
                <br />
                <span className="text-slate-200">Section</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Select the area you want to explore and dive deep into specific information.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Manuals Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <Link href="/manuals" className="block">
                  <div className="liquid-glass-card rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-300 h-full shadow-xl">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">EVnation Manuals</h3>
                    <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                      Access comprehensive technical documentation, company policies, and operational guidelines.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 font-medium">8 Manuals Available</span>
                      <ArrowRight className="w-6 h-6 text-blue-300 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Workplace Etiquette Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="group"
              >
                <Link href="/etiquette" className="block">
                  <div className="liquid-glass-card rounded-3xl p-8 hover:border-emerald-400/50 transition-all duration-300 h-full shadow-xl">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Workplace Etiquette</h3>
                    <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                      Essential guidelines for maintaining a professional, collaborative, and safe work environment.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-300 font-medium">8 Guidelines</span>
                      <ArrowRight className="w-6 h-6 text-emerald-300 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Success Process Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="group"
              >
                <Link href="/processes" className="block">
                  <div className="liquid-glass-card rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-300 h-full shadow-xl">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Success Processes</h3>
                    <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                      Step-by-step workflows that drive EVnation&apos;s success in EV charger installation.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300 font-medium">5 Processes</span>
                      <ArrowRight className="w-6 h-6 text-purple-300 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Programs Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="group"
              >
                <Link href="/programs" className="block">
                  <div className="liquid-glass-card rounded-3xl p-8 hover:border-orange-400/50 transition-all duration-300 h-full shadow-xl">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Programs & Tools</h3>
                    <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                      Access all essential EVnation tools and applications for efficient project management.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-300 font-medium">5 Tools Available</span>
                      <ArrowRight className="w-6 h-6 text-orange-300 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Contact & Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="group"
              >
                <Link href="/contact" className="block">
                  <div className="liquid-glass-card rounded-3xl p-8 hover:border-pink-400/50 transition-all duration-300 h-full shadow-xl">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-semibold text-white mb-4">Contact & Support</h3>
                    <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                      Get help, ask questions, or provide feedback to our team. We&apos;re here to support you.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-pink-300 font-medium">Get Help</span>
                      <ArrowRight className="w-6 h-6 text-pink-300 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Live Chat Bot */}
      <LiveChatBot />
    </div>
  );
}
