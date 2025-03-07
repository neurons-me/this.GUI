// ThemeDictionaryViewer.jsx
import React from 'react';
import parameters from './core/parameters';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';

const ThemeDictionaryViewer = () => {
    const renderSection = (title, section) => (
        <>
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>{title}</Typography>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Key</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Required</TableCell>
                            <TableCell>Properties</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(section).map(([key, value]) => (
                            <TableRow key={key}>
                                <TableCell>{key}</TableCell>
                                <TableCell>{value.description}</TableCell>
                                <TableCell>{value.required ? '✅' : '❌'}</TableCell>
                                <TableCell>{Object.keys(value).filter(k => k !== 'description' && k !== 'required').join(', ')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Design Dictionary - Parameters</Typography>
            {renderSection('Typography', parameters.typography)}
            {renderSection('Palette', parameters.palette)}
            {renderSection('Components', parameters.components)}
        </Box>
    );
};

export default ThemeDictionaryViewer;