import Image from "next/image";

const MobileSingleProject = ({ project, id }) => {
    return (
        <div className="mobileSingleProject">
            <a
                target="_blank"
                rel="noreferrer"
                href={project.link}
                tabIndex={id}
            >
                <div className="mobileSingleProjectImageDiv">
                    <Image
                        src={project.image}
                        alt={project.title}
                        blurDataURL={project.blurImg}
                    />
                </div>

                <div className="mobileSingleProjectContent">
                    <div>
                        <span>Featured Project</span>
                        <h3>{project.title}</h3>
                        <div className="mobileProjectDescription">
                            <p>{project.description}</p>
                        </div>

                        <ul>
                            {project.stacks.map((stack, index) => {
                                return <li key={index}>{stack}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default MobileSingleProject;
