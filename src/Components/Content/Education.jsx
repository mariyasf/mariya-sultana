import './CSS/education.css';
import { FaGraduationCap, FaBookOpen, FaSchool } from 'react-icons/fa';

const educationList = [
  {
    period: '2019 – 2025',
    degree: 'BSc in CSE',
    institution: 'International Islamic University Chittagong',
    institutionLine2: null,
    place: 'Address: Kumira, Sitakunda, Chattogram - 4314, Bangladesh.',
    Icon: FaGraduationCap,
    side: 'right',
  },
  {
    period: '2017 – 2018',
    degree: 'HSC',
    institution: 'Posterpar A.K City Corp. Girls School & College',
    institutionLine2: null,
    place: 'Address: 8RQ9+33C, Thana Road, Chattogram',
    Icon: FaBookOpen,
    side: 'left',
  },
  {
    period: '2015 – 2016',
    degree: 'SSC',
    institution: 'Goribe Newaz High School',
    institutionLine2: null,
    place: 'Address: Block-I, Housing Estate, Halishahar, Chattogram',
    Icon: FaSchool,
    side: 'right',
  },
];

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-bg" />
      <div className="education-glow education-glow--purple" />

      <div className="education-inner">
        <header className="education-header">
          <h2>Education</h2>
          <p className="education-header__subtitle">Academic background and institutions</p>
        </header>

        <div className="education-timeline">
          <div className="education-timeline__line" aria-hidden="true" />

          {educationList.map((item, index) => {
            const Icon = item.Icon;
            return (
              <article
                key={index}
                className={`edu-card edu-card--${item.side}`}
              >
                <div className="edu-card__node" aria-hidden="true" />
                <div className="edu-card__content">
                  <div className="edu-card__title-row">
                    <span className="edu-card__icon">
                      <Icon />
                    </span>
                    <h3 className="edu-card__degree">{item.degree}</h3>
                  </div>
                  <span className="edu-card__period">{item.period}</span>
                  <div className="edu-card__separator" aria-hidden="true" />
                  <p className="edu-card__institution">{item.institution}</p>
                  {item.institutionLine2 && (
                    <p className="edu-card__institution-line2">{item.institutionLine2}</p>
                  )}
                  {item.place && (
                    <p className="edu-card__place">{item.place}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
