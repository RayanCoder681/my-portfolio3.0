import React from 'react';

interface IconProps {
  d: string | string[];
  size?: number;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
}

export const Icon: React.FC<IconProps> = ({
  d,
  size = 20,
  stroke = 'currentColor',
  fill = 'none',
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {Array.isArray(d)
      ? d.map((path, i) => <path key={i} d={path} />)
      : <path d={d} />}
  </svg>
);

export const icons: Record<string, string | string[]> = {
  sun: 'M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 5a7 7 0 100 14A7 7 0 0012 5z',
  moon: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z',
  menu: 'M3 12h18M3 6h18M3 18h18',
  x: 'M18 6L6 18M6 6l12 12',
  github: [
    'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
  ],
  linkedin: [
    'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z',
    'M2 9h4v12H2z',
    'M4 6a2 2 0 100-4 2 2 0 000 4z',
  ],
  mail: [
    'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
    'M22 6l-10 7L2 6',
  ],
  send: 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z',
  brain: 'M9.5 2a2.5 2.5 0 014.8-.8A2.5 2.5 0 0119 4.5a2.5 2.5 0 01-4.8.8A2.5 2.5 0 019.5 2zM14.5 2a2.5 2.5 0 00-4.8-.8A2.5 2.5 0 005 4.5a2.5 2.5 0 004.8.8A2.5 2.5 0 0014.5 2zM4 9h16M4 9a3 3 0 010-6M20 9a3 3 0 000-6M4 9v12M20 9v12M4 21h16',
  cpu: [
    'M9 3H5a2 2 0 00-2 2v4m6-6h6m-6 0v18m6-18h4a2 2 0 012 2v4m-6-6v18m6-18v4m0 0H3m18 0v4M3 7h18M3 7v4m18-4v4M3 11h18M3 11v4m18-4v4M3 15h18M3 15v6m18-6v6',
  ],
  code: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  layers: [
    'M12 2L2 7l10 5 10-5-10-5z',
    'M2 17l10 5 10-5',
    'M2 12l10 5 10-5',
  ],
  database: [
    'M12 2C6.48 2 2 4.24 2 7s4.48 5 10 5 10-2.24 10-5-4.48-5-10-5z',
    'M2 7v5c0 2.76 4.48 5 10 5s10-2.24 10-5V7',
    'M2 12v5c0 2.76 4.48 5 10 5s10-2.24 10-5v-5',
  ],
  cloud: 'M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z',
  zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  activity: 'M22 12h-4l-3 9L9 3l-3 9H2',
  network: [
    'M9 3H5a2 2 0 00-2 2v4m6-6h6m-6 0v18m6 0H9m6 0h4a2 2 0 002-2v-4M15 3v18',
    'M3 9h18M3 15h18',
  ],
  externalLink: [
    'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6',
    'M15 3h6v6',
    'M10 14L21 3',
  ],
  globe: [
    'M12 2a10 10 0 100 20A10 10 0 0012 2z',
    'M2 12h20',
    'M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z',
  ],
  monitor: ['M23 19H1', 'M1 3h22v13H1z', 'M8 19l-2 2m10-2l2 2'],
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
};
