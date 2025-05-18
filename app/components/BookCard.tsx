import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

interface BookCardProps {
  id: string;
  title: string;
  description: string;
  cover: string;
  createdAt: string;
  updatedAt: string;
}

export default function BookCard({ id, title, description, cover, createdAt, updatedAt }: BookCardProps) {
  const router = useRouter();

  return (
    <Card className="h-full flex flex-col">
      <CardMedia
        component="img"
        height="200"
        image={cover || "/default-cover.jpg"}
        alt={title}
        className="object-cover"
      />
      <CardContent className="flex-grow">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="mb-4 line-clamp-3"
        >
          {description}
        </Typography>
        <Box className="mt-auto">
          <Typography variant="caption" color="text.secondary" display="block">
            Создано: {new Date(createdAt).toLocaleDateString('ru-RU')}
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block">
            Обновлено: {new Date(updatedAt).toLocaleDateString('ru-RU')}
          </Typography>
        </Box>
      </CardContent>
      <Box className="p-2">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => router.push(`/preview/${id}`)}
        >
          Просмотреть
        </Button>
      </Box>
    </Card>
  );
} 
