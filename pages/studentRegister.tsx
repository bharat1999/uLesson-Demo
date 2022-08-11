//disable eslint/display-name

import { memo,useEffect } from "react";
import style from "./studentRegister.module.scss";
import RegistrationRules from "../components/RegistrationRules";
import RegistrationTop from "../components/RegistrationTop";
import StudentRegisterForm from "../components/StudentRegisterForm"
import update from 'immutability-helper'
import { useState,useCallback } from "react";
import * as yup from "yup";
import {date,object} from "yup"
import { parse, isDate } from "date-fns";
import Router,{ useRouter } from "next/router";

function parseDateString(value:Date, originalValue:string) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}

const today = new Date();


const formSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  schoolName:yup.string().required(),
  gender:yup.string().required(),
  gradeGroup:yup.string().required(),
  category:yup.string().required(),
  class:yup.string().required(),
  examLocation:yup.string().required(),
  schoolLocation:yup.string().required(),
  tel:yup.string().required(),
  dob:date().transform(parseDateString).max(today),
  principalName:yup.string().required(),
  principalEmail:yup.string().email().required(),
  principalTel:yup.string().required(),
});

const data = {
  heading: "uLesson Challenge Registration (Student)",
  data: [
    "Student MUST have an accessible uLesson account. Click here to sign up on uLesson.",
    "Fill in School details in fields provided.",
    "Complete your personal details",
    "Please ensure that the mobile number you provide is the same as the contact on your uLesson account. ",
    "Review and submit your details.",
  ],
};



 const StudentRegister = memo(()=> {
const [modalOpen, setModalOpen] = useState(false);
  

  //state for values
  const [values,setValues ] = useState({
    firstName:'',
    lastName:'',
    schoolName:'',
    gender:'',
    gradeGroup:'',
    category:'',
    class:'',
    examLocation:'',
    schoolLocation:'',
    tel:'',
    dob:'',
    schoolCountry:'Nigeria',
    principalName:'',
    principalEmail:'',
    principalTel:''
  })

  // state for erros 
  const [errors,setErrors] = useState({
    firstName:false,
    lastName:false,
    schoolName:false,
    gender:false,
    gradeGroup:false,
    category:false,
    class:false,
    examLocation:false,
    schoolLocation:false,
    tel:false,
    dob:false,
    schoolCountry:false,
    principalName:false,
    principalEmail:false,
    principalTel:false
  })

  const router = useRouter()

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
        router.push('/successfulStudent')
        
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
    <div className={modalOpen == true ? style.dark : ""}>
      <div className={style.mainContainer}>
        <RegistrationTop
          modalOpen={modalOpen}
          setOpenModal={setModalOpen}
          heading="Are you sure you want to cancel your registration?"
          subheading="Kindly confirm if you want to cancel the registration process."
          btnText="Back to Registration"
        />
        <RegistrationRules heading={data.heading} data={data.data} />
        <StudentRegisterForm values={values} errors={errors} onFieldChange={onFieldChange} onSubmit={onSubmit}/>
      </div>
    </div>
  );
})

StudentRegister.displayName='StudentRegister'

export default StudentRegister