import React from 'react';

const CourseProgram = () => {
    return (
            <div className="row min-vh-lg-100 course-container justify-content-center">
                <div className="d-none d-md-block box1"/>
                <div className="d-none d-md-block box2"/>
                <div className="col-12 col-md-10" style={{marginTop:'80px'}}>
                    <h1 className="fw-bolder text-center text-light">You're in good school <br/> (Strengths)</h1>
                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-md-4 p-3 d-flex flex-column justify-content-center align-items-center">
                        <img src={`/image/one.jpg`} className="rounded-circle mx-auto" style={{width:'170px',height:'170px'}}/>
                        <p className="h5 text-center px-4 mx-md-0 mt-4 text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                    <div className="col-12 col-md-4 p-3 border-start border-5 d-flex flex-column justify-content-center align-items-center">
                        <img src={`/image/two.jpg`} className="rounded-circle mx-auto" style={{width:'170px',height:'170px'}}/>
                        <p className="h5 text-center px-4 mx-md-0 mt-4 text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                    <div className="col-12 col-md-4 p-3 border-start border-5 d-flex flex-column justify-content-center align-items-center">
                        <img src={`/image/three.jpg`} className="rounded-circle mx-auto" style={{width:'170px',height:'170px'}}/>
                        <p className="h5 text-center px-4 mx-md-0 mt-4 text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default CourseProgram;