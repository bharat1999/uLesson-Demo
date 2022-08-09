/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react'
import style from './schoolRegister.module.scss'
import RegistrationRules from '../components/RegistrationRules'
import RegistrationTop from '../components/RegistrationTop'
import StudentRegisterCard from '../components/StudentRegisterCard'
import TextInput from '../components/TextInput'
import Dropdown from '../components/Dropdown'
import Router, { useRouter } from 'next/router'


const data = {
    heading:'uLesson Challenge Registration (Schools)',
    data:['Identify students to enter for each of the four categories.',
        'Make sure each student  has an existing free or paid uLesson account.',
        'Students who do not have existing uLesson accounts can create for free. (available on Android, iOS, and web).',
        'Fill in School details in fields provided.',
        'Download the .csv template to collate student details',
        'Please ensure that the mobile number provided for each student is the same as the contact they registered on the uLesson app.']
}


const examLocation = [
    {value:'lagos',label:'Lagos'},
    {value:'abuja',label:'Abuja'}
]


export default function SchoolRegister() {
    const [modalOpen,setModalOpen] = useState(false)
    const [students,setStudents] = useState(1)
    const [studentCard,setStudentCard] = useState([<StudentRegisterCard number='1'/>])

    useEffect(()=> {
        if(students==0)
        {
            setStudentCard([])
            return;
        }
        var rows:JSX.Element[] = []
        for(var i=1;i<=students;i++)
        {
            rows.push(<StudentRegisterCard number={i.toString()}/>)
        }
        setStudentCard(rows)
    },[students])

    const router = useRouter()
    return (
        <div className={(modalOpen==true?style.dark:'')}>
            <div className={style.mainContainer}>
                <RegistrationTop modalOpen={modalOpen} setOpenModal={setModalOpen} heading='Are you sure you want to cancel your registration?' subheading='Kindly confirm if you want to cancel the registration process.' btnText='Back to Registration'/>
                <RegistrationRules heading={data.heading} data={data.data}/>
                <form action="">
                    <div className={style.container}>
                        <div className={style.heading}>
                            School Details
                        </div>
                        <div className={style.formContainer}>
                            <div className={style.row}>
                                <TextInput label='School Name' width='996px'/>           
                            </div>
                            <div className={style.row}>
                                <div className={style.col}>
                                    <TextInput label='School Country' value={'Nigeria'} readonly={true}/>
                                </div>
                                <div className={style.col}>
                                    <Dropdown label="School Location"options={examLocation}/>
                                </div>
                                <div className={style.col}>
                                    <Dropdown label="Preferred Exam Location" options={examLocation}/>
                                </div>
                            </div>
                            <div className={style.row}>
                                <div className={style.col}>
                                    <TextInput label='Name of Principal / Head of School'/>
                                </div>
                                <div className={style.col}>
                                    <TextInput label="Principal's Email Address"/>
                                </div>
                                <div className={style.col}>
                                    <TextInput label="Principal's Phone Number"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.container}>
                        <div className={style.heading}>
                            Student Details
                        </div>
                        <div className={style.updateBtn}>
                            <div className={style.row}>
                                <div className={style.labelText}>How many candidates will you enter for the challenge?</div>
                            </div>
                            <div className={style.updateBtnContainer}>
                                <button type='button' className={style.btn + ' ' +style.minus} onClick={students==1?()=>{}:()=>{setStudents(students-1)}} >-</button>
                                <input className={style.input} type="text" name="" id="" value={students} readOnly/>
                                <button type='button' className={style.btn + ' ' + style.plus} onClick={()=>setStudents(students+1)}>+</button>
                            </div>
                        </div>
                    </div>
                    <div id='student' className={style.students}>
                        {studentCard}
                    </div>    
                </form>
                <div className={style.btnContainer}>
                    <button type='button' className={style.btn} onClick={()=> router.push('/successfulSchool')}>Submit</button>
                </div>
            </div>
        </div>
    )
}