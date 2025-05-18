import React from 'react';
import { Modal as MuiModal, Box } from '@mui/material';

export default function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box className="bg-gray-900 text-white p-8 rounded-xl shadow-2xl mx-auto my-24 max-w-lg outline-none">
        {children}
      </Box>
    </MuiModal>
  );
} 
