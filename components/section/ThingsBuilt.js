import Image from "next/image";
import { myProjects } from "../../data/myProjects";
import MobileSingleProject from "../card/MobileSingleProject";

const ThingsBuilt = () => {
    return (
        <section className="builtSection" id="projects">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="sectionHeader">
                        <span data-counter="3">Some Things I’ve Built</span>
                    </div>
                    <div className="projectsDiv">
                        {myProjects.map((project, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`singleProject ${project.position}`}
                                >
                                    <MobileSingleProject
                                        project={project}
                                        id={index}
                                    />
                                    <div className="row singleProjectDesktopRow">
                                        {project.position === "left" && (
                                            <div className="col-md-5 projectCol">
                                                <div className="singleProjectContent">
                                                    <span>
                                                        Featured Project
                                                    </span>
                                                    <h3>{project.title}</h3>

                                                    <div className="singleProjectDescription">
                                                        <p>
                                                            {
                                                                project.description
                                                            }
                                                        </p>
                                                    </div>

                                                    <ul className="singleProjectStacks">
                                                        {project.stacks.map(
                                                            (stack, index) => {
                                                                return (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {stack}
                                                                    </li>
                                                                );
                                                            },
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                        <div className="col-md-7 projectCol">
                                            <div className="singleProjectImgDiv">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href={project.link}
                                                    tabIndex={index}
                                                >
                                                    <Image
                                                        src={project.image}
                                                        alt={`${project.title}`}
                                                        placeholder="blur"
                                                        blurDataURL={
                                                            project.blurImg
                                                        }
                                                        width={700}
                                                        height={330}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        {project.position === "right" && (
                                            <div className="col-md-5 projectCol">
                                                <div className="singleProjectContent">
                                                    <span>
                                                        Featured Project
                                                    </span>
                                                    <h3>{project.title}</h3>

                                                    <div
                                                        className="singleProjectDescription"
                                                        style={{
                                                            marginLeft: "auto",
                                                        }}
                                                    >
                                                        <p>
                                                            {
                                                                project.description
                                                            }
                                                        </p>
                                                    </div>

                                                    <ul
                                                        className="singleProjectStacks"
                                                        style={{
                                                            justifyContent:
                                                                "flex-end",
                                                        }}
                                                    >
                                                        {project.stacks.map(
                                                            (stack, index) => {
                                                                return (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {stack}
                                                                    </li>
                                                                );
                                                            },
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThingsBuilt;
