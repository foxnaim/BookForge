"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Typography, Box, Button, Grid, CircularProgress } from "@mui/material";
import BookCard from "@/components/BookCard";

interface Book {
  _id: string;
  title: string;
  description: string;
  cover: string;
  createdAt: string;
  updatedAt: string;
}

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("/api/books");
        const data = await res.json();
        if (res.ok) {
          setBooks(data);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchBooks();
    }
  }, [session]);

  if (status === "loading" || loading) {
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
          Профиль
        </Typography>
        <Typography variant="body1" className="mb-4">
          Email: {session?.user?.email}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/builder")}
        >
          Создать новую книгу
        </Button>
      </Box>

      <Box>
        <Typography variant="h5" gutterBottom>
          Мои книги
        </Typography>
        {books.length === 0 ? (
          <Typography variant="body1" className="text-gray-500">
            У вас пока нет созданных книг
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {books.map((book) => (
              <Grid item xs={12} sm={6} md={4} key={book._id}>
                <BookCard
                  id={book._id}
                  title={book.title}
                  description={book.description}
                  cover={book.cover}
                  createdAt={book.createdAt}
                  updatedAt={book.updatedAt}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
} 
