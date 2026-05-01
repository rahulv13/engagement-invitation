import React from 'react';

export default function ResponsiveWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-[100dvh] w-full selection:bg-brand-red/20 font-sans flex flex-col items-center justify-center bg-white md:bg-[#e5e7eb] overflow-hidden">
      
      {/* Ambient Glow - Only visible on desktop */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,182,193,0.3)_0%,rgba(173,216,230,0.3)_100%)] blur-[80px] z-0 pointer-events-none"></div>
      
      {/* Adaptive Frame */}
      <div className="
         relative w-full h-[100dvh] shrink-0 z-20 bg-white md:bg-[#1a1a1a]
         md:w-[330px] md:h-[680px] md:rounded-[54px] md:p-[12px] md:-translate-y-[10px]
         md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3),inset_0_-2px_10px_rgba(255,255,255,0.1)]
         md:border-2 md:border-white/5
         transition-all duration-500 ease-in-out
      ">
         {/* Phone Buttons (Visible only on md+) */}
         <div className="hidden md:block absolute inset-0 pointer-events-none">
           <div className="absolute -left-[3px] top-28 w-[3px] h-14 bg-[#2a2a2a] rounded-l-md"></div>
           <div className="absolute -left-[3px] top-44 w-[3px] h-14 bg-[#2a2a2a] rounded-l-md"></div>
           <div className="absolute -right-[3px] top-36 w-[3px] h-20 bg-[#2a2a2a] rounded-r-md"></div>
         </div>

         {/* Notch */}
         <div className="hidden md:block absolute top-[12px] left-1/2 -translate-x-1/2 w-[130px] h-[28px] bg-[#1a1a1a] rounded-b-[18px] z-30 pointer-events-none"></div>

         {/* Inner Screen */}
         <div className="
             relative w-full h-full flex flex-col bg-[#fffcf9] overflow-hidden
             md:rounded-[42px]
         ">
            {/* Status Bar */}
            <div className="hidden md:flex h-12 shrink-0 justify-between items-center px-8 pt-4 text-[11px] font-bold text-gray-900 font-sans z-20 absolute top-0 w-full pointer-events-none">
               <span>9:41</span>
               <div className="flex gap-1.5 items-center">
                  <div className="w-4 h-2.5 bg-black/20 rounded-sm relative">
                     <div className="absolute left-0 top-0 h-full w-[80%] bg-black rounded-sm"></div>
                  </div>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
               </div>
            </div>

           {/* Screen Content Wrapper */}
           <div className="flex-1 w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar scroll-smooth relative md:pt-10 md:pb-6">
             {children}
           </div>

           {/* Home Indicator */}
           <div className="hidden md:flex shrink-0 h-4 justify-center items-end absolute bottom-1 w-full pointer-events-none">
             <div className="h-1 w-32 bg-black/10 rounded-full mb-2"></div>
           </div>
         </div>
      </div>

      {/* Desktop Helper Typography */}
      <div className="absolute bottom-8 right-8 text-right hidden lg:block z-30 pointer-events-none">
         <p className="text-gray-400 font-sans text-xs font-medium uppercase tracking-widest">Digital Invitation Preview</p>
         <p className="text-gray-900 font-serif text-lg italic">Engagement • 2026</p>
      </div>
      
    </div>
  );
}
