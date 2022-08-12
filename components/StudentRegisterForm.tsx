/* eslint-disable react/display-name */

import { memo } from 'react'
import { useState } from 'react'
import Dropdown from './Dropdown'
import TextInput from './TextInput'
import DateInput from './DateInput'
import style from './SchoolRegisterForm.module.scss'

interface form {
    values:any,
    errors:any,
    onFieldChange:any,
    onSubmit:any
}

const gradeGroupOptions = [
    { value: "juniorCategory", label: "Junior Secondary" },
    { value: "seniorCategory", label: "Senior Secondary" },
  ];
  
  const juniorCategory = [{ value: "junior", label: "Junior" }];
  
  const seniorCategory = [
    { value: "science", label: "Science" },
    { value: "humanities", label: "Humanities" },
    { value: "business", label: "Business" },
  ];
  
  const juniorClass = [
    { value: "year7", label: "Year 7 / Grade 7 / JSS1" },
    { value: "year8", label: "Year 8 / Grade 8 / JSS1" },
  ];
  
  const seniorClass = [
    { value: "year10", label: "Grade 10 / SS1" },
    { value: "year11", label: "Grade 11 / SS2" },
    { value: "year12", label: "Grade 11 / SS3 / WAEC" },
  ];
  
  const examLocation = [
    { value: "lagos", label: "Lagos" },
    { value: "abuja", label: "Abuja" },
  ];
  
  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];


const StudentRegisterForm = memo(({values,errors,onFieldChange,onSubmit}:form) =>  {

const [gradeType, setGradeType] = useState("");

  return (  
  <form onSubmit={onSubmit} noValidate>
    <div className={style.container}>
        <div className={style.heading}>Student Details</div>
        <div className={style.formContainer}>
          <div className={style.row}>
            <TextInput label="First Name" fieldName='firstName' type="text" onChange={onFieldChange} hasError={errors.firstName} errorMessage={"Please enter first name"} value={values.firstName}/>
            <TextInput label="Last Name" fieldName='lastName' type="text" onChange={onFieldChange} hasError={errors.lastName} errorMessage="Please enter last name" value={values.lastName}/>  
            <Dropdown
              fieldName='gender'
              label="Gender"
              options={gender}
              onFieldChange={onFieldChange}
              hasError={errors.gender}
              errorMessage="Please enter a valid gender"
            />
          </div>
          <div className={style.row}>
            <DateInput label='Date of Birth' fieldName='dob' hasError={errors.dob} errorMessage="Please enter a valid date of birth" onFieldChange={onFieldChange}/>
            <Dropdown
              fieldName='gradeGroup'
              label="Grade Group"
              options={gradeGroupOptions}
              setCategory={setGradeType}
              onFieldChange={onFieldChange}
              hasError={errors.gradeGroup}
              errorMessage="Please enter a valid grade group"
            />
            <Dropdown
              label="Category"
              fieldName='category'
              options={
                  gradeType == ""
                  ? []
                  : gradeType == "juniorCategory"
                  ? juniorCategory
                  : seniorCategory
              }
              isDisabled={gradeType == "" ? true : false}
              onFieldChange={onFieldChange}
              hasError={errors.category}
              errorMessage="Please enter a valid competition category"
            />
          </div>
          <div className={style.row}>
                    <Dropdown
                        label="Class"
                        fieldName='class'
                        options={
                            gradeType == ""
                            ? []
                            : gradeType == "juniorCategory"
                            ? juniorClass
                            : seniorClass
                        }
                        isDisabled={gradeType == "" ? true : false}
                        onFieldChange={onFieldChange}
                        hasError={errors.class}
                        errorMessage="Please enter a valid class"
                    />
                  <TextInput label="uLesson Registered Phone Number" type='tel' fieldName='tel' onChange={onFieldChange} hasError={errors.tel} errorMessage="Please enter a valid phone number" value={values.tel}/>
                
                  <Dropdown label="Exam Location" fieldName='examLocation' options={examLocation} onFieldChange={onFieldChange} hasError={errors.examLocation} errorMessage="Please enter a valid exam Location"/>
                
              </div>
            </div>
          </div>
          <div className={style.container}>
            <div className={style.heading}>School Details</div>
            <div className={style.formContainer}>
              <div className={style.row}>
                <TextInput label="School Name" fieldName='schoolName' type='text' value={values.schoolName} width="996px" onChange={onFieldChange} hasError={errors.schoolName} errorMessage="Please enter the name of your school" />
              </div>
              <div className={style.row}>
                  <TextInput
                    label="School Country"
                    fieldName='schoolCountry'
                    value={values.schoolCountry}
                    type='text'
                    readonly={true}
                    width="486px"
                    hasError={false}
                    onChange={onFieldChange}
                  />
                  <Dropdown
                    label="School Location"
                    fieldName='schoolLocation'
                    width="486px"
                    options={examLocation}
                    onFieldChange={onFieldChange}
                    hasError={errors.schoolLocation}
                    errorMessage="Please enter a valid school location"
                  />
              </div>
              <div className={style.row}>
                <TextInput label="Name of Principal/Head of School" fieldName='principalName' type='text' value={values.principalName} onChange={onFieldChange} hasError={errors.principalName} errorMessage="Please enter the name of your principal / head of school"/>
                <TextInput label="Principal's Email Address" fieldName='principalEmail' type='text' value={values.principalEmail} onChange={onFieldChange} hasError={errors.principalEmail} errorMessage="Please enter a valid email address"/>
                <TextInput label="Principal's Phone Number" fieldName='principalTel' type='text' value={values.principalTel} onChange={onFieldChange} hasError={errors.principalTel} errorMessage="Please enter a valid phone number"/>
              </div>
            </div>
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

export default StudentRegisterForm

