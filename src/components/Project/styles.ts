import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  padding-bottom: 5rem;
  position: relative; 
  z-index: 1;
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: var(--blue);
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    padding: 1rem;
  }

  /* =========================================
     DESAIN KARTU (Preview di Halaman)
     ========================================= */
  .project-card {
    position: relative;
    border-radius: 1.2rem;
    overflow: hidden;
    cursor: pointer;
    background-color: #111;
    border: 1px solid #333;
    transition: 0.3s ease;
    aspect-ratio: 16 / 9; /* Ubah kartu preview jadi 16:9 juga biar konsisten */
    display: flex;
    flex-direction: column;
    justify-content: flex-end; 

    &:hover {
      transform: translateY(-5px);
      border-color: var(--blue);
      box-shadow: 0 10px 25px rgba(0, 255, 135, 0.15);

      .project-image img { transform: scale(1.05); }
    }

    .project-image {
      position: absolute;
      inset: 0;
      z-index: 1;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top; 
        transition: transform 0.5s ease;
      }

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to top,
          rgba(17, 17, 17, 1) 0%,    
          rgba(17, 17, 17, 0.8) 30%,  
          rgba(17, 17, 17, 0) 100%    
        );
      }
    }

    .project-content {
      position: relative;
      z-index: 2;
      padding: 2rem;
      color: #FFF;

      h3 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1.3rem;
        color: #ccc;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    .visit-btn-icon {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 3;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s;

      img { width: 18px; height: 18px; filter: invert(1); }

      &:hover {
        background: var(--blue);
        border-color: var(--blue);
        img { filter: invert(0); }
      }
    }
  }

  /* =========================================
     MODAL POP-UP (KIRI GAMBAR 16:9, KANAN TEKS)
     ========================================= */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999999; 
    padding: 2rem;
  }

  .modal-content {
    background: #212121;
    border-radius: 1.5rem;
    width: 100%;
    max-width: 1100px; /* Lebih lebar agar proporsional */
    
    /* KUNCI: Hapus height tetap, biarkan mengikuti konten */
    display: flex;
    flex-direction: row; 
    position: relative;
    border: 1px solid var(--blue);
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.8);

    .close-btn {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: rgba(0,0,0,0.7);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 50%;
      color: #FFF;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 10; 
      &:hover { background: var(--blue); color: #111; }
    }

    /* KIRI: GAMBAR (Proporsi 16:9) */
    .modal-image {
      flex: 6.5; /* Porsi gambar sedikit lebih besar */
      position: relative;
      display: flex;
      align-items: center; /* Memastikan gambar ke tengah */
      background: #111;
      
      /* Trik agar gambar 16:9 tanpa terpotong */
      img { 
        width: 100%; 
        height: auto;
        aspect-ratio: 16 / 9;
        object-fit: cover; 
        object-position: center; 
        display: block;
      }
    }

    /* KANAN: TEKS & TOMBOL */
    .modal-info {
      flex: 3.5; 
      padding: 3rem 2.5rem;
      overflow-y: auto; 
      display: flex;
      flex-direction: column;

      h3 { font-size: 2.5rem; color: var(--blue); margin-bottom: 1rem; }
      p { font-size: 1.4rem; line-height: 1.6; color: #CCC; margin-bottom: 2rem; }

      .tech-list {
        display: flex; gap: 0.8rem; flex-wrap: wrap; margin-bottom: auto;
        span {
          background: #333; color: var(--blue); padding: 0.5rem 1rem;
          border-radius: 50px; font-size: 1.1rem; font-weight: 600;
        }
      }

      .modal-actions {
        display: flex; gap: 1rem; margin-top: 2rem;
        .btn {
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          padding: 1rem 1.5rem; border-radius: 8px; font-size: 1.2rem; font-weight: 600;
          text-decoration: none; transition: 0.3s; flex: 1;
          img { width: 18px; }
          &.btn-visit {
            background: var(--blue); color: #111;
            &:hover { filter: brightness(0.8); }
          }
          &.btn-download {
            background: transparent; color: #FFF; border: 1px solid #FFF;
            &:hover { background: #FFF; color: #111; }
          }
        }
      }
    }
  }

  /* =========================================
     RESPONSIVE
     ========================================= */
  @media (max-width: 960px) {
    .projects { grid-template-columns: 1fr 1fr; }
    
    /* Modal di tablet & HP jadi ke bawah */
    .modal-content {
      flex-direction: column;
      max-height: 90vh; /* Batasi tinggi agar bisa discroll */
      
      .modal-image { 
        flex: none; 
        width: 100%;
      }
      
      .modal-info { 
        padding: 2rem; 
        flex: 1;
        overflow-y: auto;
      }
    }
  }

  @media (max-width: 740px) {
    .projects { grid-template-columns: 1fr; }
    
    .modal-content {
      .modal-info .modal-actions { flex-direction: column; }
    }
  }
`;