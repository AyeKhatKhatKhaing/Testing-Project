import React from 'react';
import blogs from "../data/blog";

const Blogs = () => {
    return (
            <div className="row min-vh-lg-100 justify-content-center">
                <div className="col-md-9" style={{marginTop:'60px'}}>
                    <h1 className="fw-bolder classes text-center mb-4">Blogs</h1>
                    {
                        blogs.map((b,i)=>{
                            return (
                                <div className="d-md-flex mt-4 mt-md-0 px-5 px-md-0 justify-content-md-between align-items-center border-bottom border-2 border-secondary pb-2" key={i}>
                                    <div className="d-flex flex-column ms-3">
                                        <h4 className="fw-bold mt-2">{b.title}</h4>
                                        <p className="f6">{b.description}</p>
                                        <p className="h5 mt-3">{b.date}</p>
                                    </div>
                                    <div className="px-5">
                                        <button className="fas fa-arrow-right btn seemore  bsm fs-4 px-4 py-3 btn-class"/>
                                    </div>
                                </div>
                            )
                        })

                    }
                    <div className="d-flex justify-content-center">
                        <button className="rounded-pill seemore btmsm btn my-5  fw-bold py-2 fs-6">See More</button>
                    </div>
                </div>
            </div>
    );
};

export default Blogs;