import { ReactNode, Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { workSans } from "@/utils/fonts";
import Loading from "@/components/Loading";
import { Providers } from "@/providers/AuthProvider";

export const metadata: Metadata = {
  title: "Umurava App",
  description: "Umurava skills challenge ( Landing page and Dashboard )",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body className={`${workSans.className} antialiased`} >
        <Providers>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
