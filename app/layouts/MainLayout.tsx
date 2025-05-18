'use client';
import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Не показываем Header на hello (/), login и login/register
  const hideHeader = ["/", "/hello", "/login", "/login/register"].includes(pathname);
  return (
    <>
      <AnimatedBackground />
      {!hideHeader && <Header />}
      <main className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)] px-4 py-8">
      {children}
      </main>
    </>
  );
}
