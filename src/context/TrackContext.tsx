import React, { createContext, useContext, useState } from 'react';

export type Track = 'ai' | 'web';

interface TrackContextType {
    track: Track;
    setTrack: (track: Track) => void;
}

const TrackContext = createContext<TrackContextType | undefined>(undefined);

export const TrackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [track, setTrack] = useState<Track>('ai');

    return (
        <TrackContext.Provider value={{ track, setTrack }}>
            {children}
        </TrackContext.Provider>
    );
};

export const useTrack = () => {
    const context = useContext(TrackContext);
    if (context === undefined) {
        throw new Error('useTrack must be used within a TrackProvider');
    }
    return context;
};
