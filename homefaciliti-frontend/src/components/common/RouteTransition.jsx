import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader";

const RouteTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [pendingLocation, setPendingLocation] = useState(null);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      setIsExiting(false);
      setPendingLocation(location);
    }
  }, [location, displayLocation.pathname]);

  useEffect(() => {
    if (pendingLocation) {
      const swapTimer = setTimeout(() => {
        setDisplayLocation(pendingLocation);
        setPendingLocation(null);
        setIsExiting(true);
      }, 350);

      return () => clearTimeout(swapTimer);
    }
  }, [pendingLocation]);

  useEffect(() => {
    if (isExiting) {
      const doneTimer = setTimeout(() => {
        setIsTransitioning(false);
        setIsExiting(false);
      }, 350);

      return () => clearTimeout(doneTimer);
    }
  }, [isExiting]);

  const renderedChildren = React.cloneElement(children, {
    location: displayLocation,
  });

  return (
    <>
      {isTransitioning && <PageLoader isExiting={isExiting} />}
      {renderedChildren}
    </>
  );
};

export default RouteTransition;
