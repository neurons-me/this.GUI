import React from 'react';
import { useSession } from '../context/SessionContext';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import CleakerPortable from '../components/Cleaker/CleakerPortable';
const neuronsLogoUrl = 'https://www.neurons.me/media/neurons-grey.png';

function HomePage({ environment, host }) {
    const { session } = useSession();

    return (
        <Container maxWidth="md">
            <Box py={4}>
            <Typography variant="h3" align="center" gutterBottom>
                    THIS.GUI
                </Typography>
                <CleakerPortable />
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="body1">Running on: <strong>{host}</strong></Typography>
                        <Typography variant="body1">Environment: <strong>{environment}</strong></Typography>
                        <Typography variant="body1">Session Status: <strong>{session ? 'Active' : 'No Session'}</strong></Typography>
                    </CardContent>
                </Card>
                {/* Logo pequeño alineado a la derecha */}
        <Box display="flex" justifyContent="flex-end" mt={2}>
       <a href="https://neurons.me" target="_blank" rel="noopener noreferrer">
        <img 
            src={neuronsLogoUrl} 
            alt="Neurons Logo" 
            style={{ height: 55, opacity: 0.8, cursor: 'pointer' }} 
        />
    </a>
</Box>
            </Box>
        </Container>
    );
}

export default HomePage;