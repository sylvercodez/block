import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';

export default function PersonalDetails() {
  return (
    <Box
      sx={{
        width: 600,
        maxWidth: '100%',
      }}
    >
      <Input fullWidth placeholder="First Name" id="" className="forms"/>
      <Input fullWidth placeholder="Middle Name" id="" className="forms"/>
      <Input fullWidth placeholder="Last Name" id="" className="forms"/>
    </Box>
  );
}