import { useState } from "react";
import SubmitButton from "./SubmitButton";
import EditButton from "./EditButton";

export default function PersonalInfo() {
    const [editState, setEditState] = useState(true)

    const [personalInfo, setPersonalInfo] = useState({
        fullname: 'Bryce',
        email: 'email@gmail.com',
        phone: '111-111-1111'
    })

    const changeFullname = (e) => {
        const newFullname = {...personalInfo, fullname: e.target.value}
        setPersonalInfo(newFullname)
    }
    const changeEmail = (e) => {
        const newEmail = {...personalInfo, email: e.target.value}
        setPersonalInfo(newEmail)
    }
    const changePhone = (e) => {
        const newPhone = {...personalInfo, phone: e.target.value}
        setPersonalInfo(newPhone)
    }

    if (editState) {
        return (
            <section>
                <h2>Personal Info</h2>
                <div className="container">
                    <div className="form-container">
                        <div className="form-box">
                            <label htmlFor="fullname">Full name:</label>
                            <input 
                                type="text" 
                                id="fullname" 
                                onChange={changeFullname} 
                                value={personalInfo.fullname}
                            />
                        </div>
                        <div className="form-box">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email"
                                onChange={changeEmail}
                                value={personalInfo.email}
                            />
                        </div>
                        <div className="form-box">
                            <label htmlFor="phone">Phone:</label>
                            <input 
                                type="tel" 
                                id="phone"
                                onChange={changePhone}
                                value={personalInfo.phone}
                            />
                        </div>
                    </div>
                    <div className="right-button">
                    <SubmitButton
                        editState={editState}
                        setEditState={setEditState}
                    />
                    </div>
                </div> 
            </section>
    )}

    if (!editState) {
        return (
            <section>
                <h2>Personal Info</h2>
                <div className="container">
                    <div className="info-container">    
                        <h3>{personalInfo.fullname}</h3>
                        <h4>{personalInfo.email}</h4>
                        <h4>{personalInfo.phone}</h4>
                    </div>
                    <div className="right-button">
                        <EditButton
                            editState={editState}
                            setEditState={setEditState}
                        />
                    </div>
                </div>
            </section>
    )}              
}