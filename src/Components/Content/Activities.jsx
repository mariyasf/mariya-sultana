
import './CSS/activities.css';

const Activities = () => {
    return (
        <section
            className="activities-section"
            id="activities">
            <div
                className="content-inner">
                <div className="content-header">
                    <h2>Competitive Programming</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="col-md-6">
                        <div className="">

                            <h3>Codeforce</h3>
                            <p>
                                <a href="https://codeforces.com/profile/Mariya_S.F.">

                                    Mariya_S.F.
                                </a> | Max. pupil, 1274 | Contest participation: 170+ | Problem solved: 950+
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="">

                            <h3>Leetcode</h3>
                            <p>
                                <a href="https://leetcode.com/Mariya_SF">

                                    Mariya_SF
                                </a> | Problem solved: 100+
                            </p>
                        </div>
                    </div>

                    

                </div>
            </div>
        </section>
    );
};

export default Activities;