import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { SessionProvider } from './context/SessionContext';

function detectEnvironment() {
    const host = window.location.hostname;

    if (host.includes('localhost') || host.includes('127.0.0.1')) {
        return { environment: 'local', host };
    }

    if (host.includes('dev') || host.includes('staging')) {
        return { environment: 'staging', host };
    }

    return { environment: 'production', host };
}

const { environment, host } = detectEnvironment();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SessionProvider>
            <App environment={environment} host={host} />
        </SessionProvider>
    </StrictMode>,
);