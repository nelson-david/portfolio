import {
    FiFacebook,
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
} from "react-icons/fi";

const Sidebar = () => {
    return (
        <div className="customSidebar fixed-top">
            <div className="bars firstBar">
                <ul>
                    <li>
                        <a
                            href="https://github.com/nelson-david"
                            className="social-link"
                            target="_blank"
                            rel="noreferrer"
                            title="Github"
                        >
                            <FiGithub />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/urbandev__"
                            className="social-link"
                            target="_blank"
                            rel="noreferrer"
                            title="Instagram"
                        >
                            <FiInstagram />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/urbandev__"
                            className="social-link"
                            target="_blank"
                            rel="noreferrer"
                            title="Twitter"
                        >
                            <FiTwitter />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/urban.devv"
                            className="social-link"
                            target="_blank"
                            rel="noreferrer"
                            title="Facebook"
                        >
                            <FiFacebook />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/davidchika"
                            className="social-link"
                            target="_blank"
                            rel="noreferrer"
                            title="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="bars secondBar">
                <ul>
                    <li>
                        <a
                            href="mailto:ogwunelsondavid@gmail.com"
                            className="social-link"
                            id="verticalWriting"
                            title="Email Address"
                        >
                            ogwunelsondavid@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
