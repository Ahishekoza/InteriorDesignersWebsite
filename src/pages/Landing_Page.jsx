import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const LandingPage = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [moveUp, setMoveUp] = useState(false);

  useEffect(() => {
    // Start moving up after 2 seconds
    const moveUpTimer = setTimeout(() => {
      setMoveUp(true);
    }, 3000);

    // Hide completely after animation finishes
    const hideTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 2s delay + 1s animation

    return () => {
      clearTimeout(moveUpTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!showSplash) return <Outlet />;

  return (
    <>
       <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-green dark:bg-neutral-900 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-full flex flex-col items-center justify-center"
            initial={{ y: 0 }}
            animate={moveUp ? { y: "-100vh" } : { y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {/* Animated Logo */}
            <motion.div
              className="w-32 h-32 mb-8 rounded-full border-2 border-mango-orange flex items-center justify-center text-2xl font-light tracking-widest text-white dark:text-neutral-100"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              ID
            </motion.div>

            {/* Loading Bar */}
            <div className="w-48 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-mango-orange"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeOut" }}
              />
            </div>

            {/* Optional Tagline */}
            <motion.p
              className="mt-6 text-white dark:text-neutral-400 font-light tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Crafting Beautiful Spaces
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};
