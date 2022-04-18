import React from 'react';
import Services from './Services/Services';
import section_img from '../../section_img.jpg';

const Home = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div class="col-sm-12 col-lg-8 mt-5">
                        <h2 className="fs-1">Dental Implants Specialist</h2>
                        <p className="fs-5 mt-4">At The Center for High Tech Dentistry, the goal of Simon W. Rosenberg, DMD, and the team is to provide comprehensive oral health care to people of all ages living in and around the Upper East Side of Manhattan and throughout New York City.</p>
                        <button type="button" className="btn btn-dark px-4 fs-4 mt-5">Learn More</button>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <img className=" rounded-circle" width="500"
                            height="500" src={section_img} alt="" />
                    </div>
                </div>
            </div>

            <Services></Services>
        </div>
    );
};

export default Home;