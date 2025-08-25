'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Download, 
  ArrowLeft, 
  Star, 
  Clock, 
  Phone,
  FileText,
  Info,
  AlertTriangle,
  BookOpen,
  Users,
  CheckCircle
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

export default function ManualPage() {
  const params = useParams();
  const manualId = params.id as string;
  
  const manual = manuals.find(m => m.id === manualId);
  
  if (!manual) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Manual Not Found</h1>
          <p className="text-blue-200 mb-8">The requested manual could not be found.</p>
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-emerald-700 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Manuals</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleDownload = async () => {
    try {
      console.log(`Downloading ${manual.title} with ID ${manual.id}`);
      
      // Use the API route for download
      const response = await fetch(`/api/download/${manual.id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Get the blob from the response
      const blob = await response.blob();
      
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${manual.title}.pdf`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL object
      window.URL.revokeObjectURL(url);
      
      console.log(`${manual.title} download completed successfully.`);
    } catch (error) {
      console.error('Download error:', error);
      alert('An error occurred during download. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-4 text-white hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-6 h-6" />
              <span className="text-lg font-medium">Back to Manuals</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white/80">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm">Manual Preview</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            {/* Manual Header */}
            <div className="flex items-start space-x-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-emerald-600/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                {manual.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-emerald-600 text-white text-sm font-medium rounded-full">
                    {manual.category}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                    <Info className="w-3 h-3 mr-1" />
                    {manual.category === 'Company Info' ? 'Company Documentation' : 'Technical Guide'}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-white mb-3">{manual.title}</h1>
                
                <div className="flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{manual.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>{manual.downloads?.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{manual.pages} pages</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>Updated: {manual.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">{manual.description}</p>
            </div>

            {/* Key Features */}
            {manual.keyFeatures && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {manual.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Target Audience */}
            {manual.targetAudience && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">Target Audience</h2>
                <div className="flex items-center space-x-3 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <Users className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">{manual.targetAudience}</span>
                </div>
              </div>
            )}

            {/* Importance Note */}
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-xl border border-blue-500/20">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">Important Note</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {manual.id === '1' 
                      ? 'This manual is essential for all team members to understand company structure and policies. It provides the foundation for effective communication and operational procedures within EVnation.'
                      : manual.id === '2'
                      ? 'This manual is critical for internal communication and client interaction tracking. Proper use of RingCentral ensures seamless team collaboration and professional client communication.'
                      : 'This manual is vital for project management and professional client proposals. The Master Page tool is the cornerstone of our project delivery process and client relationship management.'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="border-t border-white/20 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-white mb-2">Ready to Download?</h3>
                  <p className="text-gray-300 text-sm">
                    Download this manual as a PDF file for offline access and easy sharing.
                  </p>
                </div>
                
                <button
                  onClick={handleDownload}
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
