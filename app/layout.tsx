// app/layout.tsx
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Header />
      <main className="grow">
        <section className="py-24">
          <div className="container mx-auto max-w-7xl">{children}</div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

const work_Sans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DP Portfolio",
  description: "Web Developer Portfolio by DP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${work_Sans.className} flex min-h-screen flex-col antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
