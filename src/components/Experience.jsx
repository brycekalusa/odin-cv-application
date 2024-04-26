import { useState } from "react";
import SubmitButton from "./SubmitButton";
import EditButton from "./EditButton";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import { v4 as uuid } from "uuid";

export default function Experience() {
    const [editState, setEditState] = useState(true)
    
    const [experienceInfo, setExperienceInfo] = useState([
        {
            jobTitle: 'Service Desk',
            companyName: 'DPR',
            responsibilities: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            startDate: '2022-02-01',
            endDate: '2024-05-01',
            id: uuid()
        },
        {
            jobTitle: 'IT Analyst',
            companyName: 'Wist',
            responsibilities: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            startDate: '2018-05-01',
            endDate: '2021-10-01',
            id: uuid()
        }
    ])
    const changeTitle = index => (e) => {
        const newExperience = [...experienceInfo];
        newExperience[index].jobTitle = e.target.value;
        setExperienceInfo(newExperience);
    }
    const changeComp = index => (e) => {
        const newExperience = [...experienceInfo];
        newExperience[index].companyName = e.target.value;
        setExperienceInfo(newExperience);
    }
    const changeResponsibilities = index => (e) => {
        const newExperience = [...experienceInfo];
        newExperience[index].responsibilities = e.target.value;
        setExperienceInfo(newExperience);
    }
    const changeStartDate = index => (e) => {
        const newExperience = [...experienceInfo];
        newExperience[index].startDate = e.target.value;
        setExperienceInfo(newExperience);
    }
    const changeEndDate = index => (e) => {
        const newExperience = [...experienceInfo];
        newExperience[index].endDate = e.target.value;
        setExperienceInfo(newExperience);
    }
    const addNewExperience = () => {
        setExperienceInfo([...experienceInfo, {
            jobTitle: '',
            companyName: '',
            responsibilities: '',
            startDate: '',
            endDate: '',
            id: uuid()
        }])
        setEditState(true)
    }
    const deleteExperience = index => () => {
        const newExperience = experienceInfo.filter(experience => {
            return experience.id !== experienceInfo[index].id
        })
        setExperienceInfo(newExperience)
    }
    
    if (editState) {
        return (
            <section>
                <h2>Experience</h2>
                <div className="container">
                    <div className="form-container">
                    <ul>
                    {experienceInfo.map((experience, index) => {
                        return <li key={experience.id}>
                        <div className="form-box">
                            <label htmlFor="title">Job title:</label>
                            <input 
                                type="text" 
                                id="title"
                                onChange={changeTitle(index)}
                                value={experience.jobTitle}
                            />
                        </div>
                        <div className="form-box">
                            <label htmlFor="company-name">Company Name:</label>
                            <input 
                                type="text" 
                                id="company-name"
                                onChange={changeComp(index)}
                                value={experience.companyName}
                            />
                        </div>
                        <div className="form-box">
                            <label htmlFor="responsibilities">Responsibilities:</label>
                            <textarea 
                                type="text" 
                                id="responsibilites"
                                onChange={changeResponsibilities(index)}
                                value={experience.responsibilities}
                            />
                        </div>
                        <div className="form-box">
                            <label htmlFor="start-date">Start date:</label>
                            <input 
                                type="date" 
                                id="start-date"
                                onChange={changeStartDate(index)}
                                value={experience.startDate}
                            />
                        </div>
                        <div className="form-box">
                            <label htmlFor="end-date">End date:</label>
                            <input 
                                type="date" 
                                id="end-date"
                                onChange={changeStartDate(index)}
                                value={experience.endDate}
                            />
                        </div>
                        <DeleteButton
                            deleteFunction={deleteExperience(index)}
                        />
                    </li>
                })}
                <AddButton
                    setEditState={setEditState}
                    addNewEntry={addNewExperience}
                />
                </ul>
                </div>
                <div className="right-button">
                <SubmitButton
                    editState={editState}
                    setEditState={setEditState}
                />
                </div>
                </div>
            </section>
        )
    }

    if (!editState) {
        return (
        <section>
            <h2>Experience</h2>
            <div className="container">
                <div className="info-container">
                    <ul>
                        {experienceInfo.map((experience) => {
                        return <li key={experience.id}>
                            <h3>{experience.jobTitle}</h3>
                            <h4>{experience.companyName}</h4>
                            <p>{experience.responsibilities}</p>
                            <p>Start Date: {experience.startDate}
                                /End Date: {experience.endDate}</p>
                        </li>     
                        })}    
                        <AddButton
                            setEditState={setEditState}
                            addNewEntry={addNewExperience}
                        />
                    </ul>
                </div>
                <div className="right-button">
                    <EditButton
                        editState={editState}
                        setEditState={setEditState}
                    />
                </div>
            </div>
        </section>
        )
    }
}

