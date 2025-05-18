import React from 'react';
import { Card, CardContent, Typography, Chip } from '@mui/material';

export default function BookCard({ title, status }: { title: string; status: string }) {
  return (
    <Card className="bg-white/10 text-white shadow-lg hover:shadow-xl transition">
      <CardContent>
        <Typography variant="h6" className="mb-2">{title}</Typography>
        <Chip label={status} color={status === 'завершено' ? 'success' : 'warning'} size="small" className="mt-2" />
      </CardContent>
    </Card>
  );
} 
