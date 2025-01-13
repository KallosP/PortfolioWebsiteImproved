import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top before rendering
  }, [pathname]);

  return null;
};

export default ScrollToTop;
