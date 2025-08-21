'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, ArrowRight, Search, Filter, Sparkles, Star, Clock, Users } from 'lucide-react';
import Link from 'next/link';

interface Manual {
  id: string;
  title: string;
  description: string;
  category: string;
  pages: number;
  lastUpdated: string;
  coverImage: string;
  pdfUrl: string;
  rating?: number;
  downloads?: number;
}

const manuals: Manual[] = [
  {
    id: '1',
    title: '제품 사용자 매뉴얼',
    description: 'Evnation 제품의 기본 사용법과 기능을 상세히 설명합니다.',
    category: '제품',
    pages: 45,
    lastUpdated: '2024-01-15',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/product-manual.pdf',
    rating: 4.8,
    downloads: 1250
  },
  {
    id: '2',
    title: '설치 및 설정 가이드',
    description: '시스템 설치부터 초기 설정까지 단계별로 안내합니다.',
    category: '설치',
    pages: 32,
    lastUpdated: '2024-01-10',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/installation-guide.pdf',
    rating: 4.9,
    downloads: 890
  },
  {
    id: '3',
    title: '고급 기능 활용법',
    description: '고급 사용자를 위한 심화 기능과 팁을 제공합니다.',
    category: '고급',
    pages: 28,
    lastUpdated: '2024-01-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/advanced-features.pdf',
    rating: 4.7,
    downloads: 650
  },
  {
    id: '4',
    title: '문제 해결 가이드',
    description: '자주 발생하는 문제들과 해결 방법을 정리했습니다.',
    category: '문제해결',
    pages: 38,
    lastUpdated: '2024-01-12',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/troubleshooting.pdf',
    rating: 4.6,
    downloads: 1100
  },
  {
    id: '5',
    title: 'API 개발자 문서',
    description: '개발자를 위한 API 문서와 예제 코드를 제공합니다.',
    category: '개발',
    pages: 52,
    lastUpdated: '2024-01-05',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/api-documentation.pdf',
    rating: 4.9,
    downloads: 750
  },
  {
    id: '6',
    title: '보안 가이드라인',
    description: '보안 설정과 모범 사례를 안내합니다.',
    category: '보안',
    pages: 25,
    lastUpdated: '2024-01-20',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/security-guidelines.pdf',
    rating: 4.8,
    downloads: 420
  }
];

const categories = ['전체', '제품', '설치', '고급', '문제해결', '개발', '보안'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredManuals = manuals.filter(manual => {
    const matchesCategory = selectedCategory === '전체' || manual.category === selectedCategory;
    const matchesSearch = manual.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manual.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = async (pdfUrl: string, title: string) => {
    try {
      console.log(`Downloading ${title} from ${pdfUrl}`);
      alert(`${title} 다운로드가 시작됩니다.`);
    } catch (error) {
      console.error('다운로드 오류:', error);
      alert('다운로드 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Animated Background */}
              <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

      {/* Header */}
      <header className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center glow-effect">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-yellow-900" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Evnation</h1>
                <p className="text-blue-200 text-sm">메뉴얼 라이브러리</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex items-center space-x-6 text-white/80"
            >
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">1,234명 사용 중</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">4.8/5.0</span>
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
                <span className="gradient-text">Evnation</span>
                <br />
                <span className="text-white">메뉴얼 라이브러리</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
                모든 제품과 서비스에 대한 상세한 가이드를 제공합니다. 
                <br className="hidden md:block" />
                언제든지 PDF로 다운로드하여 오프라인에서도 확인하세요.
              </p>
              
              {/* Stats */}
              <div className="flex justify-center items-center space-x-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">6</div>
                  <div className="text-blue-200 text-sm">메뉴얼</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">5,060</div>
                  <div className="text-blue-200 text-sm">다운로드</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">4.8</div>
                  <div className="text-blue-200 text-sm">평점</div>
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
              className="glass-card rounded-3xl p-8"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="메뉴얼 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex items-center space-x-3">
                  <Filter className="text-gray-400 w-6 h-6" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-6 py-4 bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
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
                  <div className="glass-card rounded-3xl overflow-hidden hover-lift">
                    {/* Cover Image */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
                      <BookOpen className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm font-medium">{manual.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                          {manual.category}
                        </span>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{manual.pages}페이지</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {manual.title}
                      </h3>
                      
                      <p className="text-gray-600 text-base mb-6 line-clamp-2 leading-relaxed">
                        {manual.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Download className="w-4 h-4" />
                            <span>{manual.downloads?.toLocaleString()}</span>
                          </div>
                          <span>업데이트: {manual.lastUpdated}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleDownload(manual.pdfUrl, manual.title)}
                          className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                        >
                          <Download className="w-4 h-4" />
                          <span>다운로드</span>
                        </button>
                        
                        <Link 
                          href={`/manual/${manual.id}`}
                          className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                        >
                          <ArrowRight className="w-4 h-4" />
                          <span>보기</span>
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
                <div className="glass-card rounded-3xl p-12 max-w-md mx-auto">
                  <BookOpen className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    검색 결과가 없습니다
                  </h3>
                  <p className="text-gray-600 mb-6">
                    다른 검색어나 카테고리를 시도해보세요.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('전체');
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    전체 보기
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
