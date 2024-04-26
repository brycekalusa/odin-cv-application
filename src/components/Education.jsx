import { useState } from "react";
import SubmitButton from "./SubmitButton";
import EditButton from "./EditButton";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import { v4 as uuid } from "uuid";

export default function Education() {
    const [editState, setEditState] = useState(true)

    const [educationInfo, setEducationInfo] = useState([
        {
        schoolName: 'ISU',
        fieldOfStudy: 'IT',
        graduationYear: '2018',
        id: uuid()
        }
    ])
    const changeSchoolName = index => (e) => {
        const newEducation = {...educationInfo};
        newEducation[index].schoolName = e.target.value;
        setEducationInfo(newEducation);
    }
    const changeStudy = index => (e) => {
        const newEducation = {...educationInfo};
        newEducation[index].fieldOfStudy = e.target.value;
        setEducationInfo(newEducation);
    }
    const changeGrad = index => (e) => {
        const newEducation = {...educationInfo};
        newEducation[index].graduationYear = e.target.value;
        setEducationInfo(newEducation);
    }
    const addNewEducation = () => {
        setEducationInfo([...educationInfo, {
            schoolName: '',
            fieldOfStudy: '',
            graduationYear: '',
            id: uuid()
        }])
        setEditState(true)
    }
    const deleteEducation = index => () => {
        const newEducation = educationInfo.filter(education => {
            return education.id !== educationInfo[index].id
        })
        setEducationInfo(newEducation)
    }
    
    if (editState) {
        return (
            <section>
                <h2>Education</h2>
                <div className="container">
                    <div className="form-container">
                        <ul>
                            {educationInfo.map((education, index) => {
                                return <li key={education.id}>
                                    <div className="form-box">
                                        <label htmlFor="school-name">School Name:</label>
                                        <input 
                                            type="text" 
                                            id="school-name"
                                            onChange={changeSchoolName(index)}
                                            value={education.schoolName}
                                        />
                                    </div>
                                <div className="form-box">
                                    <label htmlFor="study">Field of Study:</label>
                                    <input 
                                        type="text" 
                                        id="study"
                                        onChange={changeStudy(index)}
                                        value={education.fieldOfStudy}
                                    />
                                </div>
                                <div className="form-box">
                                    <label htmlFor="graduation-year">Graduation Year:</label>
                                    <input 
                                        type="text" 
                                        id="graduation-year"
                                        onChange={changeGrad(index)}
                                        value={education.graduationYear}
                                    />
                                </div>
                                <DeleteButton
                                    deleteFunction={deleteEducation(index)}
                                />
                                </li> 
                            })}
                            <AddButton
                                setEditState={setEditState}
                                addNewEntry={addNewEducation}
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
            <h2>Education</h2>
            <div className="container">
                <div className="info-container">
                    <ul>
                        {educationInfo.map((education) => {
                            return <li key={education.id}>
                                <h3>{education.schoolName}</h3>
                                <h4>{education.fieldOfStudy}</h4>
                                <p>Graduated: {education.graduationYear}</p>
                        </li>
                        })}
                        <AddButton
                        setEditState={setEditState}
                        addNewEntry={addNewEducation}
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