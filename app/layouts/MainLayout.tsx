import AnimatedBackground from "../components/AnimatedBackground";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatedBackground />
      {children}
    </>
  );
}
