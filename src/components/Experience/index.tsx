import { Container } from "./styles";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const experiences = [
    {
        id: 1,
        role: "Founder Komunitas Minecraft",
        company: "Komunitas Minecraft Deps4KMc",
        date: "2024 - 2025",
        desc: "Mendirikan dan mengelola komunitas Minecraft. Bertanggung jawab penuh atas manajemen, pengelolaan anggota, penyelesaian konflik, menjaga loyalitas komunitas."
    },
    {
        id: 2,
        role: "Ketua Komunitas Coding",
        company: "Komunitas Developer / Programmer",
        date: "2026 - Sekarang",
        desc: "Dipercaya untuk memimpin dan mengelola komunitas coding. Bertanggung jawab menyusun roadmap pembelajaran, mengadakan event sharing session, serta membimbing anggota baru dalam mendalami dunia pemrograman dan web development."
    },
    {
        id: 3,
        role: "Founder & Web Developer (Open Course)",
        company: "Komunitas Coding & Platform Edukasi",
        date: "2026 - Sekarang",
        desc: "Mendirikan komunitas coding untuk mewadahi para developer muda. Di tahun yang sama, dipercaya untuk berkolaborasi dalam pembangunan dan pengembangan platform web kursus 'Open Course', mulai dari arsitektur sistem hingga antarmuka pengguna."
    },
    {
        id: 4,
        role: "Web Developer (Freelance)",
        company: "DepsStore & Berbagai Klien",
        date: "2026",
        desc: "Aktif mengembangkan berbagai platform digital seperti DepsStore (Marketplace), Tabunganku, Auto Hosting, dan aplikasi kasir. Berfokus pada pembuatan antarmuka web modern, sistem otomatisasi cerdas, serta integrasi API dan database."
    }
];

export function Experience() {
    return (
        <Container id="experience">
            <ScrollAnimation animateIn="fadeInUp">
                <h2>My Experience</h2>
            </ScrollAnimation>

            <div className="timeline">
                {experiences.map((exp, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <ScrollAnimation
                            key={exp.id}
                            animateIn={isLeft ? "fadeInLeft" : "fadeInRight"}
                            delay={index * 0.2 * 1000}
                        >
                            <div className={`timeline-item ${isLeft ? "left" : "right"}`}>
                                <div className="content">
                                    <span className="date">{exp.date}</span>
                                    <h3>{exp.role}</h3>
                                    <h4>{exp.company}</h4>
                                    <p>{exp.desc}</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    );
                })}
            </div>
        </Container>
    );
}