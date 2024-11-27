import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "一个简历",
  description: "一个简历",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {children}
        <footer className="text-center my-4">
          <p className="text-gray-600 text-sm">
            Powered by <a href="https://github.com/minimua/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">minimua</a>
          </p>
        </footer>
      </body>
    </html>
  );
}