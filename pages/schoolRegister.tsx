/* eslint-disable react/jsx-key */
import { useCallback,useEffect, useState } from 'react'
import style from './schoolRegister.module.scss'
import RegistrationRules from '../components/RegistrationRules'
import RegistrationTop from '../components/RegistrationTop'
import StudentRegisterCard from '../components/StudentRegisterCard'
import update from 'immutability-helper'
import SchoolRegisterForm from '../components/SchoolRegisterForm'
import Router, { useRouter } from 'next/router'
import * as yup from "yup"


const data = {
    heading:'uLesson Challenge Registration (Schools)',
    data:['Identify students to enter for each of the four categories.',
        'Make sure each student  has an existing free or paid uLesson account.',
        'Students who do not have existing uLesson accounts can create for free. (available on Android, iOS, and web).',
        'Fill in School details in fields provided.',
        'Download the .csv template to collate student details',
        'Please ensure that the mobile number provided for each student is the same as the contact they registered on the uLesson app.']
}

const formSchema = yup.object().shape({
    schoolName:yup.string().required(),
    examLocation:yup.string().required(),
    schoolLocation:yup.string().required(),
    principalName:yup.string().required(),
    principalEmail:yup.string().email().required(),
    principalTel:yup.string().required(),
  });


export default function SchoolRegister() {
    const [modalOpen,setModalOpen] = useState(false)
    
    
    const router = useRouter()

    const [values,setValues ] = useState({
        schoolName:'',
        examLocation:'',
        schoolLocation:'',
        schoolCountry:'Nigeria',
        principalName:'',
        principalEmail:'',
        principalTel:''
      })
    
      // state for erros 
      const [errors,setErrors] = useState({

        schoolName:false,
        examLocation:false,
        schoolLocation:false,
        schoolCountry:false,
        principalName:false,
        principalEmail:false,
        principalTel:false
      })
    
    
      // Create handler for input change event:
      const onFieldChange = useCallback((fieldName:any, value:any) => {
        setValues((prevValues) =>
          update(prevValues, {
            [fieldName]: {
              $set: value,
            },
          })
        )
      }, [])
    
      // fucntion to go to page
    
    
      // Create handler for form submit event:
      const onSubmit = useCallback(
        async (event:any) => {
          // Prevent form from submitting:
          event.preventDefault()
          // Check the schema if form is valid:
          const isFormValid = await formSchema.isValid(values, {
            abortEarly: false, // Prevent aborting validation after first error
          })
    
          console.log(values)
    
          if (isFormValid) {
            // If form is valid, continue submission.
            router.push('/successfulSchool')
            
          } 
          else {
            // If form is not valid, check which fields are incorrect:
            formSchema.validate(values, { abortEarly: false }).catch((err) => {
              // Collect all errors in { fieldName: boolean } format:
              const errors = err.inner.reduce((acc: any, error: { path: any; }) => {
                return {
                  ...acc,
                  [error.path]: true,
                }
              }, {})
    
              console.log(errors)
    
              // Update form errors state:
              setErrors((prevErrors) =>
                update(prevErrors, {
                  $set: errors,
                })
              )
            })
          }
        },
        [router, values]
      )


    return (
        <div className={(modalOpen==true?style.dark:'')}>
            <div className={style.mainContainer}>
                <RegistrationTop modalOpen={modalOpen} setOpenModal={setModalOpen} heading='Are you sure you want to cancel your registration?' subheading='Kindly confirm if you want to cancel the registration process.' btnText='Back to Registration'/>
                <RegistrationRules heading={data.heading} data={data.data}/>
                <SchoolRegisterForm values={values} errors={errors} onFieldChange={onFieldChange} onSubmit={onSubmit}/>
            </div>
        </div>
    )
}