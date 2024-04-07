"use-client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface TransitionProviderProps {
  children: ReactNode;
}
export const PageWrapper: React.FC<TransitionProviderProps> = ({
  children,
}) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);
