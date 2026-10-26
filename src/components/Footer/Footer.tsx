import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      {/* Logo / Nama Brand */}
      <a href="#home" className="logo">
        <span>Deps</span>
        <span>store.</span>
      </a>
      
      {/* Teks Dibuat Dengan */}
      <div>
        <p>
          Built with React, TypeScript, and Vite <img src={reactIcon} alt="React" />
        </p>
      </div>

      {/* Sosial Media (Link Asli Milikmu) */}
      <div className="social-media">
        <a
          href="https://www.instagram.com/whycmgindo"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://github.com/depsstore"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=6285659803901&text=Halo+Dep+Frans,+saya+melihat+portofolio+Anda."
          target="_blank"
          rel="noreferrer"
          title="WhatsApp"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </div>
    </Container>
  )
}