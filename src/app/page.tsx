'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Download, 
  ArrowRight, 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users,
  Car,
  Settings,
  BookOpen,
  Globe,
  Calculator,
  DollarSign,
  Phone,
  AlertTriangle,
  Info,
  FileText
} from 'lucide-react';
import Link from 'next/link';

interface Manual {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  pages: number;
  lastUpdated: string;
  coverImage: string;
  pdfUrl: string;
  rating?: number;
  downloads?: number;
  icon?: React.ReactNode;
  keyFeatures?: string[];
  targetAudience?: string;
}

const manuals: Manual[] = [
  {
    id: '1',
    title: 'Company Overview & Organization Chart',
    description: 'Essential company information including EVnation introduction, organizational structure, key personnel, contact details, company policies, and operational guidelines. This manual provides comprehensive understanding of EVnation\'s business model, service areas, and internal communication protocols.',
    category: 'Company Info',
    tags: ['Employee', 'Electrician'],
    pages: 25,
    lastUpdated: '2024-01-15',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/company-overview.pdf',
    rating: 4.9,
    downloads: 1250,
    icon: <Building2 className="w-6 h-6 text-white" />,
    keyFeatures: ['Company Introduction', 'Organization Chart', 'Contact Information', 'Company Policies', 'Operational Guidelines'],
    targetAudience: 'All EVnation employees and contractors'
  },
  {
    id: '2',
    title: 'RingCentral Communication System Manual',
    description: 'Complete user guide for RingCentral phone system including setup, team calling features, text messaging, voicemail management, call forwarding, conference calls, and automatic activity logging. Essential for internal team communication and client interaction tracking.',
    category: 'Integration',
    tags: ['Employee'],
    pages: 18,
    lastUpdated: '2024-01-25',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/RCmanual.pdf',
    rating: 4.9,
    downloads: 320,
    icon: <Phone className="w-6 h-6 text-white" />,
    keyFeatures: ['Phone System Setup', 'Team Calling', 'Text Messaging', 'Voicemail Management', 'Call Forwarding', 'Conference Calls', 'Activity Logging'],
    targetAudience: 'Internal EVnation employees'
  },
  {
    id: '3',
    title: 'Project Pricing Summary & Master Page Tool',
    description: 'Comprehensive guide for the EVNation Master Page tool covering client information management, electrical load calculations, project cost estimation, PDF report generation, and project tracking. This tool is crucial for creating professional proposals and managing installation projects from start to finish.',
    category: 'Integration',
    tags: ['Employee'],
    pages: 15,
    lastUpdated: '2024-01-25',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/projectpricingsum.pdf',
    rating: 4.8,
    downloads: 280,
    icon: <FileText className="w-6 h-6 text-white" />,
    keyFeatures: ['Client Information Management', 'Load Calculations', 'Cost Estimation', 'PDF Report Generation', 'Project Tracking', 'Professional Proposals'],
    targetAudience: 'EVnation project managers and sales team'
  }
];

const categories = ['All', 'Company Info', 'Integration'];
const tags = ['All', 'Employee', 'Electrician'];

// interface Program {
//   id: string;
//   title: string;
//   description: string;
//   url: string;
//   status: string;
//   icon: React.ReactNode;
// }

// const programs: Program[] = [
//   {
//     id: '1',
//     title: 'Electrum to Pipedrive Integration',
//     description: 'Integration tool for connecting Electrum data with Pipedrive CRM system.',
//     url: 'https://electransform.onrender.com/',
//     status: 'Active',
//     icon: <Calculator className="w-5 h-5 text-white" />
//   },
//   {
//     id: '2',
//     title: 'Load Calculator',
//     description: 'Advanced electrical load calculation tool for EV charger installations.',
//     url: 'https://evnation-load-calculator.vercel.app/',
//     status: 'Active',
//     icon: <Calculator className="w-5 h-5 text-purple-400" />
//   },
//   {
//     id: '3',
//     title: 'Optional Calculator',
//     description: 'Optional features and add-ons calculator for EV charger installations.',
//     url: 'https://evnation-optional-calculator.vercel.app/',
//     status: 'Active',
//     icon: <Settings className="w-5 h-5 text-orange-400" />
//   },
//   {
//     id: '4',
//     title: 'Project Pricing Summary',
//     description: 'Comprehensive project pricing and summary dashboard for all installations.',
//     url: 'https://evnation-master.vercel.app/',
//     status: 'Active',
//     icon: <DollarSign className="w-5 h-5 text-emerald-400" />
//   },
//   {
//     id: '5',
//     title: 'EVnation Main Website',
//     description: 'Official EVnation website with comprehensive information about services.',
//     url: 'https://evnation.us/',
//     status: 'Active',
//     icon: <Globe className="w-5 h-5 text-indigo-400" />
//   }
// ];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredManuals = manuals.filter(manual => {
    const matchesCategory = selectedCategory === 'All' || manual.category === selectedCategory;
    const matchesTag = selectedTag === 'All' || manual.tags.includes(selectedTag);
    const matchesSearch = manual.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manual.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesTag && matchesSearch;
  });

  // const filteredPrograms = programs.filter(program => {
  //   return program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //          program.description.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  const handleDownload = async (pdfUrl: string, title: string, manualId: string) => {
    try {
      console.log(`Downloading ${title} with ID ${manualId}`);
      
      // Use the API route for download
      const response = await fetch(`/api/download/${manualId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Get the blob from the response
      const blob = await response.blob();
      
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title}.pdf`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL object
      window.URL.revokeObjectURL(url);
      
      console.log(`${title} download completed successfully.`);
    } catch (error) {
      console.error('Download error:', error);
      alert('An error occurred during download. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
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
                  <Car className="w-2 h-2 text-yellow-900" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">EVnation</h1>
                <p className="text-blue-200 text-sm">EV Charger Installation Specialist</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex items-center space-x-6 text-white/80"
            >
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">500+ installations completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
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
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">EV Charger</span>
                <br />
                <span className="text-white">Installation Manual</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
                Comprehensive guide for EV Charger installation.
                <br className="hidden md:block" />
                Providing a perfect guide for safe and accurate installation.
              </p>
              
              {/* Stats */}
              <div className="flex justify-center items-center space-x-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">3</div>
                  <div className="text-blue-200 text-sm">Available Manuals</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">1,850</div>
                  <div className="text-blue-200 text-sm">Total Downloads</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">4.9</div>
                  <div className="text-blue-200 text-sm">Average Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search manuals..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex items-center space-x-3">
                  <Filter className="text-gray-400 w-6 h-6" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-6 py-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Tag Filter */}
                <div className="flex items-center space-x-3">
                  <Users className="text-gray-400 w-6 h-6" />
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="px-6 py-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                  >
                    {tags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Manuals Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredManuals.map((manual, index) => (
                <motion.div
                  key={manual.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                              <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300 h-[780px] flex flex-col shadow-xl hover:shadow-2xl">
              {/* Cover Image */}
              <div className="relative h-32 bg-gradient-to-br from-blue-500/30 to-emerald-600/30 flex items-center justify-center overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-600/20"></div>
                <div className="text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  {manual.icon}
                </div>
                      <div className="absolute top-3 right-3">
                        <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-white text-xs font-medium">{manual.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Tags Section */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-emerald-600 text-white text-xs font-medium rounded-full">
                            {manual.category}
                          </span>
                          {manual.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                tag === 'Employee' 
                                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                  : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-1.5 text-gray-300">
                          <Clock className="w-3 h-3" />
                          <span className="text-xs">{manual.pages} pages</span>
                          <span className="text-xs">•</span>
                          <span className="text-xs">
                            {manual.id === '1' ? '206KB' : manual.id === '2' ? '1.8MB' : '708KB'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2 leading-tight">
                        {manual.title}
                      </h3>
                      
                      {/* Manual Type Badge */}
                      <div className="mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                          <Info className="w-3 h-3 mr-1" />
                          {manual.category === 'Company Info' ? 'Company Documentation' : 'Technical Guide'}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-4 leading-relaxed">
                        {manual.description}
                      </p>
                      
                      {/* Key Features */}
                      {manual.keyFeatures && (
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold text-blue-300 mb-2 uppercase tracking-wide">Key Features</h4>
                          <div className="flex flex-wrap gap-1">
                            {manual.keyFeatures.slice(0, 3).map((feature, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-md border border-blue-500/30">
                                {feature}
                              </span>
                            ))}
                            {manual.keyFeatures.length > 3 && (
                              <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-md">
                                +{manual.keyFeatures.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Target Audience */}
                      {manual.targetAudience && (
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold text-emerald-300 mb-1 uppercase tracking-wide">Target Audience</h4>
                          <p className="text-gray-300 text-xs leading-relaxed">{manual.targetAudience}</p>
                        </div>
                      )}
                      
                      {/* Importance Note */}
                      <div className="mb-4 p-3 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-lg border border-blue-500/20">
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="text-xs font-semibold text-yellow-300 mb-1">Important Note</h4>
                            <p className="text-gray-300 text-xs leading-relaxed">
                              {manual.id === '1' 
                                ? 'Essential for all team members to understand company structure and policies.'
                                : manual.id === '2'
                                ? 'Critical for internal communication and client interaction tracking.'
                                : 'Vital for project management and professional client proposals.'
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4 mt-auto">
                        <div className="flex items-center space-x-3 text-xs text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Download className="w-3 h-3" />
                            <span>{manual.downloads?.toLocaleString()}</span>
                          </div>
                          <span>Updated: {manual.lastUpdated}</span>
                        </div>
                      </div>
                      
                      {/* Buttons */}
                      <div className="flex space-x-2 mt-auto">
                        <button
                          onClick={() => handleDownload(manual.pdfUrl, manual.title, manual.id)}
                          className="flex-1 flex items-center justify-center space-x-1.5 px-3 py-2.5 bg-gradient-to-r from-blue-500 to-emerald-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download PDF</span>
                        </button>
                        
                        <Link 
                          href={`/manual/${manual.id}`}
                          className="flex-1 flex items-center justify-center space-x-1.5 px-3 py-2.5 border-2 border-white/30 text-white text-sm font-medium rounded-lg hover:border-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Preview</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredManuals.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-md mx-auto border border-white/20">
                  <Globe className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">
                    No results found
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Try different search terms or categories.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setSelectedTag('All');
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-emerald-700 transition-all duration-300"
                  >
                    View All
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Programs Reference Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">EVnation</span>
                <br />
                <span className="text-white">Program Reference</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Access all essential EVnation tools and applications for efficient EV charger installation management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
            >
              {/* Program Cards */}
                          <a href="https://electransform.onrender.com/" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer h-[220px] flex flex-col shadow-lg hover:shadow-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-emerald-600/30 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Calculator className="w-5 h-5 text-white" />
              </div>
                <h3 className="text-base font-bold text-white mb-2 line-clamp-2 leading-tight">Electrum to PipeDrive</h3>
                <p className="text-gray-300 text-xs mb-3 line-clamp-3 flex-1 leading-relaxed">Integration tool for connecting Electrum data with Pipedrive CRM system.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Active</span>
                  <span className="text-gray-400 text-xs">ElecToPipedrive</span>
                </div>
              </a>

              <a href="https://evnation-load-calculator.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer h-[220px] flex flex-col">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Calculator className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 line-clamp-2 leading-tight">Load Calculator</h3>
                <p className="text-gray-300 text-xs mb-3 line-clamp-3 flex-1 leading-relaxed">Advanced electrical load calculation tool for EV charger installations.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Active</span>
                  <span className="text-gray-400 text-xs">LoadCalculator</span>
                </div>
              </a>

              <a href="https://evnation-optional-calculator.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer h-[220px] flex flex-col">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Settings className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 line-clamp-2 leading-tight">Optional Calculator</h3>
                <p className="text-gray-300 text-xs mb-3 line-clamp-3 flex-1 leading-relaxed">Optional features and add-ons calculator for EV charger installations.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Active</span>
                  <span className="text-gray-400 text-xs">Optional Calculator</span>
                </div>
              </a>

              <a href="https://evnation-master.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer h-[220px] flex flex-col">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 line-clamp-2 leading-tight">Project Pricing Summary</h3>
                <p className="text-gray-300 text-xs mb-3 line-clamp-3 flex-1 leading-relaxed">Comprehensive project pricing and summary dashboard for all installations.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Active</span>
                  <span className="text-gray-400 text-xs">MasterPage</span>
                </div>
              </a>

              <a href="https://evnation.us/" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer h-[220px] flex flex-col">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Globe className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 line-clamp-2 leading-tight">EVnation Main Website</h3>
                <p className="text-gray-300 text-xs mb-3 line-clamp-3 flex-1 leading-relaxed">Official EVnation website with comprehensive information about services.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Active</span>
                  <span className="text-gray-400 text-xs">evnation.us</span>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <Link 
                href="/programs"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                <Globe className="w-5 h-5" />
                <span>View All Programs</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
