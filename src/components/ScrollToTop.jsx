import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top left corner of the page
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs every time the URL path changes

  return null; // This component doesn't render any UI
};

export default ScrollToTop;
