// src/components/Card.jsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CustomCard = ({ title, content, buttonLabel, buttonUrl }) => {
  return (
    <Card style={{ maxWidth: '400px', margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {content}
        </Typography>
        {buttonLabel && (
          <Button variant="contained" href={buttonUrl} style={{ marginTop: '10px' }}>
            {buttonLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomCard;