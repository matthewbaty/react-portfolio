import React from "react";
import { projects } from "../../projects";

export default function Projects() {
    return (
        <section id="projects" className="m-3 pb-5">
            <div className="text-center">
                <h1 className="d-flex justify-content-center">Projects</h1>
            </div>
            {projects.map((res) => (
                <div id="projectCard" className="row border-top">
                    <div className="col-md-6 d-flex align-items-center justify-content-center text-center">
                        <div>
                            <a
                                className="text-dark text-decoration-none"
                                href={res.deployLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <h2>{res.title}</h2>
                            </a>
                            <p>{res.description}</p>
                            <a
                                className="githubLink text-dark text-decoration-none"
                                href={res.repoLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p>GitHub Repository</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <a
                            href={res.deployLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={res.image}
                                alt={res.title}
                                className="img-fluid m-3"
                            />
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
}