import React, {useRef} from 'react';
import {BrowserRouter, HashRouter, Link, Route, Routes} from "react-router-dom";
import About from "./About";
import '../App.css'
import CourseProgram from "./CourseProgram";
import IntenstiveClass from "./IntenstiveClass";
import CampusLife from "./CampusLife";
import Blogs from "./Blogs";
import Contact from "./Contact";


const Home = () => {

    const about=useRef(null);
    const course=useRef(null);
    const classes=useRef(null);
    const blog=useRef(null);
    const contact=useRef(null);

    const setScrollToSection=(element)=>{
        window.scrollTo({
            top:element.current.offsetTop,
            behavior:'smooth'
        })
    }

    return (
        <div className="home">
            {/*home*/}
            <section className="container-fluid home-section">
                <div className="row min-vh-100 bg"
                     style={{
                         backgroundImage:'url(/image/bg.jpg)',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'cover',
                     }}>
                    <BrowserRouter className="d-flex">
                        <nav className=" align-items-center h-25 d-flex  bg-white mt-4 rounded-pill mx-auto" style={{width:'600px',transition:'.5s'}}>
                            <Link className="navbar-brand fw-bolder" to="#" style={{marginLeft:'-110px'}}>
                                Logo
                            </Link>
                            <div className="ms-5 d-flex justify-content-center" id="navbarSupportedContent">
                                <ul className="d-flex justify-content-center align-items-center mt-2">
                                    <li className=" mx-1 mx-md-3" >
                                        Home
                                    </li>

                                    <li className="mx-1 mx-md-3" onClick={()=> setScrollToSection(about)}>
                                        About
                                    </li>

                                    <li className="mx-1 mx-md-3 d-none d-md-block" onClick={()=> setScrollToSection(course)}>
                                        Course Program
                                    </li>
                                    <li className="mx-1 mx-md-3 d-block d-md-none" onClick={()=> setScrollToSection(course)}>
                                        Course
                                    </li>

                                    <li className="mx-1 mx-md-3" onClick={()=> setScrollToSection(classes)}>
                                        Intensive Program
                                    </li>

                                    <li className="mx-1 mx-md-3" onClick={()=> setScrollToSection(blog)}>
                                        Blog
                                    </li>
                                </ul>
                                <div>
                                    <button onClick={()=> setScrollToSection(contact)} className="btn-contact d-none d-md-block btn rounded-pill" style={{marginRight:'-300px',height:'50px'}}>Contact Us</button>
                                </div>
                            </div>
                        </nav>
                        <div className="d-flex justify-content-center">
                            <button onClick={()=> setScrollToSection(contact)} className="btn-contact w-50 d-block d-md-none btn rounded-pill" style={{marginTop:'-120px',height:'50px'}}>Contact Us</button>
                        </div>
                    </BrowserRouter>
                    <div className="des h-50 mt-auto d-flex flex-column justify-content-end pb-5">
                        <div>
                            <h1 className="text-light text-center fw-bolder">Japanese Language Classes <br/> that make difference</h1>
                            <div id="curve" className="d-none d-md-block"/>
                            <div className="register rounded-pill float-end p-2 d-flex" style={{width:'450px',marginRight:'-100px'}}>
                                <img src={'image/bg.jpg'} width="150px" height="75px"/>
                                <div className="ms-2">
                                    <h4 className="text-light fw-bold">Register Here</h4>
                                    <h6 className="text-light mt-2">Click Here To View Classes</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*about*/}
            <section className="container-fluid about-section" ref={about}>
                <About/>
            </section>

            {/*course*/}
            <section className="course container-fluid course-section" ref={course}>
                <CourseProgram/>
            </section>
            {/*class*/}
            <section className=" container-fluid class-section" ref={classes}>
                <IntenstiveClass/>
            </section>
            {/*campus*/}
            <section className=" container-fluid campus-section course">
                <CampusLife/>
            </section>
            {/*blog*/}
            <section className=" container-fluid blog-section" ref={blog}>
                <Blogs/>
            </section>
            {/*contact*/}
            <section className=" container-fluid contact-section" ref={contact}>
                <Contact/>
            </section>
        </div>
    );
};

export default Home;