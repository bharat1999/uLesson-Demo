/* eslint-disable react/no-unescaped-entities */

import style from './studentRegister.module.scss'
import RegistrationRules from '../components/RegistrationRules'
import RegistrationTop from '../components/RegistrationTop'

const data = {
    heading:'uLesson Challenge Registration (Student)',
    data:['Student MUST have an accessible uLesson account. Click here to sign up on uLesson.',
        'Fill in School details in fields provided.',
        'Complete your personal details',
        'Please ensure that the mobile number you provide is the same as the contact on your uLesson account. ',
        'Review and submit your details.']
}

export default function studentRegister() {
    return (
        <div className={style.mainContainer}>
            <RegistrationTop/>
            <RegistrationRules heading={data.heading} data={data.data}/>
            <div className={style.container}>
                    <div className={style.studentHeading}>
                        Student Details
                    </div>
                    <div className={style.formContainer}>
                        <form action="">
                            <div className={style.row}>
                                <div className={style.col}>
                                    <label htmlFor="Name" className={style.labelText}>Name</label>
                                    <input className={style.input} type="text" />
                                </div>
                                <div className={style.col}>
                                    <label htmlFor="Gender" className={style.labelText}>Gender</label>
                                    <select name="Gender" className={style.input}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className={style.row}>
                                <div className={style.col}>
                                    <label htmlFor="Date of Birth" className={style.labelText}>Date of Birth</label>
                                    <input type="date" name="DOB" className={style.input} />
                                </div>
                                <div className={style.col}>
                                    <label htmlFor="Category" className={style.labelText}>Category</label>
                                    <select name="Category" className={style.input}>
                                        <option value="Junior Secondary">Junior Secondary</option>
                                        <option value="Senior Secondary">Senior Secondary</option>
                                    </select>
                                </div>
                            </div>
                            <div className={style.row}>
                                <div className={style.col}>
                                    <label htmlFor="Class" className={style.labelText}>Class</label>
                                    <select name="Class" className={style.input}>
                                        <option value="Year 7">Year 7 / Grade 7 / JSS1</option>
                                        <option value="Year 8">Year 8 / Grade 8 / JSS1</option>
                                    </select>
                                </div>
                                <div className={style.col}>
                                    <label htmlFor="Phone No" className={style.labelText}>uLesson Registered Phone Number</label>
                                    <input type="tel" className={style.input} />
                                </div>
                            </div>
                            
                        </form>
                    </div>
            </div>
            <div className={style.container}>
                    <div className={style.studentHeading}>
                        School Details
                    </div>
                    <div className={style.formContainer}>
                        <form action="">
                            <div className={style.row}>
                                <div className={style.col}>
                                    <label htmlFor="School Name" className={style.labelText}>School Name</label>
                                    <input className={style.input} type="text" />
                                </div>
                                <div className={style.col}>
                                    <label htmlFor="Location" className={style.labelText}>School Location</label>
                                    <select name="Location" className={style.input}>
                                        <option value="Lagos">Lagos</option>
                                        <option value="Dummy">Dummy</option>
                                    </select>
                                </div>
                            </div>
                            <div className={style.row}>
                                <div className={style.col}>
                                    <label htmlFor="School Contact" className={style.labelText}>School Contact</label>
                                    <input type="tel" name="School No" className={style.input} />
                                </div>
                                <div className={style.col}>
                                    <label htmlFor="Principal Name" className={style.labelText}>Name of Principal / Head of School</label>
                                    <input type="text" name="Name Principal" className={style.input} />
                                </div>
                            </div>
                            <div className={style.row}>
                                <div className={style.col}>
                                    <label htmlFor="Principal Email" className={style.labelText}>Principal's Email Address</label>
                                    <input type="email" name="Email" className={style.input} />
                                </div>
                                <div className={style.col}>
                                    <label htmlFor=" Principal Phone No" className={style.labelText}>Principal's Phone Number</label>
                                    <input type="tel" className={style.input} />
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
            <div className={style.btnContainer}>
                <button type='button' className={style.btn} onClick={()=>{console.log("clicked")}}>Submit</button>
            </div>
        </div>
    )
}