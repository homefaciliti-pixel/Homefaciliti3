const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout-root">
      <div className="auth-glass-container glass animate-fade-in">
        {children}
      </div>

      <style jsx>{`
        .auth-layout-root {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: var(--grad-dark);
          padding: 24px;
        }
        .auth-glass-container {
          width: 100%;
          max-width: 440px;
          padding: 48px;
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.95);
        }
        @media (max-width: 480px) {
          .auth-glass-container { padding: 32px 24px; }
        }
      `}</style>
    </div>
  );
};

export default AuthLayout;