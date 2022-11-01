import React from 'react';
import in_class from "../data/class";


const IntenstiveClass = () => {
    return (
            <div className="row min-vh-100 justify-content-center iclass-container">
                <div className="col-md-9" style={{marginTop:'80px'}}>
                    <div className=" d-none d-md-block box1"/>
                    <div className=" d-none d-md-block box2"/>
                    <h1 className="fw-bolder classes text-center mb-5">Intensive Classes</h1>
                    {
                        in_class.map((c,i)=>{
                            return (
                                <div className=" d-md-flex my-5 class mx-2 mx-md-0 justify-content-md-center align-items-center" key={i}>
                                    <div>
                                        <img src={c.image} className=" mx-auto photo " style={{width:'258px',height:'190px'}}/>
                                    </div>
                                    <div className="d-flex flex-column ms-2 ms-md-5">
                                        <h4 className="fw-bold">{c.id}</h4>
                                        <h4 className="fw-bold">{c.title}</h4>
                                        <p className="h6">{c.description}</p>
                                        <p className="h6 mt-4">Duration : {c.duration[0].weeks} weeks ({c.duration[0].hours} hours)</p>
                                    </div>
                                    <div>
                                        <button className="fas fa-arrow-right btn fs-4 px-4 py-3 seemore" style={{marginRight:'-25px'}}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="d-flex justify-content-center">
                        <button className="rounded-pill seemore btmsm btn  my-5 fw-bold py-2 fs-6">See More</button>
                    </div>
                </div>
            </div>
    );
};

export default IntenstiveClass;