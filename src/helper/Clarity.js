// src/hooks/useClarity.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useClarity() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && window.clarity) {
      // set a custom tag with the current path (useful for filters)
      window.clarity("set", "pagePath", location.pathname + location.search);
      // optionally create a custom event
      window.clarity("event", "routeChange");
    }
  }, [location]);
}
