import { GithubActivity } from "github-contributions-ui";
import { Container } from "./githubStyles";
import githubIcon from "../../assets/github.svg";

export function GitHubStats() {
  return (
    <Container>
      {/* KIRI: Grafik Kontribusi */}
      <div className="graph-card">
        <div className="graph-header">
          <h3>GitHub Activity</h3>
        </div>
        <div className="graph-wrapper">
          {/* Library ini otomatis mengambil data publik dari username */}
          <GithubActivity 
            username="depsstore" // GANTI DENGAN USERNAME GITHUB KAMU
            theme="dark" 
          />
        </div>
      </div>

      {/* KANAN: Kartu Profil */}
      <div className="profile-card">
        <div className="avatar-wrapper">
          {/* Ganti dengan URL foto profil GitHub kamu, atau import dari assets */}
          <img 
            src="https://github.com/depsstore.png" 
            alt="Profile" 
            className="avatar"
          />
        </div>
        
        <div className="user-info">
          <h3>Dep Frans</h3>
          <p className="username">@depsstore</p>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <strong>34+</strong>
            <span>REPOS</span>
          </div>
          <div className="stat-box">
            <strong>1.2k</strong>
            <span>COMMITS</span>
          </div>
        </div>

        <a 
          href="https://github.com/depsstore" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-github"
        >
          <img src={githubIcon} alt="GitHub" />
          View GitHub
        </a>
      </div>
    </Container>
  );
}