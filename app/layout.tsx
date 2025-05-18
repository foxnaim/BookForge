// app/layout.tsx
'use client';
import MainLayout from "./layouts/MainLayout";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <SessionProvider>
        <MainLayout>
          {children}
        </MainLayout>
        </SessionProvider>
      </body>
    </html>
  );
}

