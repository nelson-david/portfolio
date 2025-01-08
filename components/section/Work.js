import WorkCard from "../card/WorkCard";

const Work = () => {
    return (
        <section className="workSection" id="jobs">
            <div className="row justify-content-center">
                <div className="col-xl-9 col-lg-10 col-md-11">
                    <div className="sectionHeader">
                        <span data-counter="2">Where I’ve Worked</span>
                    </div>
                    <WorkCard />
                </div>
            </div>
        </section>
    )
}

export default Work;