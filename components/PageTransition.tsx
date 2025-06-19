'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>

      <motion.div
        key={pathname}
        initial={{ opacity: 0, }}
        animate={{ opacity: 1,  }}
        exit={{ opacity: 0, }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        // style={{ width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
