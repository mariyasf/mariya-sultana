import './CSS/education.css'


const Education = () => {
    return (
        <div className="education" id="education">
            <div className="content-inner">
                <div className="content-header">
                    <h2>Education</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="col-md-6">
                        <div className="edu-col">
                            <span>2019 <i>to </i>
                                Present</span>
                            <h3>BSC in CSE</h3>
                            <p>International Islamic University Chittagong | Kumira, Chattogram</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="edu-col">
                            <span>2017 <i>to</i> 2018</span>
                            <h3>HSC</h3>
                            <p>
                                Posterpar A.K City Corp. Girls School & College
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="edu-col">
                            <span>2015 <i>to</i> 2016</span>
                            <h3>SSC</h3>
                            <p>
                                Goribe Newaz High School
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Education;