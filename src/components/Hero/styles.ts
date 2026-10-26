import styled, { keyframes } from "styled-components";

// Animasi melayang untuk ikon
const floatIcon = keyframes`
  0%   { transform: translate(-50%, -50%); }
  50%  { transform: translate(-50%, calc(-50% - 10px)); }
  100% { transform: translate(-50%, -50%); }
`;

export const Container = styled.section`
  /* =========================================
     KODE ASLI TEMPLATE (UKURAN DIKEMBALIKAN)
     ========================================= */
  padding-top: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  background: rgba(0,0,0,0);
  position: relative;
  z-index: 1;

  .hero-text{
    flex: 1;
    & > p { font-size: 1.8rem; }
    h1 { font-size: 7rem; }
    h3 { color: var(--blue); margin: 1rem 0; }
    p.small-resume {
      margin-bottom: 5rem;
      max-width: 600px;
      line-height: 1.7;
    }
  }

  .button { padding: 1.4rem 6rem; }

  /* SOSMED & TOMBOL */
  .hero-buttons {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .social-media {
    display: flex;
    gap: 0.8rem;
    .icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      transition: all 0.3s ease;
      img { width: 22px; height: 22px; }
      &:hover {
        background-color: #f5f5f5;
        transform: translateY(-3px);
        border-color: var(--blue);
      }
    }
  }

  .hero-text .button {
    margin-top: 0;
    padding: 1rem 2rem;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    font-weight: 600;
    color: #111;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      border-color: var(--blue);
      color: var(--blue);
    }
  }

  /* =========================================
     AREA GAMBAR
     ========================================= */
  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
  }

  .image-wrapper {
    position: relative;
    width: 450px; 
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    isolation: isolate; 

    /* BINGKAI HIJAU (BLOB ASIMETRIS) */
    .blob-frame {
      position: absolute;
      inset: 0;
      background-color: var(--blue);
      z-index: 1;
      border-radius: 41% 59% 41% 59% / 51% 34% 66% 49%;
    }

    /* FOTO PROFIL */
    .main-profile {
      position: relative;
      z-index: 2;
      width: 96%; 
      height: 96%;
      object-fit: cover;
      object-position: center top;
      border-radius: 41% 59% 41% 59% / 51% 34% 66% 49%;
    }

    /* IKON MELAYANG */
    .floating-icon {
      position: absolute;
      z-index: 3;
      background: #fff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 5px 15px rgba(0,0,0,0.15);
      animation: ${floatIcon} 4s ease-in-out infinite;
      transform: translate(-50%, -50%);
      padding: 10px;

      img, svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

       /* --- RING DALAM (1 s/d 7) --- */
    .icon-1  { top: 12%; left: 50%; animation-delay: 0.1s; } 
    .icon-2  { top: 30%; left: 78%; animation-delay: 0.5s; } 
    .icon-3  { top: 65%; left: 82%; animation-delay: 0.9s; } 
    .icon-4  { top: 85%; left: 65%; animation-delay: 1.3s; } 
    .icon-5  { top: 85%; left: 35%; animation-delay: 1.7s; } 
    .icon-6  { top: 65%; left: 18%; animation-delay: 2.1s; } 
    .icon-7  { top: 30%; left: 22%; animation-delay: 2.5s; } 

    /* --- RING LUAR (8 s/d 14) --- */
    .icon-8  { top: 0%;   left: 50%; animation-delay: 0.3s; } 
    .icon-9  { top: 22%;  left: 95%; animation-delay: 0.7s; } 
    .icon-10 { top: 75%;  left: 98%; animation-delay: 1.1s; } 
    .icon-11 { top: 105%; left: 65%; animation-delay: 1.5s; } 
    .icon-12 { top: 105%; left: 35%; animation-delay: 1.9s; } 
    .icon-13 { top: 75%;  left: 2%;  animation-delay: 2.3s; } 
    .icon-14 { top: 22%;  left: 5%;  animation-delay: 2.7s; } 
  }

  /* RESPONSIVE */
  @media(max-width: 1100px){
    gap: 2rem;
    .image-wrapper {
      width: 380px; height: 380px;
      .floating-icon { width: 45px; height: 45px; padding: 8px; }
    }
  }

  @media(max-width: 960px){
    flex-direction: column-reverse;
    text-align: center;
    padding-top: 15%;

    .hero-text{
      h1{ font-size: 5rem; }
      p.small-resume { margin: 0 auto 3rem auto; }
      .hero-buttons {
        flex-direction: column;
        justify-content: center;
      }
    }

    .image-wrapper {
      width: 350px; height: 350px;
      margin-bottom: 3rem;
      .floating-icon { width: 40px; height: 40px; padding: 7px; }
    }
  }

  @media(max-width: 480px){
    .hero-text h1 { font-size: 3.5rem; }
    .image-wrapper {
      width: 280px; height: 280px;
      .floating-icon { width: 32px; height: 32px; padding: 6px; }
    }
  }
`;