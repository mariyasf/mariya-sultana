import { FaEye, FaLink } from 'react-icons/fa';
import './CSS/protfolio.css';

const ProtfolioCard = ({ proj }) => {
    const { image, live_link, title, github_link, categories } = proj;
    return (
        <div>
            <div className="col-lg-4 col-md-6 portfolio-item web-des
             rounded-lg shadow-xl">
                <div className="portfolio-wrap">
                    <figure >
                        <img src={image} alt="" />

                        <a href={live_link}
                            data-lightbox="portfolio"
                            data-title="Project Name"
                            className="link-preview text-center items-center"
                            title="Preview"
                            target="_blank"
                        >
                            <span><FaEye /></span>
                        </a>

                        <a href={github_link}
                            className="link-details"
                            target="_blank"
                            title="More Details">
                            <FaLink />
                        </a>

                        <a className="portfolio-title" href="#">{title}
                            {categories && <span>{categories}</span>}
                        </a>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default ProtfolioCard;
