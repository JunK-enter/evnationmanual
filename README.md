# Evnation 메뉴얼 라이브러리

Evnation 회사를 위한 모던하고 세련된 메뉴얼 책자 웹사이트입니다. 사용자 친화적인 인터페이스와 우수한 UX를 제공하며, 모든 메뉴얼을 PDF로 다운로드할 수 있습니다.

## 주요 기능

- 📚 **메뉴얼 목록**: 카테고리별로 정리된 메뉴얼 목록
- 🔍 **검색 및 필터링**: 제목과 내용으로 메뉴얼 검색
- 📖 **책 스타일 뷰어**: 페이지 넘어가는 애니메이션과 함께 책처럼 읽기
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- 📄 **PDF 다운로드**: 모든 메뉴얼을 PDF로 다운로드 가능
- 🎨 **모던 UI/UX**: Framer Motion을 활용한 부드러운 애니메이션

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

1. 저장소를 클론합니다:
```bash
git clone <repository-url>
cd evnation-manual
```

2. 의존성을 설치합니다:
```bash
npm install
```

3. 개발 서버를 실행합니다:
```bash
npm run dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

### 빌드

프로덕션 빌드를 생성합니다:

```bash
npm run build
```

### 배포

Vercel을 통한 배포:

1. [Vercel](https://vercel.com)에 로그인
2. 새 프로젝트 생성
3. GitHub 저장소 연결
4. 자동 배포 설정 완료

또는 Vercel CLI를 사용:

```bash
npm i -g vercel
vercel
```

## 프로젝트 구조

```
evnation-manual/
├── src/
│   ├── app/
│   │   ├── page.tsx              # 메인 페이지 (메뉴얼 목록)
│   │   ├── manual/[id]/page.tsx  # 메뉴얼 상세 페이지
│   │   ├── api/download/[id]/    # PDF 다운로드 API
│   │   ├── layout.tsx            # 루트 레이아웃
│   │   └── globals.css           # 전역 스타일
│   └── ...
├── public/                       # 정적 파일
├── vercel.json                   # Vercel 설정
└── package.json
```

## 주요 페이지

### 메인 페이지 (`/`)
- 메뉴얼 목록 그리드 뷰
- 검색 및 카테고리 필터링
- 각 메뉴얼의 기본 정보 표시
- 다운로드 및 상세보기 버튼

### 메뉴얼 상세 페이지 (`/manual/[id]`)
- 책 스타일의 페이지 뷰어
- 페이지 넘어가는 애니메이션
- 확대/축소 기능
- 페이지 네비게이션
- PDF 다운로드 기능

## 커스터마이징

### 메뉴얼 데이터 추가

`src/app/page.tsx`의 `manuals` 배열에 새로운 메뉴얼을 추가할 수 있습니다:

```typescript
const manuals: Manual[] = [
  {
    id: '7',
    title: '새로운 메뉴얼',
    description: '메뉴얼 설명',
    category: '카테고리',
    pages: 30,
    lastUpdated: '2024-01-25',
    coverImage: '/path/to/image',
    pdfUrl: '/manuals/new-manual.pdf'
  }
];
```

### 스타일 수정

Tailwind CSS 클래스를 사용하여 스타일을 수정할 수 있습니다. 전역 스타일은 `src/app/globals.css`에서 관리됩니다.

## API 엔드포인트

### PDF 다운로드 API

```
GET /api/download/[id]
```

메뉴얼 ID를 받아 PDF 다운로드 정보를 반환합니다.

## 성능 최적화

- Next.js App Router의 자동 코드 분할
- 이미지 최적화
- CSS 최적화
- 번들 크기 최소화

## 브라우저 지원

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 라이선스

이 프로젝트는 Evnation 회사 내부 사용을 위한 것입니다.

## 지원

기술 지원이 필요한 경우:
- 이메일: support@evnation.com
- 전화: 1588-0000

---

**Evnation** - 최고의 사용자 경험을 제공합니다.
