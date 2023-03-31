import React, { useState, useEffect } from "react";

const ScrollButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = currentScrollPos > 150;
    setIsVisible(isVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-button"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            right: 10,
            bottom: 20,
            background: "yellow",
            border: "none",
            transform: "rotate(180deg)",
            borderRadius: "50%",
            padding: 10,
          }}
        >
          <img
            src="/assets/dropdown-icon.svg"
            alt="dropdown icon"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
