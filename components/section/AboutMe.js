import Image from "next/image";

const AboutMe = () => {
    return (
        <section className="aboutMeSection" id="about">
            <div className="row justify-content-center">
                <div className="col-md-7 col-12">
                    <div className="sectionHeader">
                        <span data-counter="1">About Me</span>
                    </div>
                    <div className="shortIntroduction">
                        <p>
                            I&apos;m David Chika, and I love turning complex
                            problems into simple, beautiful designs. My tech
                            journey started in 2018 when I began experimenting
                            with DIY toys and Arduinos, which introduced me to
                            programming.
                        </p>
                        <p>
                            Fast-forward to today, and I&apos;ve had the
                            privilege of working at a startup, a large
                            corporation, and as a tech community assistant.
                            Currently, my focus is on creating accessible and
                            inclusive digital experiences for clients at
                            Antigravity Group.
                        </p>{" "}
                        <p>
                            I use a range of tools and languages in my
                            development process, although I don&apos;t typically
                            include frameworks in that list;
                        </p>
                        <ul>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/javascript"
                                    dangerouslyAllowSVG={true}
                                />
                                Javascript
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/react"
                                    dangerouslyAllowSVG={true}
                                />
                                React
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/node.js"
                                    dangerouslyAllowSVG={true}
                                />
                                Node.js
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/ionic"
                                    id="nextJSIndicator"
                                    dangerouslyAllowSVG={true}
                                />
                                Ionic
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/python"
                                    dangerouslyAllowSVG={true}
                                />
                                Python
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/redis"
                                    dangerouslyAllowSVG={true}
                                />
                                Redis
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/netlify"
                                    dangerouslyAllowSVG={true}
                                />
                                Netlify
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/linux"
                                    dangerouslyAllowSVG={true}
                                />
                                Linux
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/mongodb"
                                    dangerouslyAllowSVG={true}
                                />
                                MongoDB
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/bootstrap"
                                    dangerouslyAllowSVG={true}
                                />
                                Bootstrap
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/git"
                                    dangerouslyAllowSVG={true}
                                />
                                Git
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/electron"
                                    dangerouslyAllowSVG={true}
                                />
                                Electron
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/docker"
                                />
                                Docker
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/typescript"
                                    dangerouslyAllowSVG={true}
                                />
                                Typescript
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/next.js"
                                    style={{ filter: "invert(100%)" }}
                                    dangerouslyAllowSVG={true}
                                />
                                NextJS
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/react"
                                    dangerouslyAllowSVG={true}
                                />
                                React Native
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/axios"
                                    dangerouslyAllowSVG={true}
                                />
                                Axios
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/ubuntu"
                                    dangerouslyAllowSVG={true}
                                />
                                Ubuntu
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/amazonec2"
                                    dangerouslyAllowSVG={true}
                                />
                                AWS EC2
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/amazons3"
                                    dangerouslyAllowSVG={true}
                                />
                                AWS S3
                            </li>
                            <li>
                                <img
                                    height={20}
                                    width={20}
                                    src="https://cdn.simpleicons.org/ethers"
                                    dangerouslyAllowSVG={true}
                                />
                                Ethers
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-5 col-sm-7 col-8" id="imgCol">
                    <div className="imageDiv">
                        <Image
                            src={require("../../assets/images/passport.webp")}
                            alt="David Chikabadu Ogwu-Nelson"
                            width={510}
                            height={490}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
