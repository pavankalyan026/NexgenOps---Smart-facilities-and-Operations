import React from 'react';
import { FounderPhotoProps } from '../types';

import founderPhoto from '../assets/founder-photo.jpg.png';

interface Props {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'rounded' | 'circle';
  ring?: boolean;
}

export const FounderPhoto: React.FC<Props> = ({
  className = '',
  size = 'lg',
  shape = 'rounded',
  ring = true,
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-40 md:w-36 md:h-44',
    xl: 'w-56 h-72 sm:w-64 sm:h-80',
  };

  const shapeClass =
    shape === 'circle'
      ? 'rounded-full'
      : 'rounded-2xl sm:rounded-3xl';

  return (
    <div
      className={`relative shrink-0 ${sizeClasses[size]} ${className}`}
    >
      <div
        className={`w-full h-full overflow-hidden bg-slate-200 dark:bg-slate-800 ${shapeClass} ${
          ring
            ? 'ring-2 ring-cyan-500/60 dark:ring-cyan-500/50 shadow-xl shadow-cyan-950/20 dark:shadow-cyan-950/60'
            : ''
        }`}
      >
        <img
          src={founderPhoto}
          alt="Pavankalyan Koneti, Founder & Executive Lead, NexgenOps"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
