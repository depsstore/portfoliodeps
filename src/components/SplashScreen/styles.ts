import styled, { keyframes } from "styled-components";

// Animasi hilang (fade out seluruh layar)
const fadeOut = keyframes`
  0% { opacity: 1; visibility: visible; }
  100% { opacity: 0; visibility: hidden; }
`;

// Animasi huruf meluncur dari bawah ke atas
const slideUpLetter = keyframes`
  0% { transform: translateY(120%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  
  /* Background pakai tema asal (gelap/terang) */
  background-color: var(--black, #212121); 
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  z-index: 9999999;
  font-family: "Arial Rounded MT Bold", Arial, sans-serif;
  
  &.fade-out {
    animation: ${fadeOut} 0.4s ease-in-out forwards;
  }

  .subtitle {
    font-size: 1.8rem;
    letter-spacing: 2px;
    color: var(--text, #aaaaaa);
    margin-bottom: 0.5rem; /* Rapat ke bawah */
    text-transform: uppercase;
  }

  .title-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden; /* Penting agar huruf yang naik dari bawah terpotong rapi */
    padding-bottom: 10px;
  }

  /* Desain huruf */
  .letter {
    font-size: 8rem;
    font-weight: bold;
    color: #ffffff;
    line-height: 1;
    letter-spacing: 0; /* Rapat tanpa spasi */
    
    /* Animasi meluncur dari bawah */
    opacity: 0;
    transform: translateY(120%);
    animation: ${slideUpLetter} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }

  /* Jika ada spasi di antara kata */
  .space {
    width: 3rem;
  }

  @media (max-width: 768px) {
    .letter {
      font-size: 4rem;
    }
    .subtitle {
      font-size: 1.2rem;
    }
  }
`;