import React from 'react';

const Contact = () => {
    return (
        <div className="px-4 px-md-0">
            <div className="row cont px-5 px-md-0"
                 style={{
                     height:'400px',
                     backgroundImage:'url(/image/contact.jpg)',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                 }}>
                <h4 className="text-center text-dark" style={{marginTop:'150px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dolor eum illum molestiae tempora temporibus totam ullam vero voluptatem! Amet atque cumque deleniti in possimus, quidem quis tempore voluptatibus.</h4>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="rounded-pill seemore btmsm btn my-5 py-3 fw-bold fs-6 text-light">See More</button>
                </div>
            </div>
            <div className="row min-vh-lg-100 pb-5 contact-container justify-content-center align-items-start course" >
                <div className="col-12 col-md-11">
                    <div className="d-flex justify-content-between px-4 px-md-0 align-items-center border-bottom pb-5 border-2 border-secondary" style={{marginTop:'100px'}}>

                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <p className="fw-bold text-light me-md-5">Mobile App</p>
                            <p className="fw-bold text-light me-md-5">Community</p>
                            <p className="fw-bold text-light me-md-5">Company</p>
                        </div>
                        <div>
                            <p className="fw-bold text-light fs-2 d-none d-md-block"><i className="fas fa-crown  me-md-2"></i>LOGO</p>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <p className="fw-bold text-light ms-md-5">Help desk</p>
                            <p className="fw-bold text-light ms-md-5">Blog</p>
                            <p className="fw-bold text-light ms-md-5">Resources</p>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center flex-column align-items-center" style={{marginTop:'130px'}}>
                        <div className="d-none d-md-block box1"/>
                        <div className="d-none d-md-block box2"/>
                        <div className="d-none d-md-block box3"/>
                        <div className="d-none d-md-block box4"/>
                        <div className="d-flex justify-content-center align-items-center">
                            <span className="fa-brands fa-facebook text-secondary fs-4 ms-5 me-5"/>
                            <span className="fa-brands fa-twitter text-secondary fs-4 me-5"/>
                            <span className="fas fa-basketball text-secondary fs-4 me-5"/>
                            <span className="fa-brands fa-github text-secondary fs-4 me-5"/>
                        </div>
                        <p className="mt-5">&#169; Photo , Inc.2019. We love our users !</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;