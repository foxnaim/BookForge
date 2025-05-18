import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export default function Loader() {
  return (
    <Box className="flex justify-center items-center py-8">
      <CircularProgress color="primary" size={48} thickness={4} />
    </Box>
  );
}
