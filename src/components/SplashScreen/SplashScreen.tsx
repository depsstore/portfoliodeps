import { useState, useEffect } from "react";
import { Container } from "./styles";

interface SplashScreenProps {
  onFinish: () => void;
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const text = "AUTO HOSTING";
  // State untuk menghitung berapa banyak huruf yang sudah muncul
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    // 1. Suara ketikan (opsional)
    const audio = new Audio("/typing.mp3");
    audio.volume = 0.2;

    if (visibleCount < text.length) {
      // Setiap 150ms, munculkan 1 huruf baru
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
        
        // Mainkan suara (kecuali untuk spasi)
        if (text[visibleCount] !== " ") {
          audio.play().catch(() => {});
        }
      }, 150); 

      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        const container = document.querySelector(".splash-container");
        if (container) container.classList.add("fade-out");
        
        setTimeout(onFinish, 400); 
      }, 500);

      return () => clearTimeout(finishTimer);
    }
  }, [visibleCount, onFinish, text]);

  return (
    <Container className="splash-container">
      <div className="subtitle">DEPSSTORE PRODUCTION</div>
      
      <div className="title-wrapper">
        {/* Pecah teks menjadi array huruf */}
        {text.split("").map((char, index) => {
          // Tampilkan hanya jika index huruf sudah tercapai
          const isVisible = index < visibleCount;

          if (char === " ") {
            return isVisible ? <span key={index} className="space"></span> : null;
          }

          return (
            <span 
              key={index} 
              className="letter" 
              style={{ animationPlayState: isVisible ? "running" : "paused" }}
            >
              {isVisible ? char : ""}
            </span>
          );
        })}
      </div>
    </Container>
  );
}