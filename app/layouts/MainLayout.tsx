import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)] px-4 py-8">
        {children}
      </main>
    </>
  );
}
