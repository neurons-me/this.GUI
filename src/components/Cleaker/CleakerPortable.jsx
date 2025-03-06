import React, { useState, useEffect, useCallback } from 'react';
import { useSession } from '../../context/SessionContext';

const CleakerPortable = ({ children }) => {
    const { session } = useSession();

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [stylesInjected, setStylesInjected] = useState(false);
    const [relativeOffset, setRelativeOffset] = useState({ right: 16, top: 16 });

    const currentTheme = localStorage.getItem('theme') || 'light';
    const isDark = currentTheme === 'dark';

    // Inject morph animation once
    useEffect(() => {
        if (stylesInjected) return;
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes morphLava {
                0% { border-radius: 48% 52% 50% 50%; }
                25% { border-radius: 52% 48% 45% 55%; }
                50% { border-radius: 50% 50% 55% 45%; }
                75% { border-radius: 48% 52% 50% 50%; }
                100% { border-radius: 50% 50% 50% 50%; }
            }
        `;
        document.head.appendChild(style);
        setStylesInjected(true);
    }, [stylesInjected]);

    // Set initial position (top-right corner)
    useEffect(() => {
        const initialRight = 16; // 16px from the right
        const initialTop = 16;   // 16px from the top

        setRelativeOffset({ right: initialRight, top: initialTop });
        setPosition({
            x: window.innerWidth - 60 - initialRight,
            y: initialTop,
        });
    }, [session]);

    // Handle window resize - reposition to maintain offset from top-right
    const handleResize = () => {
        setPosition({
            x: window.innerWidth - 60 - relativeOffset.right,
            y: relativeOffset.top,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [relativeOffset]);

    // Dragging logic
    const handlePointerDown = (e) => {
        setDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handlePointerMove = useCallback((e) => {
        if (!dragging) return;

        const newX = e.clientX - offset.x;
        const newY = e.clientY - offset.y;

        setPosition({
            x: Math.min(window.innerWidth - 60, Math.max(0, newX)),
            y: Math.min(window.innerHeight - 60, Math.max(0, newY)),
        });
    }, [dragging, offset]);

    const handlePointerUp = () => {
        setDragging(false);
        // After drag, recalculate relative offset from top-right corner
        setRelativeOffset({
            right: window.innerWidth - position.x - 60,
            top: position.y,
        });
    };

    useEffect(() => {
        if (dragging) {
            window.addEventListener('pointermove', handlePointerMove);
            window.addEventListener('pointerup', handlePointerUp);
        } else {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        }
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [dragging, handlePointerMove]);

    return (
        <div
            style={{
                width: '60px',
                height: '60px',
                position: 'fixed',
                cursor: 'grab',
                zIndex: 1000,
                left: position.x,
                top: position.y,
                transform: dragging ? 'scale(1.1)' : 'scale(1)',
                backdropFilter: 'blur(10px)',
                animation: 'morphLava 6s infinite ease-in-out',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.4)'}`,
                boxShadow: `0 0 5px ${isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.3)'}`,
                backgroundColor: 'transparent',
                pointerEvents: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onPointerDown={handlePointerDown}
        >
            <span
                style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)',
                    pointerEvents: 'none',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                .me
            </span>

            {children}
        </div>
    );
};

export default CleakerPortable;