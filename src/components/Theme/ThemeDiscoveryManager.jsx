// src/components/Theme/ThemeDiscoveryManager.jsx
import React, { useState } from 'react';
import DiscoveryPrompt from './DiscoveryPrompt';
import parameters from './core/parameters';
import userDictionary from './core/userDictionary';

const knownComponents = {
    ...parameters.components,
    ...userDictionary.components,
};

const ThemeDiscoveryManager = ({ onAddComponent }) => {
    const [newComponent, setNewComponent] = useState(null);

    // Simulate discovering a new component (can be enhanced to real scanning if needed)
    const simulateDiscovery = (componentName) => {
        if (!knownComponents[componentName]) {
            setNewComponent(componentName);
        }
    };

    const handleAccept = (componentData) => {
        onAddComponent(componentData);
        setNewComponent(null);
    };

    return (
        <>
            <button onClick={() => simulateDiscovery('CoolBadge')}>Simulate Discover "CoolBadge"</button>
            {newComponent && (
                <DiscoveryPrompt componentName={newComponent} onAccept={handleAccept} onReject={() => setNewComponent(null)} />
            )}
        </>
    );
};

export default ThemeDiscoveryManager;