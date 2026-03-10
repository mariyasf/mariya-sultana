import "./CSS/SectionDivider.css";

const SectionDivider = ({ seeAllLabel, seeAllHref }) => {
  return (
    <div className="section-divider">
      {seeAllLabel && seeAllHref && (
        <a href={seeAllHref} className="section-divider__btn">
          {seeAllLabel}
          <span className="section-divider__arrow">&gt;</span>
        </a>
      )}
      <div className="section-divider__line" aria-hidden="true" />
    </div>
  );
};

export default SectionDivider;
