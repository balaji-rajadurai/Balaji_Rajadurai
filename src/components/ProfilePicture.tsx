import React, { useState, useEffect, useRef } from 'react';
import { Camera, ShieldCheck, Check, Upload, Link as LinkIcon, RefreshCw } from 'lucide-react';

export const ProfilePicture: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [showUploader, setShowUploader] = useState<boolean>(false);
  const [customInput, setCustomInput] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load custom photo if saved by Balaji in browser
  useEffect(() => {
    const saved = localStorage.getItem('balaji_profile_photo');
    if (saved) {
      setPhotoUrl(saved);
    }
  }, []);

  const handleSaveUrl = (url: string) => {
    if (!url.trim()) return;
    setPhotoUrl(url.trim());
    localStorage.setItem('balaji_profile_photo', url.trim());
    setShowUploader(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          setPhotoUrl(base64);
          localStorage.setItem('balaji_profile_photo', base64);
          setShowUploader(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetDefault = () => {
    setPhotoUrl('');
    localStorage.removeItem('balaji_profile_photo');
    setShowUploader(false);
  };

  return (
    <div className="relative group">
      
      {/* Outer Card with Computational Structural Geometric Border */}
      <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[360px] mx-auto rounded-3xl p-3 bg-gradient-to-b from-slate-100 to-slate-200/60 dark:from-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden">
        
        {/* Subtle Finite Element Mesh Wireframe Graphic in Background */}
        {/* <div 
          className="absolute inset-0 opacity-15 dark:opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #059669 1px, transparent 1px), linear-gradient(to bottom, #059669 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        /> */}

        {/* Profile Image Viewport */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60 flex items-center justify-center">
          
          {photoUrl ? (
            <img 
              src={photoUrl} 
              alt="Balaji Rajadurai - Structural Engineer & AI Systems Developer"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Curated Architectural Executive Portrait Rendering for Balaji Rajadurai */
            <div className="w-full h-full relative flex flex-col justify-between p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950 text-white select-none">
              
              {/* Top Structural Geometric Grid Accent */}
              <div className="flex items-center justify-between text-emerald-400/90 text-xs font-mono">
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  M.Tech · NIT Calicut
                </span>
                <span>10+ Yrs Exp</span>
              </div>

              {/* Center Portrait Monogram & Structural Node Iconography */}
              <div className="my-auto flex flex-col items-center text-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-indigo-600 p-[2px] shadow-2xl mb-4 group-hover:rotate-1 transition-transform">
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex flex-col items-center justify-center">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-200">
                      BR
                    </span>
                    <span className="text-[10px] tracking-widest text-emerald-400/80 uppercase font-mono mt-1">
                      Structural AI
                    </span>
                  </div>
                </div>

                <div className="text-xl font-bold tracking-tight text-white">
                  Balaji Rajadurai
                </div>
                <div className="text-xs text-emerald-300/90 mt-1 max-w-[240px]">
                  Structural Engineer &amp; AI Systems Developer
                </div>
              </div>

              {/* Bottom Verification Seal */}
              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-300">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  NIT Calicut Postgraduate
                </span>
                <span className="text-slate-400">FEA · AI · BIM</span>
              </div>
            </div>
          )}

          {/* Quick Photo Customizer Button Overlay (Allows Balaji to easily upload or link his real photo) */}
          {/* <button
            onClick={() => setShowUploader(true)}
            aria-label="Customize profile picture"
            className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white/90 hover:text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 shadow-md flex items-center gap-1 text-[11px]"
            title="Upload or change your profile picture"
          >
            <Camera className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Set Photo</span>
          </button> */}

        </div>

      </div>

      {/* Photo Uploader Modal Dialog */}
      {showUploader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Camera className="w-4 h-4 text-emerald-500" />
                <span>Update Profile Picture</span>
              </h4>
              <button
                onClick={() => setShowUploader(false)}
                className="text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              >
                Cancel
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Upload your personal photo or paste a public image URL (e.g. from LinkedIn, GitHub, or your website). It will be saved instantly to your portfolio.
            </p>

            {/* Option 1: File Upload */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                Option 1: Upload from Device
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2.5 px-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 bg-slate-50 dark:bg-slate-850 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 transition-colors"
              >
                <Upload className="w-4 h-4 text-emerald-500" />
                <span>Choose Image File (JPG, PNG)</span>
              </button>
            </div>

            {/* Option 2: Image URL */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                Option 2: Enter Public Image URL
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/balaji-photo.jpg"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <button
                  onClick={() => handleSaveUrl(customInput)}
                  disabled={!customInput.trim()}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold"
                >
                  Save
                </button>
              </div>
            </div>

            {photoUrl && (
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <button
                  onClick={handleResetDefault}
                  className="text-xs text-rose-500 hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  Reset to default monogram
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
