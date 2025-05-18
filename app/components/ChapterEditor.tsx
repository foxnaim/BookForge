import React from 'react';
import { TextField, Box } from '@mui/material';

export default function ChapterEditor({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <Box className="my-4 w-full">
      <TextField
        label="Текст главы"
        multiline
        minRows={8}
        fullWidth
        value={value}
        onChange={e => onChange(e.target.value)}
        variant="outlined"
        className="bg-white/10 rounded-lg"
      />
    </Box>
  );
} 
