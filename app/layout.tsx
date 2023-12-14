import Header from "@/components/Header";
import { NextThemeProvider } from "@/lib/providers/NextThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Y-UI",
  description: "Y-UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen pt-10 dark:bg-black")}>
        <NextThemeProvider>
          <Header />
          <div className="container max-w-7xl">{children}</div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
