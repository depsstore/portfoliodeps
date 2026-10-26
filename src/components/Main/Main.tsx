import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { Container } from "./styles";

import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Experience } from "../Experience";
import { Project } from "../Project/Project";
import { Contact } from "../Contact/Contact";

// Import Aset Ikon
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function Main() {
  const particlesOptions: ISourceOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Garis akan "menarik" partikel saat didekati mouse
        },
        onClick: {
          enable: true,
          mode: "push", // Klik untuk menambah partikel
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.5,
            color: "#23ce6b" // Garis berwarna hijau saat didekati mouse
          }
        },
        push: {
          quantity: 3,
        },
      },
    },
    particles: {
      // Warna debu (Putih, Hijau, Biru)
      color: {
        value: ["#ffffff", "#23ce6b", "#016fb9"],
      },
      
      // EFEK GLOW / BERCAHAYA
      shadow: {
        enable: true,
        color: "#23ce6b", // Warna pendaran (hijau)
        blur: 15,         // Tingkat keburaman
        offset: { x: 0, y: 0 },
      },

      // Garis Penghubung ke semua partikel
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.15,
        width: 1,
      },

      move: {
        enable: true,
        speed: 0.8, // Diperlambat agar terlihat elegan (seperti debu melayang)
        direction: "none",
        outModes: "out",
      },

      number: {
        density: { enable: true, width: 1920, height: 1080 },
        limit: { mode: "delete", value: 50 },
        value: 30, // Jumlah debu dan ikon
      },

      opacity: {
        value: { min: 0.1, max: 0.5 }, // Transparansi acak (efek debu samar)
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },

      // 5+ BENTUK GEOMETRIS & IKON
      shape: {
        type: ["image", "circle", "square", "triangle", "polygon", "star"],
        options: {
          image: [
            { src: boostrapIcon, width: 20, height: 20 },
            { src: cssIcon, width: 20, height: 20 },
            { src: wordpress, width: 20, height: 20 },
            { src: shopify, width: 20, height: 20 },
            { src: htmlIcon, width: 20, height: 20 },
            { src: jsIcon, width: 20, height: 20 },
            { src: python, width: 20, height: 20 },
            { src: java, width: 20, height: 20 },
            { src: reactIcon, width: 20, height: 20 },
            { src: sassIcon, width: 20, height: 20 },
            { src: typescriptIcon, width: 20, height: 20 },
            { src: vueIcon, width: 20, height: 20 },
          ],
          polygon: {
            sides: 6, // Bentuk segi enam
          },
          star: {
            sides: 5, // Bentuk bintang 5
          },
        },
      },

      // Ukuran kecil (seperti debu) untuk geometris, tapi pas untuk ikon
      size: {
        value: { min: 2, max: 15 }, 
      },
    },
  };

  return (
    <ParticlesProvider init={(engine: Engine) => loadSlim(engine)}>
      <Container>
        <Particles id="tsparticles" options={particlesOptions} />
        
        <Hero />
        <About />
        <Experience />
        <Project />
        <Contact />
      </Container>
    </ParticlesProvider>
  );
}