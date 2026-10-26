import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
  align-items: stretch;

  /* Kartu Grafik (Kiri) */
  .graph-card {
    flex: 2;
    background-color: #161b22; /* Warna gelap khas GitHub */
    border: 1px solid #30363d;
    border-radius: 12px;
    padding: 2rem;
    overflow: hidden;

    .graph-header {
      margin-bottom: 2rem;
      h3 {
        color: #c9d1d9;
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
    
    .graph-wrapper {
      /* Memaksa library menyesuaikan lebar container */
      width: 100%;
      overflow-x: auto;
      display: flex;
      justify-content: flex-start;
    }
  }

  /* Kartu Profil (Kanan) */
  .profile-card {
    flex: 1;
    background-color: #161b22;
    border: 1px solid #30363d;
    border-radius: 12px;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .avatar-wrapper {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #30363d;
      margin-bottom: 1.5rem;

      .avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .user-info {
      margin-bottom: 2rem;
      
      h3 {
        color: #c9d1d9;
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
      
      .username {
        color: #8b949e;
        font-size: 1.4rem;
      }
    }

    .stats-grid {
      display: flex;
      gap: 1rem;
      width: 100%;
      margin-bottom: 2rem;

      .stat-box {
        flex: 1;
        background-color: #21262d;
        border: 1px solid #30363d;
        border-radius: 8px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        strong {
          color: #c9d1d9;
          font-size: 1.8rem;
        }
        span {
          color: #8b949e;
          font-size: 1.2rem;
          margin-top: 0.5rem;
          font-weight: 600;
        }
      }
    }

    .btn-github {
      width: 100%;
      background-color: #21262d;
      color: #c9d1d9;
      border: 1px solid #30363d;
      padding: 1.2rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 600;
      transition: 0.3s;

      img {
        width: 20px;
        height: 20px;
        filter: invert(1);
      }

      &:hover {
        background-color: #30363d;
        border-color: #8b949e;
      }
    }
  }

  /* Responsive HP */
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;