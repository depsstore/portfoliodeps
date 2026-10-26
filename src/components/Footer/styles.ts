import styled from "styled-components";

export const Container = styled.footer`
  background-color: #212121; /* Warna gelap senada dengan tema */
  padding: 4rem 10%; /* Menggunakan persentase agar responsif di layar besar */
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #333;

  .logo {
    font-size: 2.5rem;
    font-weight: bold;
    color: #FFF;
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    transition: color 0.3s;

    span:first-child {
      color: var(--blue); /* Aksen warna hijau di awal teks */
    }

    &:hover {
      color: var(--blue);
    }
  }

  p {
    letter-spacing: 0.1rem;
    font-size: 1.4rem;
    color: #AAA;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    img {
      width: 2.4rem;
      animation: spinning 5s infinite linear;
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    img {
      width: 2.8rem;
      height: 2.8rem;
      object-fit: contain;
    }
  }

  @keyframes spinning {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }

  /* Responsive Tablet */
  @media (max-width: 960px) {
    padding: 3rem 5%;
    flex-direction: column;
    gap: 2.5rem;
    text-align: center;

    p {
      justify-content: center;
    }
  }

  /* Responsive HP */
  @media (max-width: 600px) {
    p {
      font-size: 1.2rem;
    }
    
    .logo {
      font-size: 2rem;
    }
    
    .social-media img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;