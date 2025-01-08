import {
    FiFacebook,
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
} from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="customFooter">
            <ul className="iconsList">
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
                        href="https://www.linkedin.com/in/david-nelson-298412189/"
                        className="social-link"
                        target="_blank"
                        rel="noreferrer"
                        title="LinkedIn"
                    >
                        <FiLinkedin />
                    </a>
                </li>
            </ul>
            <ul>
                <li>Built with ❤️ by David Chika</li>
            </ul>
        </footer>
    );
};

export default Footer;
