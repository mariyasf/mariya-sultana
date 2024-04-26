import { useEffect, useState } from 'react';
import './CSS/protfolio.css'
import ProtfolioCard from './ProtfolioCard';


const Protfolio = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setProject(data);
            })
    }, [])

    return (
        <div className="portfolio" id="portfolio">
            <div className="content-inner">
                <div className="content-header">
                    <h2>Portfolio</h2>
                </div>

              

                <div className="grid grid-cols-1   lg:grid-cols-3 gap-4 portfolio-container">
                    {
                        project.map(proj =>
                            <ProtfolioCard
                                key={proj.id}
                                proj={proj}></ProtfolioCard>
                        )
                    }







                </div>
            </div>
        </div>
    );
};

export default Protfolio;