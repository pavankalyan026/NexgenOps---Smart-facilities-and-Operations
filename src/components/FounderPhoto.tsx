import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw } from 'lucide-react';
import founderAsset from '../assets/founder-photo.jpg.png';

interface FounderPhotoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'rounded' | 'circle';
  ring?: boolean;
  showUploadTrigger?: boolean;
}

export const FounderPhoto: React.FC<FounderPhotoProps> = ({
  className = '',
  size = 'lg',
  shape = 'rounded',
  ring = true,
  showUploadTrigger = true,
}) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [imgSrcIndex, setImgSrcIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Validate and load custom photo from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('nexgenops_founder_custom_photo');
      if (saved && saved.startsWith('data:image/')) {
        setCustomPhoto(saved);
      } else if (saved) {
        // Clear broken / non-data URI strings that could cause blank images
        localStorage.removeItem('nexgenops_founder_custom_photo');
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  // Ordered fallback chain prioritizing root assets that are guaranteed to serve cleanly
  const sources = [
    customPhoto,
    '/founder.jpg',
    '/founder.png',
    '/1780915862398.png',
    founderAsset,
    '/founder_executive.jpg',
  ].filter(Boolean) as string[];

  const currentSource = sources[imgSrcIndex] || '/founder.jpg';

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setCustomPhoto(result);
        try {
          localStorage.setItem('nexgenops_founder_custom_photo', result);
        } catch {
          // localStorage quota exceeded fallback
        }
        setImgSrcIndex(0);
        setHasError(false);
        setIsLoaded(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem('nexgenops_founder_custom_photo');
    } catch {
      // ignore
    }
    setCustomPhoto(null);
    setImgSrcIndex(0);
    setHasError(false);
    setIsLoaded(false);
  };

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-40 md:w-36 md:h-44',
    xl: 'w-56 h-72 sm:w-64 sm:h-80',
  };

  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-2xl sm:rounded-3xl';

  return (
    <div 
      className={`relative group shrink-0 ${sizeClasses[size]} ${className}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
          processFile(file);
        }
      }}
    >
      <div className={`w-full h-full overflow-hidden bg-slate-200 dark:bg-slate-800 ${shapeClass} ${
        ring ? 'ring-2 ring-cyan-500/60 dark:ring-cyan-500/50 shadow-xl shadow-cyan-950/20 dark:shadow-cyan-950/60' : ''
      }`}>
        {!hasError ? (
          <img
            key={currentSource}
            src={currentSource}
            alt="Pavankalyan Koneti, Founder & Executive Lead, NexgenOps"
            referrerPolicy="no-referrer"
            loading="eager"
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              if (imgSrcIndex < sources.length - 1) {
                setImgSrcIndex((prev) => prev + 1);
              } else {
                setHasError(true);
              }
            }}
            className={`w-full h-full object-cover object-top transition-all duration-300 group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-90'
            }`}
          />
        ) : (
          /* Stylized Fallback Avatar */
          <div className="w-full h-full bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-3 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-600/80 border-2 border-cyan-400/70 flex items-center justify-center text-white font-extrabold text-xl mb-2">
              PK
            </div>
            <div className="text-xs text-white font-bold tracking-tight">
              Pavankalyan Koneti
            </div>
            <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">
              Founder &amp; Executive Lead
            </div>
          </div>
        )}

        {/* Subtle lighting edge vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hidden file input for custom photograph upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
        id="founder-photo-file-input"
      />

      {/* Photo Customizer Controls */}
      {showUploadTrigger && (
        <div className="absolute -bottom-2.5 right-2 z-10 flex items-center gap-1.5">
          <button
            type="button"
            id="upload-founder-photo-btn"
            onClick={() => fileInputRef.current?.click()}
            title="Upload custom photo for Pavankalyan"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-cyan-500/50 text-slate-800 dark:text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 dark:hover:bg-cyan-500 dark:hover:text-slate-950 text-[11px] font-semibold transition-all shadow-md cursor-pointer"
          >
            <Camera className="w-3 h-3 text-cyan-600 dark:text-cyan-400 group-hover:text-slate-950" />
            <span>Update Photo</span>
          </button>
          {customPhoto && (
            <button
              type="button"
              id="reset-founder-photo-btn"
              onClick={handleResetPhoto}
              title="Reset to original founder photo"
              className="p-1 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-rose-500 hover:text-white transition-all shadow-md cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
