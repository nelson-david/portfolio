import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const links = [
    {
        name: "About",
        to:"#about"
    },
    {
        name: "Experience",
        to:"#jobs"
    },
    {
        name: "Work",
        to:"#projects"
    },
    {
        name: "Contact",
        to:"#contact"
    },
    {
        name: "Resume",
        to:"/resume.pdf",
    },
];

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};
const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const MobileSidebar = ({ open, cycleOpen }) => {
    return (
        <>
            <AnimatePresence initial={false}>
            {open&&(
            <motion.main
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                onClick={cycleOpen}
                className="fixed-top mobileSidebar"
            >
                <motion.aside
                    initial={{ width: 0 }}
                    animate={{ width: 250 }}
                >
                    <motion.ul
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sideVariants}
                        >
                        {
                            links.map((link, index) => {
                                return (
                                    <motion.li key={index} variants={itemVariants}>
                                        <Link href={link.to}>{link.name}</Link>
                                    </motion.li>
                                )
                            })
                        }
                    </motion.ul>
                </motion.aside>
            </motion.main>
            )}
            </AnimatePresence>
        </>
    )
}

export default MobileSidebar;