import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

export default function DashboardPage() {
  return (
    <Box>
      <Typography variant='h4' gutterBottom>
        Dashboard Overview
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Total Users
            </Typography>
            <Typography variant='h5'>1,234</Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Revenue
            </Typography>
            <Typography variant='h5'>$12,345</Typography>
          </CardContent>
        </Card>
        {/* Add more cards as needed */}
      </Box>
    </Box>
  );
}
