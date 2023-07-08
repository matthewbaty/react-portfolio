import React from "react";
import MyImage from "../../assets/images/my-family3.png";

export default function About() {
    return (
        <section className="row text-center m-3">
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center text-center p-3">
                <h1 className="display-4">About Me</h1>
                <p className="font-san-serif">Hello, everyone! My name is Matthew Baty, I am 28 years old, and I live in Charlotte, NC. I have been
                    here for almost 6 years with my wife, Riley. I joined the Marine Corps right after high school and I
                    served honorably for four years. Following the Marine Corps, I moved to the Charlotte area to be
                    with my then fiancee. We got married shortly after and will be celebrating our 6th anniversary this
                    year. I attended Winthrop University shortly after moving here and receieved my BS in Corporate Finance. I
                    worked full time in retail management while going to school. I then transitioned into my current
                    job, Speed Digital. I have had a few different roles while working there, but I just recently transitioned to an 
                    Associate Full Stack Developer thanks to the UNC Charlotte Coding Bootcamp. I am excited to see where this new career path takes me!</p>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img src={MyImage} className="img-fluid m-3" alt="Matthew Baty and his family" />
            </div>
        </section>
    );
}