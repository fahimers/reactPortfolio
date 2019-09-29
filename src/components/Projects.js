import React from "react";
import PROJECTS from "../data/projects";

const Project = props => {


    const { title, image, desciption, link } = props.project;

    return (
        <div
            style={{
                display: "inline-block",
                width: 300,
                margin: 10
            }}
        >
            <h3> {title} </h3>{" "}

            <a href={link}>
                <img
                    src={image}
                    alt="profile"
                    style={{
                        width: 200,
                        height: 120
                    }}
                />{" "}
                {link}</a>
            <p> {desciption} </p> {" "}
        </div>
    );
}


const Projects = () => (


    <div>

        <h2> Highlitends Projects </h2>
        <div>
            {
                PROJECTS.map(PROJECT => (

                    < Project key={PROJECT.id} project={PROJECT} />
                ))
            }

        </div>
    </div>

)

export default Projects;
