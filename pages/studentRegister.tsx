/* eslint-disable react/no-unescaped-entities */

import style from './studentRegister.module.scss'
import RegistrationRules from '../components/RegistrationRules'
import RegistrationTop from '../components/RegistrationTop'
import Dropdown from '../components/Dropdown'
import TextInput from '../components/textInput'
import Router, { useRouter } from 'next/router'
import { useState } from 'react'





const data = {
    heading:'uLesson Challenge Registration (Student)',
    data:['Student MUST have an accessible uLesson account. Click here to sign up on uLesson.',
        'Fill in School details in fields provided.',
        'Complete your personal details',
        'Please ensure that the mobile number you provide is the same as the contact on your uLesson account. ',
        'Review and submit your details.']
}

const gradeGroupOptions = [
    { value: 'juniorCategory', label: 'Junior Secondary' },
    { value: 'seniorCategory', label: 'Senior Secondary' },
  ]

const juniorCategory = [
    {value:'junior',label:'Junior'}
]

const seniorCategory = [
    {value:'science',label:'Science'},
    {value:'humanities',label:'Humanities'},
    {value:'business',label:'Business'}
]

const juniorClass = [
    {value:'year7',label:'Year 7 / Grade 7 / JSS1'},
    {value:'year8',label:'Year 8 / Grade 8 / JSS1'}
]

const seniorClass = [
    {value:'year10',label:'Grade 10 / SS1'},
    {value:'year11',label:'Grade 11 / SS2'},
    {value:'year12',label:'Grade 11 / SS3 / WAEC'}
]

const examLocation = [
    {value:'lagos',label:'Lagos'},
    {value:'abuja',label:'Abuja'}
]

const gender = [
    {value:'male',label:'Male'},
    {value:'female',label:'Female'}
]


export default function StudentRegister() {
    const router = useRouter()
    const [modalOpen,setModalOpen] = useState(false)
    const [gradeType,setGradeType] = useState('')

    return (
        <div className={(modalOpen==true?style.dark:'')}>
        <div className={style.mainContainer}>
            <RegistrationTop modalOpen={modalOpen} setOpenModal={setModalOpen} heading='Are you sure you want to cancel your registration?' subheading='Kindly confirm if you want to cancel the registration process.' btnText='Back to Registration'/>
            <RegistrationRules heading={data.heading} data={data.data}/>
            <div className={style.container}>
                <div className={style.heading}>
                    Student Details
                </div>
                <div className={style.formContainer}>
                    <form action="">
                        <div className={style.row}>
                            <div className={style.col}>
                                <TextInput label="First Name"/>
                            </div>
                            <div className={style.col}>
                                <TextInput label="Last Name"/>
                            </div>
                            <div className={style.col}>
                                <Dropdown label='Gender' options={gender}/>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.col}>
                                <label htmlFor="Date of Birth" className={style.labelText}>Date of Birth</label>
                                <input type="date" name="DOB" className={style.input} />
                            </div>
                            <div className={style.col}>
                                <Dropdown label="Grade Group" options={gradeGroupOptions} setCategory={setGradeType} />
                            </div>
                            <div className={style.col}>
                                <Dropdown label="Category" options={gradeType==''?[]:gradeType=='juniorCategory'?juniorCategory:seniorCategory} isDisabled={gradeType==''?true:false}/>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.col}>
                                <Dropdown label="Class" options={gradeType==''?[]:gradeType=='juniorCategory'?juniorClass:seniorClass} isDisabled={gradeType==''?true:false}/>
                            </div>
                            <div className={style.col}>
                                <TextInput label='uLesson Registered Phone Number'/>
                            </div>
                            <div className={style.col}>
                                <Dropdown label="Exam Location" options={examLocation}/>
                            </div>
                        </div>        
                    </form>
                </div>
            </div>
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
                            <TextInput label='School Country' value={'Nigeria'} readonly={true} width='486px'/>
                        </div>
                        <div className={style.col}>
                            <Dropdown label="School Location" width='486px' options={examLocation}/>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.col}>
                            <TextInput label="Name of Principal/Head of School"/>
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
            <div className={style.btnContainer}>
                <button type='button' className={style.btn} onClick={()=> router.push('/successfulStudent')}>Submit</button>
            </div>
        </div>
        </div>
    )
}