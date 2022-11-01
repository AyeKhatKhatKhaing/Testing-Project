import React from 'react';

const About = () => {
    return (
            <div className="row min-vh-lg-100 justify-content-center about-container" >
                <div className="col-12 col-md-5 mb-5" style={{marginTop:'110px'}}>
                    <div className="d-none d-md-block box1"/>
                    <div className="d-none d-lg-block box2"/>
                    <div className="d-none d-md-block box3"/>
                    <div className="d-none d-md-block box4"/>
                    <h1 className="fw-bolder text-center about">About KY School</h1>
                    <p className="mt-5 px-5 px-md-0 text-center h5 text-muted">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="d-flex justify-content-center">
                        <button className="rounded-pill seemore btn mt-5 w-50 fw-bold py-2 fs-6">See More</button>
                    </div>
                </div>
            </div>

    );
};

export default About;