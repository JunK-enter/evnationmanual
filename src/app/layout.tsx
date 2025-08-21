import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evnation 메뉴얼 라이브러리",
  description: "Evnation 제품과 서비스에 대한 상세한 사용자 매뉴얼을 제공합니다. 언제든지 PDF로 다운로드하여 오프라인에서도 확인하세요.",
  keywords: "Evnation, 매뉴얼, 사용자 가이드, 제품 설명서, 기술 문서",
  authors: [{ name: "Evnation" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Evnation 메뉴얼 라이브러리",
    description: "Evnation 제품과 서비스에 대한 상세한 사용자 매뉴얼을 제공합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
