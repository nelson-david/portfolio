import AboutMe from "../section/AboutMe";
import ContactMe from "../section/ContactMe";
import ThingsBuilt from "../section/ThingsBuilt";
import Work from "../section/Work";

const LandingPage = () => {
    return (
        <div className="container-fluid" id="scrollContainer">
            <section className="headerSection">
                <span className="caption">Hi, my name is</span>
                <h1 className="title" title="Software Developer">
                    David Chika.
                    <span>
                        The Next <i>Big Thing.</i>
                    </span>
                </h1>
                <p className="subtitle" title="David Chikabadu">
                    Software Developer & Critical Thinker. I enjoy turning
                    complex problems into simple and beautiful designs. My job
                    is to give you a smooth, beautiful, and user-friendly
                    product. I aim to provide you with the best and work as hard
                    as I can to make your product eye-catching.
                </p>
                <div className="buttonDiv">
                    <a href="https://blog.davidchika.xyz">Check out my Blog!</a>
                    <a href="https://store.theurban.studio">My Asset Store</a>
                </div>
            </section>
            <br />
            <AboutMe />
            <Work />
            <ThingsBuilt />
            <ContactMe />
        </div>
    );
};

export default LandingPage;
