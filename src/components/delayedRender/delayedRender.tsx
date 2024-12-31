import React, { useState, useEffect, ReactNode } from 'react';

interface DelayedRenderProps {
    delay: number;
    children: ReactNode;
}

export const DelayedRender: React.FC<DelayedRenderProps> = ({ delay, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    return isVisible ? <>{children}</> : null;
};