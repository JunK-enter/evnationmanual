'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Search, 
  Filter, 
  Clock, 
  Settings,
  CheckCircle,
  Calculator,
  DollarSign,
  Globe,
  ArrowRight,
  Home
} from 'lucide-react';
import Link from 'next/link';

interface Program {
  id: string;
  name: string;
  link: string;
  description: string;
  category: string;
  lastUpdated: string;
  status: 'active' | 'maintenance' | 'beta';
  icon?: React.ReactNode;
  features?: string[];
}

const programs: Program[] = [
  {
    id: '1',
    name: 'Electrum to PipeDrive',
    link: 'https://electransform.onrender.com/',
    description: 'Integration tool for connecting Electrum data with Pipedrive CRM system.',
    category: 'Integration',
    lastUpdated: '2024-01-15',
    status: 'active',
    icon: <Calculator className="w-6 h-6" />,
    features: [
      'Data synchronization',
      'Lead management',
      'Automated workflows',
      'Real-time updates'
    ]
  },
  {
    id: '2',
    name: 'Load Calculator',
    link: 'https://evnation-load-calculator.vercel.app/',
    description: 'Advanced electrical load calculation tool for EV charger installations.',
    category: 'Calculation',
    lastUpdated: '2024-01-12',
    status: 'active',
    icon: <Calculator className="w-8 h-8" />,
    features: [
      'Panel capacity analysis',
      'Load balancing',
      'Safety calculations',
      'Permit requirements'
    ]
  },
  {
    id: '3',
    name: 'EVnation Optional Calculator',
    link: 'https://evnation-optional-calculator.vercel.app/',
    description: 'Optional features and add-ons calculator for EV charger installations.',
    category: 'Calculation',
    lastUpdated: '2024-01-10',
    status: 'active',
    icon: <Settings className="w-8 h-8" />,
    features: [
      'Add-on pricing',
      'Feature comparison',
      'Custom configurations',
      'Quote generation'
    ]
  },
  {
    id: '4',
    name: 'Project Pricing Summary Page',
    link: 'https://evnation-master.vercel.app/',
    description: 'Comprehensive project pricing and summary dashboard for all installations.',
    category: 'Management',
    lastUpdated: '2024-01-08',
    status: 'active',
    icon: <DollarSign className="w-8 h-8" />,
    features: [
      'Project tracking',
      'Cost analysis',
      'Profit margins',
      'Client summaries'
    ]
  },
  {
    id: '5',
    name: 'EVnation Main Website',
    link: 'https://evnation.us/',
    description: 'Official EVnation website with comprehensive information about EV charger and solar installation services.',
    category: 'Information',
    lastUpdated: '2024-01-20',
    status: 'active',
    icon: <Globe className="w-8 h-8" />,
    features: [
      'Company information',
      'Service details',
      'Contact information',
      'Quote requests'
    ]
  }
];

const categories = ['All', 'Integration', 'Calculation', 'Management', 'Information'];

export default function ProgramsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPrograms = [...filteredPrograms].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'updated':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      default:
        return 0;
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'maintenance':
        return 'bg-yellow-500';
      case 'beta':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'maintenance':
        return 'Maintenance';
      case 'beta':
        return 'Beta';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">EVnation Program Reference</h1>
                  <p className="text-blue-200 text-sm">Essential tools and applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              EVnation Program Reference
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Access all essential EVnation tools and applications for efficient EV charger installation management.
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20"
          >
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                  <option value="category" className="bg-gray-800 text-white">Sort by Category</option>
                  <option value="updated" className="bg-gray-800 text-white">Sort by Updated</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Program Header */}
                <div className="bg-gradient-to-r from-blue-500 to-emerald-600 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      {program.icon}
                    </div>
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(program.status)}`} title={getStatusText(program.status)}></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{program.name}</h3>
                  <p className="text-blue-100 text-sm">{program.description}</p>
                </div>

                {/* Program Content */}
                <div className="p-6">
                  {/* Features */}
                  {program.features && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Program Info */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white font-medium">{program.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Updated:</span>
                      <span className="text-white">{new Date(program.lastUpdated).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        program.status === 'active' ? 'bg-green-500/20 text-green-300' :
                        program.status === 'maintenance' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {getStatusText(program.status)}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-emerald-700 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Access Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedPrograms.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No programs found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid md:grid-cols-4 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{programs.length}</h3>
              <p className="text-gray-400 text-sm">Total Programs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{programs.filter(p => p.status === 'active').length}</h3>
              <p className="text-gray-400 text-sm">Active Programs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{programs.filter(p => p.category === 'Calculation').length}</h3>
              <p className="text-gray-400 text-sm">Calculation Tools</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Settings className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{categories.length - 1}</h3>
              <p className="text-gray-400 text-sm">Categories</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
