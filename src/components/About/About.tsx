import { Container } from "./styles";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

// IMPORT ASET SKILL
import htmlIcon from '../../assets/html-icon.svg';
import cssIcon from '../../assets/css-icon.svg';
import jsIcon from '../../assets/js-icon.svg';
import nodeIcon from '../../assets/node-icon.svg';
import mysqlIcon from '../../assets/mysql-icon.svg';
import boostrapIcon from '../../assets/bootstrap-icon.svg';
import tailwindIcon from '../../assets/tailwind.svg';
import laravelIcon from '../../assets/laravel.svg';
import phpIcon from '../../assets/php.svg';
import scriptIcon from '../../assets/a-script.svg';

// IMPORT GAMBAR BARU DI SINI
// Opsi 1: Jika gambar ada di src/assets
// import IlustrasiBaru from '../../assets/ilustrasi-coding.png';

export function About() {
  return (
    <Container id="about">
      {/* KIRI: GAMBAR ILUSTRASI BARU */}
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.21 * 1000}>
          {/* 
            GANTI src DI BAWAH INI DENGAN GAMBAR DARI GOOGLE.
            Kamu bisa pakai link URL langsung (https://...) 
            atau import gambar lokal (seperti contoh di atas).
          */}
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" 
            alt="Ilustrasi Coding" 
            className="illustration-img" 
          />
        </ScrollAnimation>
      </div>
      
      {/* KANAN: TEKS */}
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInRight">
          <h2>Tentang Saya</h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 1000}>
          <p>
            Perkenalkan, nama saya <b>Dep Frans Purnamalila Kosasih</b>, atau akrab disapa <b>Dep</b>. Saya pelajar berusia 17 Tahun merupakan seorang <b>Software Engineer & Web Developer</b> yang berdomisili di Bantarujeg, Kabupaten Majalengka, Indonesia. Di ranah digital, saya lebih dikenal dengan nama pengguna <b>whycmgindo</b>.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000} style={{ marginTop: "1.5rem" }}>
          <p>
            Ketertarikan saya pada dunia pemrograman berawal sejak menempuh pendidikan di <b>SMK jurusan PPLG</b> (Pengembangan Perangkat Lunak dan Gim). Bagi saya, menulis kode bukan hanya sekadar aspek teknis, melainkan sebuah seni dalam <b>merancang konsep dan desain</b> untuk menghasilkan solusi digital yang tepat guna serta inovatif.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000} style={{ marginTop: "2rem" }}>
          <h3>Keahlian Utama (Main Skills):</h3>
        </ScrollAnimation>
        
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={nodeIcon} alt="Node.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={mysqlIcon} alt="MySQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="HTML" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="CSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
              <img src={tailwindIcon} alt="Tailwind" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.23 * 1000}>
              <img src={laravelIcon} alt="Laravel" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.24 * 1000}>
              <img src={phpIcon} alt="PHP" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.25 * 1000}>
              <img src={scriptIcon} alt="Apps Script" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Container>
  )
}