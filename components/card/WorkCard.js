import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workPlace } from "../../data/workPlace";

const WorkCard = () => {

    const [currentWorkPlace, setCurrentWorkPlace] = useState(0);
    const [currentJob, setCurrentJob] = useState(workPlace[currentWorkPlace]);

    return (
        <div className="workSectionCard">
            <ul className="workPlaceList">
            {
                workPlace.map((place) => {
                    return (
                        <SingleWorkPlaceList
                            key={place.id}
                            place={place}
                            currentWorkPlace={currentWorkPlace}
                            setCurrentWorkPlace={setCurrentWorkPlace}
                            setCurrentJob={setCurrentJob}
                        />
                    )
                })
            }
            </ul>
            <div className="workPlaceDescription">
                <AnimatePresence initial={false}>
                    <motion.section>
                        <h3>{currentJob.jobTitle} <a href={currentJob.website!=="null"?`https://${currentJob.website}`:"_blank"} target="_blank" rel="noreferrer">@{currentJob.name}</a></h3>
                        <h4>{currentJob.duration}</h4>
                        <ul>
                        {
                            currentJob.tasks.map((task, index) => {
                                return (
                                    <li key={index}>{task}</li>
                                )
                            })
                        }
                        </ul>
                    </motion.section>
                </AnimatePresence>
            </div>
        </div>
    )
}

const SingleWorkPlaceList = ({ currentWorkPlace, setCurrentWorkPlace, setCurrentJob, place }) => {

    const changeJob = () => {
        setCurrentWorkPlace(place.id);
        setCurrentJob(workPlace[place.id]);
    }
    
    return (
        <li
            className={currentWorkPlace===place.id?`active`:``}
            onClick={changeJob}
        >
            {place.name}
        </li>
    )
}

export default WorkCard;