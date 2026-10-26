import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 80px; 
  padding: 0 5rem;
  
  background-color: #21212150;
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  
  /* Z-INDEX DIKUNCI DI 1000 */
  z-index: 1000; 
  box-sizing: border-box; 

  .logo {
    color: #FFF;
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    
    .logo-img {
      height: 35px; 
      width: auto;  
      object-fit: contain;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 100%;
    position: relative; /* Penting untuk posisi dropdown */
  }

  /* Tombol Collab */
  .collab-btn {
    color: #FFF;
    text-decoration: none;
    padding: 0.6rem 1.5rem;
    border: 2px solid #FFF;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    cursor: pointer;
    white-space: nowrap;
    
    &:hover {
      background-color: #FFF;
      color: #212121;
    }
  }

  /* Tombol Hamburger */
  .menu {
    width: 1.8rem;
    height: 0.2rem;
    background: #FFFF;
    position: relative;
    cursor: pointer;
    box-sizing: content-box;
    padding: 0.6rem 0;

    &:before { bottom: 0.8rem; }
    &:after { top: 0.8rem; }

    &.active {
      background-color: rgba(0, 0, 0, 0);
    }

    &.active:before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after {
      top: 0;
      transform: rotate(135deg);
    }
  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #FFFF;
    transition: .4s;
  }

  /* NAVIGASI DROPDOWN (Kotak Melayang) */
  nav {
    position: absolute;
    top: 70px; /* Jarak dari atas */
    right: 0;  
    
    /* Warna mengikuti tema (Light/Dark mode) */
    background-color: var(--bg); 
    border: 1px solid var(--border, #444);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 220px;
    
    /* Animasi Dropdown */
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease-in-out;
    
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    z-index: 1001;

    &.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    a {
      color: var(--text); 
      font-size: 1rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.25s;
      padding: 0.6rem 1rem;
      border-radius: 8px;

      &:hover {
        color: var(--blue);
        background-color: rgba(0, 255, 0, 0.1); 
      }
    }
  }

  /* Toggle Theme (Bawaan Template) */
  .theme-toggle-wrapper {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #444;
    display: flex;
    justify-content: center;
  }

  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--blue);
    display: block;
    border-radius: 100px;
    position: relative;
    
    &:after {
      content: '';
      background: #FFF;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: 4px;
      transition: 0.3s;
    }
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  /* Responsif Mobile */
  @media (max-width: 800px) {
    padding: 0 2rem;
    
    .logo { font-size: 1.3rem; }
    
    .header-right { gap: 1rem; }
    
    .collab-btn {
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }

    nav {
      top: 60px;
      right: 0;
      min-width: 180px;
      
      a { font-size: 0.9rem; }
    }
  }
`;