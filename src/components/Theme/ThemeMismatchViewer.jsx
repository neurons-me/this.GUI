// ThemeMismatchViewer.jsx
import React from 'react';
import parameters from './core/parameters';
import currentThemeValues from './data/neurons.theme.json'; // Later make this dynamic
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';

const ThemeMismatchViewer = () => {
    const compareKeys = (parametersSection, themeSection) => {
        const requiredKeys = Object.keys(parametersSection).filter(key => parametersSection[key].required);
        const themeKeys = Object.keys(themeSection || {});

        const missingKeys = requiredKeys.filter(key => !themeKeys.includes(key));
        const extraKeys = themeKeys.filter(key => !parametersSection[key]);

        return { missingKeys, extraKeys };
    };

    const renderSection = (title, parametersSection, themeSection) => {
        const { missingKeys, extraKeys } = compareKeys(parametersSection, themeSection);

        return (
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6">{title}</Typography>
                <List>
                    {missingKeys.map(key => (
                        <ListItem key={`missing-${key}`}>
                            <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                            <ListItemText primary={`Missing required key: ${key}`} />
                        </ListItem>
                    ))}
                    {extraKeys.map(key => (
                        <ListItem key={`extra-${key}`}>
                            <ListItemIcon><WarningIcon color="warning" /></ListItemIcon>
                            <ListItemText primary={`Extra key found: ${key}`} />
                        </ListItem>
                    ))}
                    {missingKeys.length === 0 && extraKeys.length === 0 && (
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                            <ListItemText primary="All keys match the design contract!" />
                        </ListItem>
                    )}
                </List>
            </Box>
        );
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Theme Validator - Mismatch Report</Typography>
            {renderSection('Typography', parameters.typography, currentThemeValues.typography)}
            {renderSection('Palette', parameters.palette, currentThemeValues.palette)}
            {renderSection('Components', parameters.components, currentThemeValues.components)}
        </Box>
    );
};

export default ThemeMismatchViewer;