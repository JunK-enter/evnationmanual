'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Users, 
  Handshake, 
  MessageSquare, 
  Clock, 
  Shield, 
  Heart, 
  Target, 
  Award,
  CheckCircle,
  ArrowLeft,
  Search,
  X
} from 'lucide-react';
import Link from 'next/link';
import LiveChatBot from '@/components/LiveChatBot';

interface EtiquetteItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'communication' | 'professionalism' | 'safety' | 'culture';
  importance: 'high' | 'medium' | 'low';
}

const etiquetteItems: EtiquetteItem[] = [
  {
    id: 1,
    title: "Keep Your Area Clean and Organized",
    description: "Maintain a tidy workspace at all times. Dispose of trash properly and avoid cluttering shared areas.",
    icon: <Users className="w-6 h-6" />,
    category: 'professionalism',
    importance: 'high'
  },
  {
    id: 2,
    title: "Adjust the Height of Your Desk",
    description: "Stand up and work whenever possible, as this is beneficial for your posture and back health. Ensure your desk and chair are set to ergonomic positions.",
    icon: <Target className="w-6 h-6" />,
    category: 'safety',
    importance: 'high'
  },
  {
    id: 3,
    title: "Be Mindful of Smells",
    description: "Avoid strong perfumes, colognes, or food odors that may disturb colleagues. Consume meals in designated break areas rather than at your desk. Do not store leftovers or open food containers in drawers to prevent pests or mold.",
    icon: <Heart className="w-6 h-6" />,
    category: 'culture',
    importance: 'medium'
  },
  {
    id: 4,
    title: "Minimize Noise and Use Headphones",
    description: "Keep phone conversations at a low volume or move to a conference room. Use headphones for music and keep the volume low to avoid disturbing others. Be conscious of excessive typing or mouse noise.",
    icon: <MessageSquare className="w-6 h-6" />,
    category: 'communication',
    importance: 'high'
  },
  {
    id: 5,
    title: "Stay Home if You're Sick",
    description: "Avoid coming to the office when feeling unwell to prevent spreading illness. Notify your supervisor if you will be working from home. HR will provide tissues and sanitizer, especially during flu season.",
    icon: <Shield className="w-6 h-6" />,
    category: 'safety',
    importance: 'high'
  },
  {
    id: 6,
    title: "Avoid the Rumor Mill",
    description: "Refrain from gossip and unverified information. Focus on positive news, teamwork, and accomplishments. Address concerns directly and respectfully.",
    icon: <Handshake className="w-6 h-6" />,
    category: 'communication',
    importance: 'high'
  },
  {
    id: 7,
    title: "Respect Privacy and Personal Space",
    description: "Do not enter a colleague's workspace without prior notice. Always ask before borrowing personal or office items. Use calendar updates or signs to indicate when you need uninterrupted focus time.",
    icon: <Clock className="w-6 h-6" />,
    category: 'professionalism',
    importance: 'high'
  },
  {
    id: 8,
    title: "Food and Lunch Breaks",
    description: "Take meals in designated lunch or break areas. Be respectful of shared spaces by cleaning up after yourself. Follow scheduled lunch break times to maintain workflow balance.",
    icon: <Award className="w-6 h-6" />,
    category: 'culture',
    importance: 'medium'
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'communication': return 'from-blue-500 to-cyan-500';
    case 'professionalism': return 'from-emerald-500 to-teal-500';
    case 'safety': return 'from-red-500 to-pink-500';
    case 'culture': return 'from-purple-500 to-indigo-500';
    default: return 'from-gray-500 to-slate-500';
  }
};

const getImportanceColor = (importance: string) => {
  switch (importance) {
    case 'high': return 'bg-red-500/20 text-red-300 border-red-500/30';
    case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    case 'low': return 'bg-green-500/20 text-green-300 border-green-500/30';
    default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  }
};

export default function EtiquettePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImportance, setSelectedImportance] = useState<string>('all');

  // Get unique categories and importance levels
  const categories = ['all', ...Array.from(new Set(etiquetteItems.map(item => item.category)))];
  const importanceLevels = ['all', ...Array.from(new Set(etiquetteItems.map(item => item.importance)))];

  // Filter items based on search and filters
  const filteredItems = etiquetteItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesImportance = selectedImportance === 'all' || item.importance === selectedImportance;
    
    return matchesSearch && matchesCategory && matchesImportance;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedImportance('all');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
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
                <h1 className="text-2xl font-bold text-white">Back to Home</h1>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Workplace Etiquette</h1>
                <p className="text-emerald-200 text-sm">Professional Guidelines</p>
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
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Workplace Etiquette
                </span>
                <br />
                <span className="text-white">Guidelines</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Essential guidelines for maintaining a professional, collaborative, and safe work environment at EVnation.
                <br className="hidden md:block" />
                These principles ensure our team operates with excellence and mutual respect.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20"
            >
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search guidelines..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  {/* Category Filter */}
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm font-medium">Category:</span>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedCategory === category
                              ? 'bg-emerald-500 text-white'
                              : 'bg-white/10 text-gray-300 hover:bg-white/20'
                          }`}
                        >
                          {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Importance Filter */}
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm font-medium">Importance:</span>
                    <div className="flex flex-wrap gap-2">
                      {importanceLevels.map((importance) => (
                        <button
                          key={importance}
                          onClick={() => setSelectedImportance(importance)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedImportance === importance
                              ? 'bg-emerald-500 text-white'
                              : 'bg-white/10 text-gray-300 hover:bg-white/20'
                          }`}
                        >
                          {importance === 'all' ? 'All' : importance === 'high' ? 'Critical' : importance === 'medium' ? 'Important' : 'Standard'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                {(searchTerm || selectedCategory !== 'all' || selectedImportance !== 'all') && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 text-red-300 border border-red-500/30 rounded-full text-sm font-medium hover:bg-red-500/30 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Clear Filters</span>
                  </button>
                )}
              </div>

              {/* Results Count */}
              <div className="mt-4 text-center">
                <span className="text-gray-300 text-sm">
                  Showing {filteredItems.length} of {etiquetteItems.length} guidelines
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Guidelines List */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6 mb-16">
              {filteredItems.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">No guidelines found</h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Try adjusting your search terms or filters to find what you&apos;re looking for.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              ) : (
                filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
                    <div className="flex items-start space-x-6">
                      {/* Number Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                          {item.id}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-white leading-tight">
                            {item.title}
                          </h3>
                          <span className={`px-4 py-2 rounded-full text-sm font-medium border ml-4 flex-shrink-0 ${getImportanceColor(item.importance)}`}>
                            {item.importance === 'high' ? 'Critical' : item.importance === 'medium' ? 'Important' : 'Standard'}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="flex items-center space-x-4">
                          {/* Category Badge */}
                          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(item.category)} bg-opacity-20 text-white border border-current border-opacity-30`}>
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                          
                          {/* Icon */}
                          <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(item.category)} rounded-xl flex items-center justify-center`}>
                            <div className="text-white">
                              {item.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                ))
              )}
            </div>

            {/* Summary Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Key Principles */}
                <div className="text-center lg:text-left">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Principles</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our guidelines are built on the foundation of respect, professionalism, and continuous improvement.
                  </p>
                </div>

                {/* Implementation */}
                <div className="text-center lg:text-left">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    These guidelines are actively practiced and reinforced through regular team training and feedback.
                  </p>
                </div>

                {/* Benefits */}
                <div className="text-center lg:text-left">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Benefits</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Creating a positive work environment that enhances productivity, collaboration, and employee satisfaction.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Live Chat Bot */}
      <LiveChatBot />
    </div>
  );
}
