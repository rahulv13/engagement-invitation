import React from 'react';
import { motion } from 'motion/react';

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, delay: 0.8 } }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-[#fffcf9] p-4"
    >
        {/* Envelope Base Details */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          exit={{ y: -50, opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="relative w-full max-w-sm aspect-[3/4.5] border border-amber-900/10 rounded-none bg-[#fffcf9] shadow-xl flex flex-col items-center justify-center pt-8 overflow-hidden"
        >
            {/* Background Texture/Lines */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, #d4af37 0px, #d4af37 1px, transparent 1px, transparent 10px)` }}></div>
            
            <motion.div 
               exit={{ opacity: 0, transition: { duration: 0.3 } }} 
               className="text-center space-y-2 px-6 z-10 relative flex flex-col items-center justify-start h-full pt-16"
            >
                <div className="space-y-6">
                   <div className="w-14 h-14 border border-amber-900/20 rounded-full mx-auto flex items-center justify-center italic text-amber-900 text-xl font-serif mb-6">M&N</div>
                   <div className="space-y-1">
                       <p className="font-serif italic text-amber-800 text-base">You are warmly invited to the</p>
                       <h2 className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 pt-2 pb-2">Engagement Ceremony</h2>
                   </div>
                   <div className="py-2">
                       <h1 className="font-serif text-4xl text-gray-900 leading-tight mb-2">Mayur<br/>&amp; Nisha</h1>
                       <div className="h-[1px] w-12 bg-amber-300 mx-auto"></div>
                   </div>
                </div>
            </motion.div>

            {/* Top Flap Overlay for Envelope Look */}
            <motion.div 
              exit={{ rotateX: 180, opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
              style={{ transformOrigin: 'top center' }}
              className="absolute top-0 left-0 w-full h-[60%] border-b border-amber-900/10 bg-[#fffcf9] shadow-[0_4px_12px_rgba(0,0,0,0.03)] z-20"
              clipPath="polygon(0 0, 100% 0, 50% 100%)"
            >
               {/* Inner lip shadow */}
               <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/5 to-transparent"></div>
            </motion.div>

            <motion.div 
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              className="absolute bottom-0 left-0 w-full h-[50%] bg-[#fffcf9] border-t border-amber-900/10 shadow-[0_-4px_12px_rgba(0,0,0,0.02)] z-10"
              clipPath="polygon(0 100%, 100% 100%, 100% 0, 50% 40%, 0 0)"
            />

            {/* The Wax Seal */}
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
              <motion.button 
                onClick={onOpen}
                exit={{ scale: 0, opacity: 0, transition: { duration: 0.4 } }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-[#8b1d1d] shadow-xl border-4 border-[#6e1616] flex items-center justify-center relative cursor-pointer"
              >
                  <span className="text-white font-serif text-3xl select-none">M&amp;N</span>
                  <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse pointer-events-none"></div>
              </motion.button>
              
              <motion.div 
                animate={{ opacity: [0.6, 1, 0.6] }} 
                transition={{ repeat: Infinity, duration: 2.5 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-900 opacity-60 whitespace-nowrap font-sans"
              >
                Press to Open
              </motion.div>
            </div>
        </motion.div>
    </motion.div>
  );
}
