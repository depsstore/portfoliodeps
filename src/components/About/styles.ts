import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Kiri Gambar, Kanan Teks */
  gap: 4rem;
  align-items: center;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--blue);
  }

  h3{
    margin-top: 2rem;
    color: var(--blue);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    text-align: justify; /* Agar teks rata kanan-kiri */
  }
  
  /* BAGIAN GAMBAR (KIRI) */
  .about-image {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1; /* Posisi Kiri */
    grid-row: 1;

    /* Style untuk gambar baru */
    .illustration-img {
      width: 100%;
      max-width: 450px;
      height: auto;
      object-fit: contain;
      border-radius: 12px;
    }

    > div{
      width: min(42rem, 100%);
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  /* BAGIAN TEKS (KANAN) */
  .about-text{
    grid-column: 2; /* Posisi Kanan */
    grid-row: 1;
  }

  @media (max-width: 960px){
    display: flex;
    flex-direction: column-reverse; /* Di HP, gambar di atas teks */
    text-align: center;

    .hard-skills{
      justify-content: center;
    }

    .about-image{
      display: flex;
      justify-content: center;
      max-width: 100%;
      margin-bottom: 5rem;
      grid-column: auto;
      grid-row: auto;
    }

    .about-text{
      grid-column: auto;
      grid-row: auto;
    }
    
    p {
      text-align: center;
    }
  }
`;