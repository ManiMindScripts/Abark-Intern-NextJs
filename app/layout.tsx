import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/component/Navbar";


export const metadata: Metadata = {
  title: "Blog",
  description: "Multi Page Blog App with Next.js App Router",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className= "bg-gray-50 text-gray-900">
          <Navbar/>
          <main className="max-w-5xl mx-auto p-6">
        {children}
        </main>
      </body>
    </html>
  );
}
