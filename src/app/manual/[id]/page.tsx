'use client';

import { useState, useEffect, use, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  BookOpen, 
  Home,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Star,
  Clock,
  Eye,
  Maximize2,
  Minimize2
} from 'lucide-react';
import Link from 'next/link';
import FlipBook from '@/components/FlipBook';

interface Page {
  id: number;
  title: string;
  content: string;
  image?: string;
}

interface Manual {
  id: string;
  title: string;
  description: string;
  category: string;
  pages: Page[];
  pdfUrl: string;
}

// 샘플 데이터
const sampleManual: Manual = {
  id: '1',
  title: '제품 사용자 매뉴얼',
  description: 'Evnation 제품의 기본 사용법과 기능을 상세히 설명합니다.',
  category: '제품',
  pdfUrl: '/manuals/product-manual.pdf',
  pages: [
    {
      id: 1,
      title: '목차',
      content: `
        <h2>목차</h2>
        <ul>
          <li>1. 제품 소개</li>
          <li>2. 설치 방법</li>
          <li>3. 기본 사용법</li>
          <li>4. 고급 기능</li>
          <li>5. 문제 해결</li>
          <li>6. 기술 지원</li>
        </ul>
      `
    },
    {
      id: 2,
      title: '제품 소개',
      content: `
        <h2>1. 제품 소개</h2>
        <p>Evnation 제품은 최신 기술을 활용하여 사용자에게 최고의 경험을 제공합니다.</p>
        <h3>주요 특징</h3>
        <ul>
          <li>직관적인 사용자 인터페이스</li>
          <li>고성능 처리 능력</li>
          <li>확장 가능한 아키텍처</li>
          <li>24/7 기술 지원</li>
        </ul>
      `
    },
    {
      id: 3,
      title: '설치 방법',
      content: `
        <h2>2. 설치 방법</h2>
        <p>다음 단계를 따라 제품을 설치하세요.</p>
        <h3>시스템 요구사항</h3>
        <ul>
          <li>운영체제: Windows 10 이상, macOS 10.15 이상</li>
          <li>메모리: 최소 8GB RAM</li>
          <li>저장공간: 최소 2GB</li>
          <li>인터넷 연결 필요</li>
        </ul>
        <h3>설치 단계</h3>
        <ol>
          <li>설치 파일을 다운로드합니다.</li>
          <li>다운로드한 파일을 실행합니다.</li>
          <li>라이선스 동의서를 확인하고 동의합니다.</li>
          <li>설치 경로를 선택합니다.</li>
          <li>설치를 완료합니다.</li>
        </ol>
      `
    },
    {
      id: 4,
      title: '기본 사용법',
      content: `
        <h2>3. 기본 사용법</h2>
        <p>제품의 기본적인 사용 방법을 알아보세요.</p>
        <h3>시작하기</h3>
        <p>프로그램을 실행하면 메인 화면이 나타납니다. 좌측 메뉴에서 원하는 기능을 선택할 수 있습니다.</p>
        <h3>주요 기능</h3>
        <ul>
          <li><strong>대시보드:</strong> 전체 현황을 한눈에 확인</li>
          <li><strong>데이터 관리:</strong> 정보 입력, 수정, 삭제</li>
          <li><strong>보고서:</strong> 다양한 형태의 리포트 생성</li>
          <li><strong>설정:</strong> 시스템 환경 설정</li>
        </ul>
      `
    },
    {
      id: 5,
      title: '고급 기능',
      content: `
        <h2>4. 고급 기능</h2>
        <p>고급 사용자를 위한 심화 기능들을 소개합니다.</p>
        <h3>자동화 기능</h3>
        <p>반복적인 작업을 자동화하여 업무 효율을 높일 수 있습니다.</p>
        <h3>API 연동</h3>
        <p>외부 시스템과의 연동을 통해 데이터를 주고받을 수 있습니다.</p>
        <h3>백업 및 복구</h3>
        <p>정기적인 백업을 통해 데이터 손실을 방지할 수 있습니다.</p>
      `
    },
    {
      id: 6,
      title: '문제 해결',
      content: `
        <h2>5. 문제 해결</h2>
        <p>자주 발생하는 문제들과 해결 방법을 안내합니다.</p>
        <h3>일반적인 문제</h3>
        <div class="problem-solution">
          <h4>프로그램이 실행되지 않습니다</h4>
          <p><strong>해결방법:</strong> 시스템 요구사항을 확인하고 재부팅 후 다시 시도해보세요.</p>
        </div>
        <div class="problem-solution">
          <h4>데이터가 저장되지 않습니다</h4>
          <p><strong>해결방법:</strong> 저장 경로의 권한을 확인하고 디스크 공간을 점검해보세요.</p>
        </div>
        <div class="problem-solution">
          <h4>느린 성능</h4>
          <p><strong>해결방법:</strong> 불필요한 프로그램을 종료하고 메모리 사용량을 확인해보세요.</p>
        </div>
      `
    },
    {
      id: 7,
      title: '기술 지원',
      content: `
        <h2>6. 기술 지원</h2>
        <p>추가적인 도움이 필요하시면 언제든지 연락해주세요.</p>
        <h3>지원 채널</h3>
        <ul>
          <li><strong>이메일:</strong> support@evnation.com</li>
          <li><strong>전화:</strong> 1588-0000</li>
          <li><strong>온라인 채팅:</strong> 웹사이트에서 실시간 상담</li>
          <li><strong>FAQ:</strong> 자주 묻는 질문과 답변</li>
        </ul>
        <h3>지원 시간</h3>
        <p>평일: 09:00 - 18:00<br/>
        주말 및 공휴일: 10:00 - 17:00</p>
      `
    }
  ]
};

export default function ManualPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(140);
  const [manual, setManual] = useState<Manual | null>(null);
  const [loading, setLoading] = useState(true);
  const flipRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setManual(sampleManual);
      setLoading(false);
    }, 400);
  }, [id]);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await containerRef.current?.requestFullscreen?.();
      } else {
        await document.exitFullscreen();
      }
    } catch (e) {
      console.error('Fullscreen error', e);
    }
  };

  const nextPage = () => flipRef.current?.flipNext?.();
  const prevPage = () => flipRef.current?.flipPrev?.();

  const handleDownload = async () => {
    if (manual) {
      try {
        console.log(`Downloading ${manual.title}`);
        alert(`${manual.title} 다운로드가 시작됩니다.`);
      } catch (error) {
        console.error('다운로드 오류:', error);
        alert('다운로드 중 오류가 발생했습니다.');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-white text-xl">메뉴얼을 불러오는 중...</p>
        </motion.div>
      </div>
    );
  }

  if (!manual) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">메뉴얼을 찾을 수 없습니다</h2>
          <Link href="/" className="text-blue-300 hover:text-white transition-colors">홈으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-3 text-white hover:text-blue-200 transition-colors">
                <Home className="w-5 h-5" />
                <span className="font-medium">홈</span>
              </Link>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-blue-300" />
                <span className="font-medium text-white">{manual.title}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white/80">
                <Eye className="w-4 h-4" />
                <span className="text-sm">1,234 조회</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">4.8/5.0</span>
              </div>
              <button onClick={handleDownload} className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <Download className="w-4 h-4" />
                <span>PDF 다운로드</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={containerRef} className={`glass-card rounded-3xl overflow-hidden p-4 md:p-8 ${isFullscreen ? 'fixed inset-0 z-50 rounded-none p-4 md:p-8' : ''}`}>
            {/* Fullscreen top bar when active */}
            {isFullscreen && (
              <div className="absolute top-2 right-2 flex items-center gap-2">
                <button onClick={toggleFullscreen} className="px-3 py-2 bg-white/90 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-600">
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {/* Flipbook */}
            <div className={`flex justify-center items-center ${isFullscreen ? 'h-[calc(100vh-4rem)]' : 'h-[85vh]'}`}>
              <FlipBook
                ref={flipRef}
                pages={manual.pages.map(p => ({ id: p.id, content: p.content }))}
                scalePercent={zoom}
                onFlip={(index) => setCurrentPage(index + 1)}
              />
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button onClick={() => setZoom(Math.max(50, zoom - 10))} className="px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors">
                  <ZoomOut className="w-5 h-5" />
                </button>
                <span className="text-white/90 font-medium">{zoom}%</span>
                <button onClick={() => setZoom(Math.min(200, zoom + 10))} className="px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors">
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button onClick={() => setZoom(100)} className="px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors">
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center space-x-6">
                <button onClick={prevPage} className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                  <ChevronLeft className="w-5 h-5" />
                  <span className="font-medium">이전</span>
                </button>
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">{currentPage} / {manual.pages.length}</div>
                </div>
                <button onClick={nextPage} className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                  <span className="font-medium">다음</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button onClick={toggleFullscreen} className="flex items-center space-x-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors">
                  {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                  <span className="hidden md:inline">{isFullscreen ? '축소' : '전체화면'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
