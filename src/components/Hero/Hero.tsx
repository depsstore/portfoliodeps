import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { NavHashLink } from "react-router-hash-link";

// IMPORT ASSETS
import instagram from '../../assets/instagram.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import htmlIcon from '../../assets/html-icon.svg';
import cssIcon from '../../assets/css-icon.svg';
import jsIcon from '../../assets/js-icon.svg';
import nodeIcon from '../../assets/node-icon.svg';
import mysqlIcon from '../../assets/mysql-icon.svg';
import boostrapIcon from '../../assets/bootstrap-icon.svg';
import logo1 from '../../assets/logoDEPSSTORE.jpg';
import logo2 from '../../assets/brandlatar.png';

import scriptIcon from '../../assets/a-script.svg';
import laravelIcon from '../../assets/laravel.svg';
import phpIcon from '../../assets/php.svg';
import tailwindIcon from '../../assets/tailwind.svg';
import profileTag from '../../assets/depfrans.webp';

// KOMPONEN SVG INLINE (Spreadsheet)
const SpreadsheetSvg = () => (
  <svg viewBox="0 0 24 24" fill="#0F9D58" width="100%" height="100%">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 12H7v-2h10v2zm0-4H7V9h10v2zm0-4H7V5h10v2z" />
  </svg>
);

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hi there, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h2>Dep Frans Purnamalila Kosasih</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Software Engineer & Web Developer</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            Bagi saya, ngoding bukan sekadar menulis baris kode, tapi soal <b>memikirkan konsep dan desain</b> agar solusi yang dihasilkan tepat guna. Saya selalu <b>suka mencoba hal-hal baru</b> untuk terus berkembang, dan tidak ragu turun tangan <b>memperbaiki</b> sistem yang ada agar menjadi lebih efisien dan mudah digunakan.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <div className="hero-buttons">
            <div className="social-media">
              <a href="https://github.com/depsstore" target="_blank" rel="noreferrer" className="icon-box">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=6285659803901" target="_blank" rel="noreferrer" className="icon-box">
                <img src={whatsapp} alt="Whatsapp" />
              </a>
              <a href="https://instagram.com/whycmgindo" target="_blank" rel="noreferrer" className="icon-box">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>

            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="button">
                View Portfolio
              </NavHashLink>
            </BrowserRouter>
          </div>
        </ScrollAnimation>
      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.5 * 1000}>
          <div className="image-wrapper">
        
            {/* 1. BINGKAI HIJAU */}
            <div className="blob-frame"></div>

            {/* 2. FOTO PROFIL */}
            <img
              src={profileTag}
              alt="Profile Dep Frans"
              className="main-profile"
            />

            {/* =========================================
                RING DALAM (Hanya ada 7 ikon, tidak ada yang dobel)
                ========================================= */}
            <div className="floating-icon icon-1"><img src={htmlIcon} alt="HTML" /></div>
            <div className="floating-icon icon-2"><img src={cssIcon} alt="CSS" /></div>
            <div className="floating-icon icon-3"><img src={jsIcon} alt="JavaScript" /></div>
            <div className="floating-icon icon-4"><img src={tailwindIcon} alt="Tailwind" /></div>
            <div className="floating-icon icon-5"><img src={laravelIcon} alt="Laravel" /></div>
            <div className="floating-icon icon-6"><img src={boostrapIcon} alt="Bootstrap" /></div>
            <div className="floating-icon icon-7"><img src={phpIcon} alt="PHP" /></div>

            {/* =========================================
                RING LUAR (Hanya ada 7 ikon)
                ========================================= */}
            <div className="floating-icon icon-8"><img src={mysqlIcon} alt="MySQL" /></div>
            <div className="floating-icon icon-9"><img src={nodeIcon} alt="Node.js" /></div>
            <div className="floating-icon icon-10"><SpreadsheetSvg /></div>
            <div className="floating-icon icon-11"><img src={scriptIcon} alt="Apps Script" /></div>
            <div className="floating-icon icon-12"><img src={githubIcon} alt="GitHub" /></div>
            <div className="floating-icon icon-13"><img src={logo1} alt="Logo 1" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '50%' }} /></div>
            <div className="floating-icon icon-14"><img src={logo2} alt="Logo 2" style={{ objectFit: 'contain', width: '100%', height: '100%', borderRadius: '50%' }} /></div>

          </div>
        </ScrollAnimation>
      </div>
    </Container>
  )
}