

import style from './StudentRegisterCard.module.scss'

interface card {
    number:string
}


export default function StudentRegisterCard(props:card) {
    return (
        <div className={style.container}>
                    <div className={style.heading}>
                        Student {props.number}
                    </div>
                    <div className={style.formContainer}>
                        <div className={style.row}>
                            <div className={style.col}>
                                    <label htmlFor="Name" className={style.labelText}>First Name</label>
                                    <input className={style.input} type="text" />
                                </div>
                                <div className={style.col}>
                                    <label htmlFor="Name" className={style.labelText}>Last Name</label>
                                    <input className={style.input} type="text" />
                                </div>
                                <div className={style.col}>
                                    <label htmlFor="Gender" className={style.labelText}>Gender</label>
                                    <select name="Gender" className={style.input}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className={style.col}>
                                    <label htmlFor="Date of Birth" className={style.labelText}>Date of Birth</label>
                                    <input type="date" name="DOB" className={style.input} />
                                </div>
                            </div>
                            <div className={style.row}>
                                <div className={style.col}>
                                    <label htmlFor="Category" className={style.labelText}>Grade Group</label>
                                    <select name="Category" className={style.input}>
                                        <option value="Junior Secondary">Junior Secondary</option>
                                        <option value="Senior Secondary">Senior Secondary</option>
                                    </select>
                                </div>
                                <div className={style.col}>
                                    <label htmlFor="Competition Category" className={style.labelText}>Competition Category</label>
                                    <select name="Competition Category" className={style.input}>
                                        <option value="Science">Science</option>
                                        <option value="Humanities">Humanities</option>
                                    </select>
                                </div>
                                <div className={style.col}>
                                    <label htmlFor="Class" className={style.labelText}>Class</label>
                                    <select name="Class" className={style.input}>
                                        <option value="Year 7">Year 7 / Grade 7 / JSS1</option>
                                        <option value="Year 8">Year 8 / Grade 8 / JSS1</option>
                                    </select>
                                </div>
                                <div className={style.col}>
                                    <label htmlFor="Phone No" className={style.labelText}>Registered uLesson Number</label>
                                    <input type="tel" className={style.input} />
                                </div>
                            </div>
                    </div>
            </div>
    )
}