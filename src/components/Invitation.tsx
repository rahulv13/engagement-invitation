import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Envelope from './Envelope';
import InvitationContent from './InvitationContent';

export default function Invitation() {
  const [opened, setOpened] = useState(false);

  return (
    <div className={`w-full min-h-full relative bg-[#fcfbf9] text-zinc-800 font-sans ${!opened ? 'h-full overflow-hidden' : ''}`}>
        <AnimatePresence>
            {!opened && (
                <Envelope onOpen={() => setOpened(true)} />
            )}
        </AnimatePresence>
        
        {opened && (
            <InvitationContent />
        )}
    </div>
  );
}
