# Google OAuth 설정 가이드

## 1. Google Cloud Console 설정

### 1.1 프로젝트 생성
1. [Google Cloud Console](https://console.cloud.google.com/)에 접속
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. 프로젝트 이름: "EVnation Manual System"

### 1.2 OAuth 동의 화면 설정
1. **API 및 서비스** > **OAuth 동의 화면** 이동
2. **외부** 사용자 유형 선택
3. 앱 정보 입력:
   - 앱 이름: "EVnation Manual System"
   - 사용자 지원 이메일: admin@evnation.us
   - 개발자 연락처 정보: admin@evnation.us

### 1.3 OAuth 2.0 클라이언트 ID 생성
1. **API 및 서비스** > **사용자 인증 정보** 이동
2. **+ 사용자 인증 정보 만들기** > **OAuth 2.0 클라이언트 ID** 선택
3. 애플리케이션 유형: **웹 애플리케이션**
4. 이름: "EVnation Manual System"
5. 승인된 자바스크립트 원본:
   - `http://localhost:3000` (개발용)
   - `https://yourdomain.com` (프로덕션용)
6. 승인된 리디렉션 URI:
   - `http://localhost:3000/api/auth/callback/google` (개발용)
   - `https://yourdomain.com/api/auth/callback/google` (프로덕션용)

### 1.4 클라이언트 ID 및 시크릿 복사
- 클라이언트 ID와 클라이언트 시크릿을 복사하여 환경 변수에 설정

## 2. 환경 변수 설정

`.env.local` 파일에 다음 값들을 설정하세요:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# Company Domain Restriction
ALLOWED_DOMAIN=evnation.us
```

## 3. 도메인 제한 설정

### 3.1 Google Workspace 설정 (선택사항)
Google Workspace를 사용하는 경우:
1. Google Admin Console에서 OAuth 앱 승인 설정
2. 도메인 제한 활성화
3. @evnation.us 도메인만 허용하도록 설정

### 3.2 코드 레벨 도메인 제한
현재 구현된 코드에서 자동으로 @evnation.us 도메인만 허용됩니다.

## 4. 보안 설정

### 4.1 프로덕션 환경
- `NEXTAUTH_SECRET`을 강력한 랜덤 문자열로 변경
- HTTPS 사용 필수
- 도메인 화이트리스트 설정

### 4.2 추가 보안 조치
- IP 제한 (필요시)
- 2단계 인증 권장
- 정기적인 토큰 갱신

## 5. 테스트

### 5.1 로컬 테스트
1. 개발 서버 실행: `npm run dev`
2. `http://localhost:3000/login` 접속
3. Google 로그인 테스트
4. @evnation.us 도메인 계정으로 로그인 확인

### 5.2 도메인 제한 테스트
1. 다른 도메인 계정으로 로그인 시도
2. 접근 거부 확인
3. @evnation.us 도메인만 허용되는지 확인

## 6. 문제 해결

### 6.1 일반적인 오류
- **redirect_uri_mismatch**: 리디렉션 URI가 Google Console 설정과 일치하지 않음
- **invalid_client**: 클라이언트 ID/시크릿이 잘못됨
- **access_denied**: 도메인 제한으로 인한 접근 거부

### 6.2 디버깅
- 브라우저 개발자 도구에서 네트워크 탭 확인
- NextAuth 로그 활성화
- 환경 변수 확인

## 7. 배포 시 주의사항

1. 프로덕션 도메인을 Google Console에 추가
2. 환경 변수를 프로덕션 서버에 설정
3. HTTPS 인증서 설정
4. 도메인 DNS 설정 확인
