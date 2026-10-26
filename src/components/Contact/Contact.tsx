import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";

// Ikon Panah Kanan Atas untuk Tabel
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

export function Contact() {
  return (
    <Container id="contact">
      
      {/* =========================================
          1. TABEL KONTAK (LIST VIEW)
          ========================================= */}
      <div className="contact-table">
        
        <a href="mailto:adm1ndepsstore@gmail.com" className="table-row">
          <span className="label">EMAIL</span>
          <span className="value">adm1ndepsstore@gmail.com</span>
          <span className="icon"><ArrowIcon /></span>
        </a>

        <a href="https://github.com/depsstore" target="_blank" rel="noreferrer" className="table-row">
          <span className="label">GITHUB</span>
          <span className="value">@depsstore</span>
          <span className="icon"><ArrowIcon /></span>
        </a>

        <a href="https://instagram.com/whycmgindo" target="_blank" rel="noreferrer" className="table-row">
          <span className="label">INSTAGRAM</span>
          <span className="value">@whycmgindo</span>
          <span className="icon"><ArrowIcon /></span>
        </a>

        <a href="https://wa.me/6285659803901" target="_blank" rel="noreferrer" className="table-row">
          <span className="label">WHATSAPP</span>
          <span className="value">(+62) 856-5980-3901</span>
          <span className="icon"><ArrowIcon /></span>
        </a>

      </div>

      {/* =========================================
          2. GITHUB DASHBOARD (PROFIL & GRAFIK)
          ========================================= */}
      <div className="github-dashboard">
        <div className="dashboard-header">
          
          <div className="user-info">
            <img src="https://github.com/depsstore.png" alt="Avatar" className="avatar" />
            <div>
              <h3>Dep Frans</h3>
              <p>@depsstore</p>
            </div>
          </div>

          <a href="https://github.com/depsstore" target="_blank" rel="noreferrer" className="btn-github">
            <img src={githubIcon} alt="GitHub" />
            View GitHub
          </a>
        </div>

        {/* Grafik Statistik GitHub */}
        <div className="dashboard-graph">
          <img 
            src="https://github-readme-stats.vercel.app/api?username=depsstore&show_icons=true&theme=radical&hide_border=true&bg_color=161b22&title_color=00ff87&icon_color=00ff87&text_color=ffffff&count_private=true" 
            alt="GitHub Stats" 
          />
        </div>
      </div>

    </Container>
  );
}