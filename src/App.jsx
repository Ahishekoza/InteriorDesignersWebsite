import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./pages/Home_Page";
import RemoteLayout from "./Layout";
import ProjectPage from "./pages/Project_Page";
import SingleProjectPage from "./pages/SingleProjectPage";

function App() {
  const location = useLocation();

  // Page transition animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
    // Slide in from the left
    },
    animate: {
      opacity: 1,
       // Center position
      transition: {
        duration: 0.5, // Smooth transition duration
      },
    },
    exit: {
      opacity: 0,
      // Slide out to the right
      transition: {
        duration: 0.5, // Smooth exit transition
      },
    },
  };

  return (
    <AnimatePresence mode="wait"> {/* Ensures only one route is rendered at a time */}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <RemoteLayout>
                <HomePage />
              </RemoteLayout>
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <RemoteLayout>
                <ProjectPage />
              </RemoteLayout>
            </motion.div>
          }
        />
        <Route
          path="/project/:projectType"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <RemoteLayout>
                <SingleProjectPage />
              </RemoteLayout>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
