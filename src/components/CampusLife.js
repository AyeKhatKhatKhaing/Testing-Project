import React from 'react';

const CampusLife = () => {
    return (
            <div className="row min-vh-lg-100 justify-content-center campus-container">
                <div className="d-none d-lg-block box1"/>
                <div className="d-none d-lg-block box2"/>
                <div className="d-none d-md-block box3"/>
                <div className="d-none d-md-block box4"/>
                <div className=" col-12 col-md-10" style={{marginTop:'80px'}}>
                    <h1 className="fw-bolder mb-3 text-center text-light">Campus Life</h1>
                    <div className="row mb-5 mt-5 justify-content-between">
                        <div className="col-12 col-md-4 p-2 pe-1 d-flex flex-column">
                            <div className="d-flex justify-content-center">
                                <img src={'image/one.jpg'} className="rounded-3 w-75 text-center" style={{height:'350px'}}/>
                            </div>
                            <h4 className="text-light fw-bold my-3 text-center">What is Lorem Ipsum?</h4>
                            <p className="text-center px-5 px-md-0 text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="col-12 col-md-4 p-2 pe-1 d-flex flex-column flex-md-column-reverse">
                            <div className="d-flex justify-content-center">
                                <img src={'image/two.jpg'} className="rounded-3 w-75 text-center" style={{height:'350px'}}/>
                            </div>
                            <p className="text-center px-5 px-md-0 text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <h4 className="text-light fw-bold my-3 text-center">What is Lorem Ipsum?</h4>
                        </div>
                        <div className="col-12 col-md-4 p-2 d-flex flex-column">
                            <div className="d-flex justify-content-center">
                                <img src={'image/three.jpg'} className="rounded-3 w-75 text-center" style={{height:'350px'}}/>
                            </div>
                            <h4 className="text-light fw-bold my-3 text-center">What is Lorem Ipsum?</h4>
                            <p className="text-center px-5 px-md-0 text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CampusLife;