
import React from 'react';

export const ProfilePicture: React.FC = () => {
  return (
    <div className="relative group">
      <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[360px] mx-auto rounded-3xl p-3 bg-gradient-to-b from-slate-100 to-slate-200/60 dark:from-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden">

        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60">
          <img
            src="/src/components/Balaji.jpg"
            alt="Balaji Rajadurai"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

      </div>
    </div>
  );
};
