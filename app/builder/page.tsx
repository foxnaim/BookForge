"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import Stepper from "@/app/components/Stepper";
import CoverSelector from "@/app/components/CoverSelector";
import ChapterEditor from "../components/ChapterEditor";
import ProgressBar from "../components/ProgressBar";

const steps = [
  "Выбор жанра",
  "Выбор обложки",
  "Создание глав",
  "Предпросмотр",
];

export default function Builder() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [bookData, setBookData] = useState<{
    genre: string;
    cover: string;
    chapters: string[];
    title: string;
    description: string;
  }>({
    genre: "",
    cover: "",
    chapters: [],
    title: "",
    description: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSave = async () => {
    try {
      const res = await fetch("/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      if (res.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  if (status === "loading") {
    return (
      <Container className="flex items-center justify-center min-h-screen">
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className="py-8">
      <Box className="mb-8">
        <Typography variant="h4" gutterBottom>
          Создание книги
        </Typography>
        <ProgressBar progress={(activeStep / (steps.length - 1)) * 100} />
      </Box>
      <Stepper activeStep={activeStep} />

      {activeStep === 0 && (
        <Box className="mt-8">
          <Typography variant="h6" gutterBottom>
            Выберите жанр вашей книги
          </Typography>
          {/* Здесь будет компонент выбора жанра */}
        </Box>
      )}

      {activeStep === 1 && (
        <Box className="mt-8">
          <Typography variant="h6" gutterBottom>
            Выберите обложку
          </Typography>
          <CoverSelector
            selected={bookData.cover}
            onSelect={(cover) =>
              setBookData((prev) => ({ ...prev, cover }))
            }
          />
        </Box>
      )}

      {activeStep === 2 && (
        <Box className="mt-8">
          <Typography variant="h6" gutterBottom>
            Создайте главы вашей книги
          </Typography>
          <ChapterEditor
            value={bookData.chapters[0] || ""}
            onChange={v =>
              setBookData(prev => ({ ...prev, chapters: [v] }))
            }
          />
        </Box>
      )}

      {activeStep === 3 && (
        <Box className="mt-8">
          <Typography variant="h6" gutterBottom>
            Предпросмотр книги
          </Typography>
          {/* Здесь будет компонент предпросмотра */}
        </Box>
      )}
    </Container>
  );
} 
