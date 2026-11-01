import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useLocation as useMotionLocation, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import ErrorBoundary from "./components/ErrorBoundary";

const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-black text-neutral-400" role="status" aria-live="polite">
      <span className="inline-flex items-center gap-3 text-sm">
        <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
        Loading page…
      </span>
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.18 });
  return <motion.div aria-hidden="true" className="vg-scroll-progress" style={{ scaleX }} />;
}

function RouteTransition({ children }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="route-transition"
      initial={reduceMotion ? false : { opacity: 0, y: 14, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -8, filter: "blur(2px)" }}
      transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <SEO />
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<RouteTransition><HomePage /></RouteTransition>} />
            <Route path="/services" element={<RouteTransition><ServicesPage /></RouteTransition>} />
            <Route path="/portfolio" element={<RouteTransition><PortfolioPage /></RouteTransition>} />
            <Route path="/about" element={<RouteTransition><AboutPage /></RouteTransition>} />
            <Route path="/contact" element={<RouteTransition><ContactPage /></RouteTransition>} />
            <Route path="*" element={<RouteTransition><HomePage /></RouteTransition>} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </ErrorBoundary>
  );
}
