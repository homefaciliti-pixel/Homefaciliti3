import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.jpeg";

const PageLoader = ({ isExiting }) => {
  const [tipIndex, setTipIndex] = useState(0);
  const loadingTips = [
    "Connecting you with verified professionals...",
    "Securing premium service providers...",
    "Preparing a seamless home service experience...",
    "Readying our 15-minute response guarantee...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % loadingTips.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`page-loader-overlay ${isExiting ? "fade-out" : ""}`}>
      <div className="loader-content">
        {/* Glow behind the logo */}
        <div className="logo-glow"></div>
        
        {/* Spinning outer gradient ring */}
        <div className="spinner-ring"></div>
        
        {/* Inner pulsing logo */}
        <div className="logo-container">
          <img src={logo} alt="HomeFaciliti Logo" className="pulse-logo" />
        </div>

        {/* Text and loading progress indicator */}
        <div className="loader-text-group">
          <h2 className="brand-name">HomeFaciliti</h2>
          <p className="loading-tip">{loadingTips[tipIndex]}</p>
        </div>

        {/* Linear progress bar at the bottom of the content */}
        <div className="progress-bar-container">
          <div className="progress-bar-fill"></div>
        </div>
      </div>

      <style jsx>{`
        .page-loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: radial-gradient(circle at center, #1e293b 0%, #0f172a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          opacity: 0;
          animation: fade-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .page-loader-overlay.fade-out {
          animation: fade-out 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .loader-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 400px;
          text-align: center;
          padding: 24px;
        }

        /* Ambient Glow behind Logo */
        .logo-glow {
          position: absolute;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(59, 130, 246, 0) 70%);
          filter: blur(25px);
          z-index: 1;
          animation: glow-pulse 2.5s ease-in-out infinite alternate;
        }

        /* Outer Gradient Ring spinning */
        .spinner-ring {
          width: 154px;
          height: 154px;
          border-radius: 50%;
          padding: 3.5px;
          background: linear-gradient(0deg, rgba(37, 99, 235, 0) 30%, #2563eb 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: spin 1.4s linear infinite;
          z-index: 2;
        }

        /* Central Logo Container - Rounded Rectangle styled like the navbar */
        .logo-container {
          position: absolute;
          width: 120px;
          height: 120px;
          background: white;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.2);
          overflow: hidden;
          z-index: 3;
          animation: logo-pulse 2.5s ease-in-out infinite alternate;
        }

        .pulse-logo {
          width: 90%;
          height: 90%;
          object-fit: contain;
          border-radius: 14px;
        }

        .loader-text-group {
          margin-top: 36px;
          z-index: 4;
        }

        .brand-name {
          font-family: 'Outfit', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: white;
          letter-spacing: 1px;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .loading-tip {
          font-size: 14px;
          color: #94a3b8;
          min-height: 24px;
          font-weight: 400;
          transition: opacity 0.3s ease;
          animation: text-pulse 2.5s infinite ease-in-out;
        }

        /* Bottom Progress bar */
        .progress-bar-container {
          width: 200px;
          height: 3px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          margin-top: 24px;
          overflow: hidden;
          z-index: 4;
        }

        .progress-bar-fill {
          height: 100%;
          width: 100%;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 10px;
          transform: translateX(-100%);
          animation: fill-progress 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes glow-pulse {
          0% { transform: scale(0.9); opacity: 0.5; }
          100% { transform: scale(1.1); opacity: 0.9; }
        }

        @keyframes logo-pulse {
          0% { transform: scale(0.97); }
          100% { transform: scale(1.03); }
        }

        @keyframes text-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes fill-progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
