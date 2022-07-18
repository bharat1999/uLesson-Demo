/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react'
import style from './schoolRegister.module.scss'
import RegistrationRules from '../components/RegistrationRules'
import RegistrationTop from '../components/RegistrationTop'
import Manual from '../components/Manual'
import Bulk from '../components/Bulk'

const data = {
    heading:'uLesson Challenge Registration (Schools)',
    data:['Identify students to enter for each of the four categories.',
        'Make sure each student  has an existing free or paid uLesson account.',
        'Students who do not have existing uLesson accounts can create for free. (available on Android, iOS, and web).',
        'Fill in School details in fields provided.',
        'Download the .csv template to collate student details',
        'Please ensure that the mobile number provided for each student is the same as the contact they registered on the uLesson app.']
}

export default function SchoolRegister() {
    const [uploadType,setUploadType] = useState('manual');

        function handleClick() 
        {
            if(uploadType=='manual')
                setUploadType('bulk');
            else
                setUploadType('manual')
            console.log(uploadType)
        }

        useEffect(()=> setUploadType('manual'),[])
    return (
        
        <div className={style.mainContainer}>
            <RegistrationTop/>
            <RegistrationRules heading={data.heading} data={data.data}/>
            <div className={style.container}>
                    <div className={style.heading}>
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
                                    <label htmlFor="Principal Name" className={style.labelText}>Name of Principal / Head of School</label>
                                    <input type="text" name="Name Principal" className={style.principal + ' ' +  style.input} />
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
            <div className={style.container}>
                    <div className={style.heading}>
                        Student Details
                    </div>
                    <div className={style.formContainer}>
                            <div className={style.row}>
                                <div className={style.col}>
                                    <label htmlFor="input Option" className={style.labelText}>How do you want to add your candidates?</label>
                                    <div className={style.radioGroup} >
                                        <input className={style.radio} onChange={handleClick} type="radio" value="Manual" name="upload option" checked={uploadType=='manual'} /> Manually
                                        <input className={style.radio} onChange={handleClick} type="radio" value="bulk" name="upload option" checked={uploadType=='bulk'}/> Bulk upload student details 
                                    </div>
                                </div>
                            </div>
                            {uploadType=='manual'?<Manual/>:<Bulk/>}
                    </div>
            </div>
            <div className={style.btnContainer}>
                <button type='button' className={style.btn} onClick={()=>{console.log("clicked")}}>Submit</button>
            </div>
        </div>
    )
}