import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 100%;

  /* =========================================
     1. DESAIN TABEL KONTAK
     ========================================= */
  .contact-table {
    width: 100%;
    max-width: 900px; 
    display: flex;
    flex-direction: column;
    border-top: 1px solid #333;

    .table-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 1.5rem;
      border-bottom: 1px solid #333;
      text-decoration: none;
      transition: all 0.3s ease;

      .label {
        flex: 1;
        font-size: 1.2rem;
        font-weight: 500;
        color: #888;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
      }

      .value {
        flex: 2;
        font-size: 1.6rem;
        font-weight: 600;
        color: #FFF; 
        transition: color 0.3s ease;
      }

      .icon {
        display: flex;
        align-items: center;
        color: #aaa;
        transition: all 0.3s ease;
      }

      &:hover {
        background-color: rgba(0, 255, 135, 0.05); 
        .value { color: var(--blue); }
        .icon {
          color: var(--blue); 
          transform: translate(3px, -3px); 
        }
      }
    }
  }

  /* =========================================
     2. DESAIN GITHUB DASHBOARD
     ========================================= */
  .github-dashboard {
    width: 100%;
    max-width: 900px;
    margin-top: 4rem;
    background-color: #161b22; 
    border: 1px solid #30363d;
    border-radius: 12px;
    padding: 2rem;

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      border-bottom: 1px solid #30363d;
      padding-bottom: 1.5rem;

      .user-info {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2px solid #30363d;
        }

        h3 { color: #FFF; font-size: 2rem; margin-bottom: 0.3rem; }
        p { color: #8b949e; font-size: 1.4rem; }
      }

      .btn-github {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        background-color: #21262d;
        color: #c9d1d9;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        border: 1px solid #30363d;
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 600;
        transition: 0.3s;

        img { width: 20px; filter: invert(1); }
        &:hover { background-color: #30363d; border-color: #8b949e; }
      }
    }

    .dashboard-graph {
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        width: 100%;
        max-width: 800px; 
        height: auto;
        border-radius: 8px;
      }
    }
  }

  /* RESPONSIVE */
  @media (max-width: 600px) {
    .contact-table .table-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
      
      .icon { display: none; }
    }

    .github-dashboard .dashboard-header {
      flex-direction: column;
      gap: 1.5rem;
      align-items: flex-start;
    }
  }
`;