'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Download, 
  ArrowLeft, 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users,
  BookOpen,
  AlertTriangle,
  Info,
  Phone,
  FileText
} from 'lucide-react';
import Link from 'next/link';
import LiveChatBot from '@/components/LiveChatBot';

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
    lastUpdated: '2025-09-08',
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
    lastUpdated: '2025-09-08',
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
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/projectpricingsum.pdf',
    rating: 4.8,
    downloads: 280,
    icon: <FileText className="w-6 h-6 text-white" />,
    keyFeatures: ['Client Information Management', 'Load Calculations', 'Cost Estimation', 'PDF Report Generation', 'Project Tracking', 'Professional Proposals'],
    targetAudience: 'EVnation project managers and sales team'
  },
  {
    id: '4',
    title: 'Client Advisor $50 Gift Card Process',
    description: 'Complete process guide for rewarding dealership Client Advisors with $50 Amazon Gift Cards or Zelle payments for successful EV charger installation referrals. Includes verification steps, communication templates, tracking procedures, and payout schedules to maintain strong dealer relationships.',
    category: 'Process',
    tags: ['Employee', 'Sales'],
    pages: 12,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/evref.pdf',
    rating: 4.9,
    downloads: 150,
    icon: <Users className="w-6 h-6 text-white" />,
    keyFeatures: ['Advisor Verification', 'Communication Templates', 'Gift Card Distribution', 'Tracking & Payout', 'Dealer Relationship Management'],
    targetAudience: 'EVnation sales team and project coordinators'
  },
  {
    id: '5',
    title: 'Invoicing & Billing Manual',
    description: 'Comprehensive guide for EVnation\'s invoicing and billing processes including invoice generation, payment tracking, client billing procedures, financial reporting, and accounts receivable management. Essential for maintaining accurate financial records and ensuring timely payments.',
    category: 'Finance',
    tags: ['Employee', 'Admin'],
    pages: 28,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/Billing.pdf',
    rating: 4.8,
    downloads: 95,
    icon: <FileText className="w-6 h-6 text-white" />,
    keyFeatures: ['Invoice Generation', 'Payment Tracking', 'Client Billing', 'Financial Reporting', 'Accounts Receivable', 'Payment Processing'],
    targetAudience: 'EVnation administrative staff and project managers'
  },
  {
    id: '6',
    title: 'EVnation Troubleshooting Guide for Home Chargers',
    description: 'Comprehensive troubleshooting guide for EVnation\'s supported home charger models: Emporia, ChargePoint, and Mercedes-Benz. Includes step-by-step solutions for connection issues, charging problems, app connectivity, Wi-Fi setup, and error message resolution to ensure optimal charger performance.',
    category: 'Technical',
    tags: ['Employee', 'Electrician'],
    pages: 22,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/trouble.pdf',
    rating: 4.9,
    downloads: 420,
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    keyFeatures: ['Emporia Troubleshooting', 'ChargePoint Troubleshooting', 'Mercedes-Benz Troubleshooting', 'Connection Issues', 'App Connectivity', 'Error Resolution'],
    targetAudience: 'EVnation technicians and customer support team'
  },
  {
    id: '7',
    title: 'EVnation Electrician Process Manual',
    description: 'Complete process manual for EVnation electricians covering certification requirements, insurance compliance, proper photo documentation procedures, and installation standards. Essential guide for maintaining quality installations and ensuring proper documentation for job verification and payment processing.',
    category: 'Process',
    tags: ['Employee', 'Electrician'],
    pages: 18,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/electrician.pdf',
    rating: 4.8,
    downloads: 180,
    icon: <Building2 className="w-6 h-6 text-white" />,
    keyFeatures: ['Electrician Requirements', 'EVITP Certification', 'Insurance Compliance', 'Photo Documentation', 'Installation Standards', 'Quality Control'],
    targetAudience: 'EVnation certified electricians and installation teams'
  },
  {
    id: '8',
    title: 'Electrical Panel Upgrade Procedure Manual',
    description: 'Comprehensive procedure manual for electrical panel upgrades covering utility coordination, permit processes, installation procedures, grounding requirements, and inspection protocols. Applicable to SCE, SDG&E, LADWP, PG&E, RPU, and other AHJ jurisdictions.',
    category: 'Technical',
    tags: ['Employee', 'Electrician'],
    pages: 16,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/Electrical Panel Upgrade Procedure Manual.pdf',
    rating: 4.9,
    downloads: 95,
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    keyFeatures: ['Utility Coordination', 'Permit Process', 'Panel Installation', 'Grounding Requirements', 'Inspection Protocols', 'Code Compliance'],
    targetAudience: 'EVnation certified electricians and project managers'
  }
];

const categories = ['All', 'Company Info', 'Integration', 'Process', 'Finance', 'Technical'];
const tags = ['All', 'Employee', 'Electrician', 'Sales', 'Admin'];

export default function ManualsPage() {
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

  const handleDownload = async (pdfUrl: string, title: string, manualId: string) => {
    try {
      console.log(`Downloading ${title} with ID ${manualId}`);
      
      const response = await fetch(`/api/download/${manualId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title}.pdf`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
      console.log(`${title} download completed successfully.`);
    } catch (error) {
      console.error('Download error:', error);
      alert('An error occurred during download. Please try again.');
    }
  };

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
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Technical Manuals</h1>
                <p className="text-blue-200 text-sm">Comprehensive Documentation</p>
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
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Technical
                </span>
                <br />
                <span className="text-white">Manuals</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Access comprehensive technical documentation, company policies, and operational guidelines.
                <br className="hidden md:block" />
                Essential resources for all EVnation team members.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Statistics */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">8</div>
                  <div className="text-blue-200 text-sm font-medium">Available Manuals</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">2,790</div>
                  <div className="text-blue-200 text-sm font-medium">Total Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.9</div>
                  <div className="text-blue-200 text-sm font-medium">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">8</div>
                  <div className="text-blue-200 text-sm font-medium">Success Processes</div>
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
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 h-[480px] flex flex-col shadow-xl">
                    {/* Cover Image */}
                    <div className="relative h-24 bg-gradient-to-br from-blue-500/30 to-emerald-600/30 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-600/20"></div>
                      <div className="text-white drop-shadow-lg">
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
                    <div className="p-4 flex-1 flex flex-col">
                      {/* Tags Section */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex flex-wrap gap-1.5">
                          <span className={`px-3 py-1.5 text-white text-xs font-medium rounded-full ${
                            manual.category === 'Company Info' 
                              ? 'bg-gradient-to-r from-blue-500 to-emerald-600'
                              : manual.category === 'Integration'
                              ? 'bg-gradient-to-r from-emerald-500 to-blue-600'
                              : manual.category === 'Process'
                              ? 'bg-gradient-to-r from-purple-500 to-pink-600'
                              : manual.category === 'Finance'
                              ? 'bg-gradient-to-r from-orange-500 to-red-600'
                              : 'bg-gradient-to-r from-red-500 to-orange-600'
                          }`}>
                            {manual.category}
                          </span>
                          {manual.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                tag === 'Employee' 
                                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                  : tag === 'Sales'
                                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                  : tag === 'Admin'
                                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
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
                            {manual.id === '1' ? '206KB' : manual.id === '2' ? '1.8MB' : manual.id === '3' ? '708KB' : manual.id === '4' ? '156KB' : manual.id === '5' ? '2.1MB' : manual.id === '6' ? '892KB' : manual.id === '7' ? '1.2MB' : '456KB'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                        {manual.title}
                      </h3>
                      
                      {/* Manual Type Badge */}
                      <div className="mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                          <Info className="w-3 h-3 mr-1" />
                          {manual.category === 'Company Info' ? 'Company Documentation' : manual.category === 'Process' ? 'Process Guide' : manual.category === 'Finance' ? 'Financial Guide' : manual.category === 'Technical' ? 'Troubleshooting Guide' : 'Technical Guide'}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">
                        {manual.description}
                      </p>
                      
                      {/* Key Features */}
                      {manual.keyFeatures && (
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {manual.keyFeatures.slice(0, 2).map((feature, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-md border border-blue-500/30">
                                {feature}
                              </span>
                            ))}
                            {manual.keyFeatures.length > 2 && (
                              <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-md">
                                +{manual.keyFeatures.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between mb-3 mt-auto">
                        <div className="flex items-center space-x-3 text-xs text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Download className="w-3 h-3" />
                            <span>{manual.downloads?.toLocaleString()}</span>
                          </div>
                          <span>Updated: {manual.lastUpdated}</span>
                        </div>
                      </div>
                      
                      {/* Buttons */}
                      <div className="flex space-x-2 mt-auto pt-3 border-t border-white/10">
                        <button
                          onClick={() => handleDownload(manual.pdfUrl, manual.title, manual.id)}
                          className="flex-1 flex items-center justify-center space-x-1.5 px-3 py-2.5 bg-gradient-to-r from-blue-500 to-emerald-600 text-white text-xs font-semibold rounded-lg shadow-lg"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download PDF</span>
                        </button>
                        
                        <Link 
                          href={`/manual/${manual.id}`}
                          className="flex-1 flex items-center justify-center space-x-1.5 px-3 py-2.5 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white text-xs font-semibold rounded-lg shadow-lg"
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
                  <BookOpen className="w-20 h-20 text-gray-400 mx-auto mb-6" />
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
      </main>
      
      {/* Live Chat Bot */}
      <LiveChatBot />
    </div>
  );
}
