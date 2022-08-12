
import { useState } from 'react'

import TextInput from './TextInput'
import Dropdown from './Dropdown'

import style from './StudentRegisterCard.module.scss'

interface card {
    number:string
}


const gender = [
    {value:'male',label:'Male'},
    {value:'female',label:'Female'}
]


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


export default function StudentRegisterCard(props:card) {
    const [gradeType,setGradeType] = useState('')
    return (
        <div className={style.container}>
            <div className={style.heading}>
                Student {props.number}
            </div>
            <div className={style.formContainer}>
                <div className={style.row}>
                    <div className={style.col}>
                        <TextInput label='First Name' width='231px' type='text'/>
                    </div>
                    <div className={style.col}>
                        <TextInput label='Last Name' width='231px' type='text'/>
                    </div>
                    <div className={style.col}>
                        <Dropdown label='Gender' options={gender} width='231px'/>
                    </div>
                    <div className={style.col}>
                        <label htmlFor="Date of Birth" className={style.labelText}>Date of Birth</label>
                        <input type="date" name="DOB" className={style.input} />
                    </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.col}>
                            <Dropdown label="Grade Group" options={gradeGroupOptions} setCategory={setGradeType} width='231px'/>
                        </div>
                        <div className={style.col}>
                            <Dropdown label="Competition Category" width='231px' options={gradeType==''?[]:gradeType=='juniorCategory'?juniorCategory:seniorCategory} isDisabled={gradeType==''?true:false}/>
                        </div>
                        <div className={style.col}>
                            <Dropdown label="Class" options={gradeType==''?[]:gradeType=='juniorCategory'?juniorClass:seniorClass} width='231px' isDisabled={gradeType==''?true:false}/>
                        </div>
                        <div className={style.col}>
                            <TextInput label='uLesson Registered Phone Number' width='231px' type='text'/>
                        </div>
                    </div>
                </div>
            </div>
    )
}