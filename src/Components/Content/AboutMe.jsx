import './CSS/AboutMe.css';

const ICON_SIZE = 36;
const devicon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const AboutMe = () => {
    const tech = {
        languages: [
            { src: devicon('c/c-original.svg'), alt: 'C', title: 'C' },
            { src: devicon('cplusplus/cplusplus-original.svg'), alt: 'C++', title: 'C++' },
            { src: devicon('javascript/javascript-original.svg'), alt: 'JavaScript', title: 'JavaScript' },
            { src: devicon('python/python-original.svg'), alt: 'Python', title: 'Python' },
            { src: devicon('typescript/typescript-original.svg'), alt: 'TypeScript', title: 'TypeScript' },
            { src: devicon('nodejs/nodejs-original.svg'), alt: 'Node.js', title: 'Node.js' },
        ],
        frontend: [
            { src: devicon('html5/html5-original.svg'), alt: 'HTML5', title: 'HTML5' },
            { src: devicon('css3/css3-original.svg'), alt: 'CSS3', title: 'CSS3' },
            { src: devicon('react/react-original.svg'), alt: 'React', title: 'React' },
            { src: devicon('nextjs/nextjs-original.svg'), alt: 'Next.js', title: 'Next.js' },
            { src: devicon('vite/vite-original.svg'), alt: 'Vite', title: 'Vite' },
            { src: devicon('tailwindcss/tailwindcss-original.svg'), alt: 'Tailwind CSS', title: 'Tailwind CSS' },
            { src: devicon('materialui/materialui-original.svg'), alt: 'Material UI', title: 'Material UI' },
            { text: 'DaisyUI' },
        ],
        backend: [
            { src: 'https://nestjs.com/img/logo-small.svg', alt: 'NestJS', title: 'NestJS' },
            { src: devicon('express/express-original.svg'), alt: 'Express.js', title: 'Express.js' },
            { src: devicon('graphql/graphql-plain.svg'), alt: 'GraphQL', title: 'GraphQL' },
            { src: devicon('django/django-plain.svg'), alt: 'Django', title: 'Django' },
            { src: devicon('flask/flask-original.svg'), alt: 'Flask', title: 'Flask' },
        ],
        databases: [
            { src: devicon('mysql/mysql-original.svg'), alt: 'MySQL', title: 'MySQL' },
            { src: devicon('mongodb/mongodb-original.svg'), alt: 'MongoDB', title: 'MongoDB' },
            { src: devicon('sqlite/sqlite-original.svg'), alt: 'SQLite', title: 'SQLite' },
            { src: devicon('firebase/firebase-plain.svg'), alt: 'Firebase', title: 'Firebase' },
        ],
        devops: [
            { src: devicon('linux/linux-original.svg'), alt: 'Linux', title: 'Linux' },
            { src: devicon('docker/docker-original.svg'), alt: 'Docker', title: 'Docker' },
            { src: devicon('nginx/nginx-original.svg'), alt: 'Nginx', title: 'Nginx' },
            { src: devicon('git/git-original.svg'), alt: 'Git', title: 'Git' },
            { src: devicon('github/github-original.svg'), alt: 'GitHub', title: 'GitHub Actions' },
            { src: devicon('jest/jest-plain.svg'), alt: 'Jest', title: 'Jest' },
            { src: devicon('eslint/eslint-original.svg'), alt: 'ESLint', title: 'ESLint' },
        ],
    };

    const renderTechRow = (items) =>
        items.map((item) =>
            item.src ? (
                <img
                    key={item.alt}
                    src={item.src}
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    alt={item.alt}
                    title={item.title}
                    className="tech-icon"
                />
            ) : (
                <span key={item.text} className="tech-text-badge" title={item.text}>{item.text}</span>
            )
        );

    return (
        <section className="about-me scroll-reveal" id="about-me">
            {/* Dark bg + decorative blurs (reference style) */}
            <div className="about-me-bg" />
            <div className="about-me-glow about-me-glow--purple" />
            <div className="about-me-glow about-me-glow--pink" />

            <div className="about-me-inner">
                {/* Left: Hexagonal profile area with glow */}
                <div className="about-me-visual">
                    <div className="about-hex-wrap">
                        <div className="about-hex-glow" />
                        <div className="about-hex-frame">
                                <div className="about-hex-inner">
                                {/* Replace src with your photo e.g. /images/profile.jpg */}
                                <img
                                    src="/images/profile.jpg"
                                    alt="Mariya Sultana"
                                    className="about-hex-img"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling?.classList.add('show');
                                    }}
                                    onLoad={(e) => {
                                        e.target.nextElementSibling?.classList.remove('show');
                                    }}
                                />
                                <div className="about-hex-placeholder show">
                                    <span>M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Heading + text + skills */}
                <div className="about-me-content">
                    <h2 className="about-me-title">About me</h2>
                    <p className="about-me-subtitle">Get to know me, my experience, and what I do</p>

                    <p className="about-me-intro">
                        I'm Mariya Sultana, a Software Engineer & Team Lead at mPair Technology Ltd.,
                        building scalable multi-tenant SaaS and ecommerce solutions. I focus on backend
                        architecture, high-performance APIs with Node.js, NestJS, and GraphQL, and
                        optimized MySQL—while also contributing to AI features, frontend debugging, and
                        team guidance.
                    </p>

                    <p className="about-me-text">
                        As Adjunct Faculty, I teach CSE-2430 (Competitive Programming) and CSE-1221
                        (Computer Programming II). At IIUC I've been a Teacher's Assistant for
                        Computer Programming 1 & 2 Labs and Competitive Programming, and Mentor for
                        the IIUC female competitive programming boot-camp.
                    </p>

                    <div className="about-me-skills">
                        <h3 className="about-skills-label">🛠 Tech & Tools</h3>
                        <div className="tech-categories-grid">
                            <div className="tech-category-card">
                                <h4 className="tech-cat-title">Languages</h4>
                                <div className="tech-icons">{renderTechRow(tech.languages)}</div>
                            </div>
                            <div className="tech-category-card">
                                <h4 className="tech-cat-title">Frontend</h4>
                                <div className="tech-icons">{renderTechRow(tech.frontend)}</div>
                            </div>
                            <div className="tech-category-card">
                                <h4 className="tech-cat-title">Backend & API</h4>
                                <div className="tech-icons">{renderTechRow(tech.backend)}</div>
                            </div>
                            <div className="tech-category-card">
                                <h4 className="tech-cat-title">Databases</h4>
                                <div className="tech-icons">{renderTechRow(tech.databases)}</div>
                            </div>
                            <div className="tech-category-card">
                                <h4 className="tech-cat-title">DevOps & Server</h4>
                                <div className="tech-icons">{renderTechRow(tech.devops)}</div>
                            </div>
                            <div className="tech-category-card tech-hosting">
                                <h4 className="tech-cat-title">Hosting</h4>
                                <span className="tech-host-text">ExonHost KVM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
