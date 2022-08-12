/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */

import { memo } from 'react'
import { useState,useEffect } from 'react'
import Dropdown from './Dropdown'
import TextInput from './TextInput'
import StudentRegisterCard from './StudentRegisterCard'
import style from './SchoolRegisterForm.module.scss'

interface form {
    values:any,
    errors:any,
    onFieldChange:any,
    onSubmit:any
}


  
  const examLocation = [
    { value: "lagos", label: "Lagos" },
    { value: "abuja", label: "Abuja" },
  ];
  


const SchoolRegisterForm = memo(({values,errors,onFieldChange,onSubmit}:form) =>  {


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


  return (  
  <form onSubmit={onSubmit} noValidate>
    <div className={style.container}>
        <div className={style.heading}>School Details</div>
        <div className={style.formContainer}>
            <div className={style.row}>
                <TextInput label="School Name" fieldName='schoolName' type="text" width="996px" onChange={onFieldChange} hasError={errors.schoolName} errorMessage={"Please enter school name"} value={values.schoolName}/>
            </div>
            <div className={style.row}>
                <TextInput
                    label="School Country"
                    fieldName='schoolCountry'
                    value={values.schoolCountry}
                    type='text'
                    readonly={true}
                    hasError={false}
                    onChange={onFieldChange}
                />
                <Dropdown
                    label="School Location"
                        fieldName='schoolLocation'
                    width="315px"
                    options={examLocation}
                    onFieldChange={onFieldChange}
                    hasError={errors.schoolLocation}
                    errorMessage="Please enter a valid school location"
                />
                <Dropdown
                    label="Exam Location"
                    fieldName='examLocation'
                    width="315px"
                    options={examLocation}
                    onFieldChange={onFieldChange}
                    hasError={errors.examLocation}
                    errorMessage="Please enter a valid exam location"
                />
            </div>
            <div className={style.row}>
                <TextInput label="Name of Principal/Head of School" fieldName='principalName' type='text' value={values.principalName} onChange={onFieldChange} hasError={errors.principalName} errorMessage="Please enter the name of your principal / head of school"/>
                <TextInput label="Principal's Email Address" fieldName='principalEmail' type='text' value={values.principalEmail} onChange={onFieldChange} hasError={errors.principalEmail} errorMessage="Please enter a valid email address"/>
                <TextInput label="Principal's Phone Number" fieldName='principalTel' type='text' value={values.principalTel} onChange={onFieldChange} hasError={errors.principalTel} errorMessage="Please enter a valid phone number"/>
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
    <div className={style.btnContainer}>
        <button
            type="submit"
            className={style.btn}
        >
            Submit
        </button>
    </div>
  </form>
  )
})

export default SchoolRegisterForm

