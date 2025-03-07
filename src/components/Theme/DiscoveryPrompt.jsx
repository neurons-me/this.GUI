// src/components/Theme/DiscoveryPrompt.jsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const DiscoveryPrompt = ({ componentName, onAccept, onReject }) => {
    const [borderRadius, setBorderRadius] = useState('');
    const [boxShadow, setBoxShadow] = useState('');
    const [description, setDescription] = useState(`Discovered component: ${componentName}`);

    const handleAccept = () => {
        const componentData = {
            [componentName]: {
                description,
                borderRadius,
                boxShadow,
                required: false,
            }
        };
        onAccept(componentData);
    };

    return (
        <Dialog open>
            <DialogTitle>Discovered New Component: {componentName}</DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <TextField label="Border Radius" value={borderRadius} onChange={(e) => setBorderRadius(e.target.value)} />
                    <TextField label="Box Shadow" value={boxShadow} onChange={(e) => setBoxShadow(e.target.value)} />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onReject}>Reject</Button>
                <Button onClick={handleAccept}>Accept & Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DiscoveryPrompt;