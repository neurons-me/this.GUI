import React from 'react';
import { useSession } from '../context/SessionContext';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';

function HomePage({ environment, host }) {
    const { session } = useSession();

    return (
        <Container maxWidth="md">
            <Box py={4}>
            <Typography variant="h3" align="center" gutterBottom>
                    THIS.GUI
                </Typography>
                <Typography align="RIGHT" gutterBottom>
                    Welcome {session?.username || 'Guest'}
                </Typography>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="body1">Running on: <strong>{host}</strong></Typography>
                        <Typography variant="body1">Environment: <strong>{environment}</strong></Typography>
                        <Typography variant="body1">Session Status: <strong>{session ? 'Active' : 'No Session'}</strong></Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default HomePage;