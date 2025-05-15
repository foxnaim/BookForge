// app/layout.tsx
import MainLayout from "./layouts/MainLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

