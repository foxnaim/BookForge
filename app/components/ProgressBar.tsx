import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <Box className="w-full mb-6">
      <Typography variant="body2" color="textSecondary" className="mb-1">Прогресс: {progress}%</Typography>
      <LinearProgress variant="determinate" value={progress} className="h-2 rounded-full bg-gray-700" />
    </Box>
  );
} 
