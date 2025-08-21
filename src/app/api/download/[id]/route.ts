import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // 실제 구현에서는 데이터베이스에서 메뉴얼 정보를 가져옴
    const manualData = {
      '1': {
        title: '제품 사용자 매뉴얼',
        pdfUrl: '/manuals/product-manual.pdf'
      },
      '2': {
        title: '설치 및 설정 가이드',
        pdfUrl: '/manuals/installation-guide.pdf'
      },
      '3': {
        title: '고급 기능 활용법',
        pdfUrl: '/manuals/advanced-features.pdf'
      },
      '4': {
        title: '문제 해결 가이드',
        pdfUrl: '/manuals/troubleshooting.pdf'
      },
      '5': {
        title: 'API 개발자 문서',
        pdfUrl: '/manuals/api-documentation.pdf'
      },
      '6': {
        title: '보안 가이드라인',
        pdfUrl: '/manuals/security-guidelines.pdf'
      }
    };

    const manual = manualData[id as keyof typeof manualData];
    
    if (!manual) {
      return NextResponse.json(
        { error: '메뉴얼을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    // 실제 구현에서는 PDF 파일을 생성하거나 저장된 파일을 반환
    // 여기서는 샘플 응답을 반환
    return NextResponse.json({
      success: true,
      data: {
        id,
        title: manual.title,
        downloadUrl: manual.pdfUrl,
        message: 'PDF 다운로드가 준비되었습니다.'
      }
    });

  } catch (error) {
    console.error('PDF 다운로드 오류:', error);
    return NextResponse.json(
      { error: 'PDF 다운로드 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
