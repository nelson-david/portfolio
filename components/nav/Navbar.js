import Link from "next/link";
import { motion, useCycle } from "framer-motion";
import { VscThreeBars } from "react-icons/vsc";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {

    const [open, cycleOpen] = useCycle(false, true);

    const toggleSidebar = (e) => {
        e.preventDefault();
        cycleOpen();
    }

    return (
        <>
            <MobileSidebar
                open={open}
                cycleOpen={cycleOpen}
            />
            <nav className="customNav">
                <ul id="mobileNav">
                    <li>
                        <Link href="/">
                            <motion.a
                                id="logo"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                title="David Chika"
                            >
                                urban<span>.dev__</span>
                            </motion.a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a onClick={toggleSidebar}>
                                <VscThreeBars id="bars" />
                            </a>
                        </Link>
                    </li>
                </ul>
                <ul id="desktopNav">
                    <div>
                        <li>
                            <Link href="/">
                                <motion.a
                                    id="logo"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    urban<span>.dev__</span>
                                </motion.a>
                            </Link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <Link href="#about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#jobs">
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects">
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <a href="/resume.pdf" target="_blank" rel="noreferrer" id="buttonLink">
                                Resume
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;