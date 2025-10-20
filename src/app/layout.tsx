import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
// SessionProvider 제거

export const metadata: Metadata = {
  title: "EVnation Manual Library",
  description: "Comprehensive user manuals for EVnation products and services. Download PDFs anytime for offline access.",
  keywords: "EVnation, manual, user guide, product documentation, technical documentation",
  authors: [{ name: "EVnation" }],
  robots: "index, follow",
  openGraph: {
    title: "EVnation Manual Library",
    description: "Comprehensive user manuals for EVnation products and services.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
