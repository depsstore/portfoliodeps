import { useState } from "react";
import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

// Ikon Download SVG
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

// Ikon Silang (Close)
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const projectsData = [
  {
    id: 1,
    title: "DepsStore",
    image: "/Images/depsstore.png", 
    desc: "Marketplace produk digital premium untuk developer dan kreator. Menyediakan fitur download instan, pembayaran otomatis via QRIS, serta sistem keanggotaan VIP yang eksklusif.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Google Sheets"],
    platform: ["GitHub", "Apps Script", "Vercel"],
    visitUrl: "https://depsstoreid.vercel.app",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Tabunganku",
    image: "/Images/tabungan.png", 
    desc: "Aplikasi manajemen keuangan personal berbasis web yang dirancang untuk mencatat pengeluaran harian, pemasukan, serta memantau target finansial secara efisien.",
    tech: ["HTML", "Bootstrap", "JavaScript"],
    platform: ["GitHub", "Vercel"],
    visitUrl: "https://tabungan-ku-eight.vercel.app",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "Auto Hosting",
    image: "/Images/autohosting.png", 
    desc: "Layanan penyediaan server otomatis yang memudahkan pengembang untuk melakukan deploy website atau aplikasi tanpa perlu konfigurasi server yang rumit.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Google Sheets"],
    platform: ["GitHub", "Apps Script", "Vercel"],
    visitUrl: "https://auto-hosting.vercel.app",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "Pplg One",
    image: "/Images/pplg.png", 
    desc: "Platform internal yang dikembangkan khusus untuk kebutuhan manajemen dan informasi jurusan PPLG (Pengembangan Perangkat Lunak dan Gim).",
    tech: ["HTML", "CSS", "JavaScript"],
    platform: ["GitHub", "Vercel"],
    visitUrl: null, 
    downloadUrl: "#"
  },
  {
    id: 5, 
    title: "Kasir POS (The Order)",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80", 
    desc: "Website kasir pemesanan berbasis online yang mempermudah proses transaksi dan manajemen pesanan secara real-time.",
    tech: ["Google Sheets"],
    platform: ["Apps Script"],
    visitUrl: "https://script.google.com/macros/s/AKfycbxLQT5xIgRIJMiZcilZnCdo8D8yTVGok1Pvf8CCBqbU_BzvEpYo1wNNo5NCORkb2oyn/exec",
    downloadUrl: "#"
  }
];

export function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      
      <div className="projects">
        {projectsData.map((project, index) => (
          <ScrollAnimation key={project.id} animateIn="flipInX" delay={index * 0.1 * 1000}>
            
            {/* KARTU UTAMA */}
            <div className="project-card" onClick={() => setSelectedProject(project)}>
              
              {/* Gambar & Gradient Overlay */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              {/* Tombol Visit melayang di atas gambar (hanya muncul jika ada link) */}
              {project.visitUrl && (
                <a 
                  href={project.visitUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="visit-btn-icon"
                  onClick={(e) => e.stopPropagation()} // Cegah modal kebuka saat tombol visit diklik
                >
                  <img src={externalLink} alt="Visit" />
                </a>
              )}

              {/* Judul & Deskripsi di dalam gambar (bawah) */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>

            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* MODAL POP-UP DETAIL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              <CloseIcon />
            </button>

            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="modal-info">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.desc}</p>
              
              <div className="tech-list">
                {selectedProject.tech.map((t, i) => (
                  <span key={`tech-${i}`}>{t}</span>
                ))}
                {selectedProject.platform.map((p, i) => (
                  <span key={`plat-${i}`} style={{ background: '#444' }}>{p}</span>
                ))}
              </div>

              <div className="modal-actions">
                {selectedProject.visitUrl && (
                  <a href={selectedProject.visitUrl} target="_blank" rel="noreferrer" className="btn btn-visit">
                    <img src={externalLink} alt="Visit" />
                    Visit Website
                  </a>
                )}
                <a href={selectedProject.downloadUrl} download className="btn btn-download">
                  <DownloadIcon />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}