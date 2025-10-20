'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Settings, 
  DollarSign, 
  Globe, 
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Star
} from 'lucide-react';
import Link from 'next/link';

interface Program {
  id: string;
  title: string;
  description: string;
  url: string;
  status: string;
  icon: React.ReactNode;
  category: string;
  features: string[];
  lastUpdated: string;
}

const programs: Program[] = [
  {
    id: '1',
    title: 'Electrum to Pipedrive Integration',
    description: 'Integration tool for connecting Electrum data with Pipedrive CRM system. Streamlines data flow between electrical project management and customer relationship management.',
    url: 'https://electransform.onrender.com/',
    status: 'Active',
    icon: <Calculator className="w-5 h-5 text-white" />,
    category: 'Integration',
    features: ['Data Synchronization', 'CRM Integration', 'Project Tracking', 'Customer Management'],
    lastUpdated: '2024-01-20'
  },
  {
    id: '2',
    title: 'Load Calculator',
    description: 'Advanced electrical load calculation tool for EV charger installations. Provides accurate power requirements and system specifications.',
    url: 'https://evnation-load-calculator.vercel.app/',
    status: 'Active',
    icon: <Calculator className="w-5 h-5 text-purple-400" />,
    category: 'Calculation',
    features: ['Load Analysis', 'Power Requirements', 'System Specifications', 'Safety Compliance'],
    lastUpdated: '2024-01-25'
  },
  {
    id: '3',
    title: 'Optional Calculator',
    description: 'Optional features and add-ons calculator for EV charger installations. Helps determine additional costs and features for projects.',
    url: 'https://evnation-optional-calculator.vercel.app/',
    status: 'Active',
    icon: <Settings className="w-5 h-5 text-orange-400" />,
    category: 'Calculation',
    features: ['Feature Selection', 'Cost Calculation', 'Add-on Management', 'Project Customization'],
    lastUpdated: '2024-01-25'
  },
  {
    id: '4',
    title: 'Project Pricing Summary',
    description: 'Comprehensive project pricing and summary dashboard for all installations. Central hub for project cost management and reporting.',
    url: 'https://evnation-master.vercel.app/',
    status: 'Active',
    icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
    category: 'Management',
    features: ['Cost Management', 'Project Tracking', 'Reporting Dashboard', 'Client Proposals'],
    lastUpdated: '2024-01-30'
  },
  {
    id: '5',
    title: 'EVnation Main Website',
    description: 'Official EVnation website with comprehensive information about services, company details, and contact information.',
    url: 'https://evnation.us/',
    status: 'Active',
    icon: <Globe className="w-5 h-5 text-indigo-400" />,
    category: 'Information',
    features: ['Service Information', 'Company Details', 'Contact Information', 'Portfolio Showcase'],
    lastUpdated: '2024-01-15'
  }
];

const categories = ['All', 'Integration', 'Calculation', 'Management', 'Information'];

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPrograms = programs.filter(program => {
    return selectedCategory === 'All' || program.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <ArrowLeft className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">Back to Home</h1>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Programs & Tools</h1>
                <p className="text-orange-200 text-sm">Essential Applications</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Page Header */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Programs &
                </span>
                <br />
                <span className="text-white">Tools</span>
              </h2>
              <p className="text-xl md:text-2l text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Access all essential EVnation tools and applications for efficient EV charger installation management.
                <br className="hidden md:block" />
                Streamline your workflow with our integrated solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300 h-full shadow-xl">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                        {program.icon}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          {program.status}
                        </span>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                    </div>

                    {/* Content */}
                                         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors leading-tight">
                       {program.title}
                     </h3>
                    
                                         <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                       {program.description}
                     </p>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-300 border border-orange-500/30">
                        {program.category}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-orange-300 mb-2 uppercase tracking-wide">Key Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="px-2 py-1 bg-orange-500/20 text-orange-200 text-xs rounded-md border border-orange-500/30">
                            {feature}
                          </span>
                        ))}
                        {program.features.length > 3 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-md">
                            +{program.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                        <span>Updated: {program.lastUpdated}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span>Active</span>
                        </div>
                      </div>
                      
                      <a 
                        href={program.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 group"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open Tool</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredPrograms.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-md mx-auto border border-white/20">
                  <Globe className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">
                    No tools found
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Try selecting a different category.
                  </p>
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                  >
                    View All Tools
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-4 sm:px-6 lg:px-8 pb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Integrated Workflow Solutions
              </h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Our tools work together seamlessly to provide a complete solution for EV charger installation projects. 
                From initial calculations to final project management, everything you need is integrated and accessible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Seamless Integration</h4>
                  <p className="text-gray-300 text-sm">All tools work together to provide a unified experience.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Professional Quality</h4>
                  <p className="text-gray-300 text-sm">Enterprise-grade tools designed for professional use.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Always Accessible</h4>
                  <p className="text-gray-300 text-sm">Cloud-based tools available anywhere, anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
    </div>
  );
}
