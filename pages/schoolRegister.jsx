/* eslint-disable react/jsx-key */
import { useCallback,useEffect, useState } from 'react'
import { useForm,useFieldArray,FormProvider } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import style from './schoolRegister.module.scss'
import RegistrationRules from '../components/RegistrationRules'
import RegistrationTop from '../components/RegistrationTop'
import TextInput from '../components/TextInput'
import Dropdown from '../components/Dropdown'
import DateInput from '../components/DateInput'
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
    examLocation:yup.object().shape({
      label:yup.string().required(),
      value:yup.string().required()
    }),
    schoolLocation:yup.object().shape({
      label:yup.string().required(),
      value:yup.string().required()
    }),
    principalName:yup.string().required(),
    principalEmail:yup.string().email().required(),
    principalTel:yup.string().required(),
    students:yup.array().min(1).of(
      yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        gender:yup.object().shape({
          label:yup.string().required(),
          value:yup.string().required()
        }),
        dob:yup.date().required(),
        gradeGroup:yup.object().shape({
          label:yup.string().required(),
          value:yup.string().required()
        }),
        category:yup.object().shape({
          label:yup.string().required(),
          value:yup.string().required()
        }),
        class:yup.object().shape({
          label:yup.string().required(),
          value:yup.string().required()
        }),
        tel:yup.string().required(),
      })
    )
  });

  const examLocation = [
    { value: "lagos", label: "Lagos" },
    { value: "abuja", label: "Abuja" },
  ];

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

export default function SchoolRegister() {
    
    const [modalOpen,setModalOpen] = useState(false)
    const [students,setStudents] = useState(1)
    const [gradeType, setGradeType] = useState("");

   const methods = useForm({
      resolver:yupResolver(formSchema)
    })

    const {control,formState} = methods

    const {errors} = formState
    
    const { fields, append, remove } = useFieldArray({ name: 'students',control });

    useEffect(() => {
      // update field array when ticket number changed
      const newVal = students || 1;
      const oldVal = fields.length;
      if (newVal > oldVal) {
          // append tickets to field array
          for (let i = oldVal; i < newVal; i++) {
              append({ firstName: '', lastName: '',gender:'',dob:'',gradeGroup:'',category:'',class:'',tel:'' });
          }
      } else {
          // remove tickets from field array
          for (let i = oldVal; i > newVal; i--) {
              remove(i - 1);
          }
      }
  }, [append, fields.length, remove, students]);
    
    const router = useRouter()

    // Create handler for form submit event:
    const onSubmit = (data) =>{
      console.log(data)
      router.push('/successfulSchool')
  
  }


    return (
        <div className={(modalOpen==true?style.dark:'')}>
            <div className={style.mainContainer}>
                <RegistrationTop modalOpen={modalOpen} setOpenModal={setModalOpen} heading='Are you sure you want to cancel your registration?' subheading='Kindly confirm if you want to cancel the registration process.' btnText='Back to Registration'/>
                <RegistrationRules heading={data.heading} data={data.data}/>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className={style.container}>
                      <div className={style.heading}>School Details</div>
                      <div className={style.formContainer}>
                        <div className={style.row}>
                          <TextInput label="School Name" fieldName='schoolName' type="text" width="996px" hasError={errors.schoolName} errorMessage={"Please enter school name"}/>
                        </div>
                        <div className={style.row}>
                          <TextInput label="School Country" defaultValue='Nigeria' fieldName='schoolCountry' type='text' readonly={true} hasError={false}/>
                          <Dropdown
                            label="School Location"
                            fieldName='schoolLocation'
                            width="315px"
                            options={examLocation}
                            hasError={errors.schoolLocation}
                            errorMessage="Please enter a valid school location"
                          />
                          <Dropdown
                            label="Exam Location"
                            fieldName='examLocation'
                            width="315px"
                            options={examLocation}
                            hasError={errors.examLocation}
                            errorMessage="Please enter a valid exam location"
                          />
                        </div>
                        <div className={style.row}>
                          <TextInput label="Name of Principal/Head of School" fieldName='principalName' type='text' hasError={errors.principalName} errorMessage="Please enter the name of your principal / head of school"/>
                          <TextInput label="Principal's Email Address" fieldName='principalEmail' type='text'   hasError={errors.principalEmail} errorMessage="Please enter a valid email address"/>
                          <TextInput label="Principal's Phone Number" fieldName='principalTel' type='text'  hasError={errors.principalTel} errorMessage="Please enter a valid phone number"/>
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
                          <input  className={style.input} type="text" value={students} readOnly/>
                          <button type='button' className={style.btn + ' ' + style.plus} onClick={()=>setStudents(students+1)}>+</button>
                        </div>
                      </div>
                    </div>
                    <div id='student' className={style.students}>
                      {fields.map((item,i) => {
                        
                        
                        return (
                          <div className={style.container}>
                          <div className={style.heading}>
                            Student {i+1}
                          </div>
                          <div className={style.formContainer}>
                            <div className={style.row}>
                              <TextInput fieldName={`students.[${i}].firstName`} label='First Name' width='231px' type='text' hasError={errors.students?.[i]?.firstName} errorMessage={"Please enter first name"}/>
                              <TextInput fieldName={`students.[${i}].lastName`} label='Last Name' width='231px' type='text' hasError={errors.students?.[i]?.lastName} errorMessage="Please enter last name"/>
                              <Dropdown label='Gender' fieldName={`students.[${i}].gender`} options={gender} width='231px' hasError={errors.students?.[i]?.gender} errorMessage='Please enter a valid gender'/>
                              <DateInput width='231px' label='Date of Birth' fieldName={`students.[${i}].dob`} hasError={errors.students?.[i]?.dob} errorMessage="Please enter a valid date of birth"/>
                            </div>
                            <div className={style.row}>
                              <Dropdown label="Grade Group" fieldName={`students.[${i}].gradeGroup`} options={gradeGroupOptions} setCategory={setGradeType} width='231px'  hasError={errors.students?.[i]?.gradeGroup} errorMessage="Please enter a valid grade group"/>
                              <Dropdown label="Competition Category" fieldName={`students.[${i}].category`} width='231px' options={gradeType==''?[]:gradeType=='juniorCategory'?juniorCategory:seniorCategory} isDisabled={gradeType==''?true:false}  hasError={errors.students?.[i]?.category} errorMessage="Please enter a valid competition category"/>
                              <Dropdown label="Class" fieldName={`students.[${i}].class`} options={gradeType==''?[]:gradeType=='juniorCategory'?juniorClass:seniorClass} width='231px' isDisabled={gradeType==''?true:false} hasError={errors.students?.[i]?.gradeGroup} errorMessage="Please enter a valid class"/>
                              <TextInput fieldName={`students.[${i}].tel`} label='Registered uLesson  Number' width='231px' type='text' hasError={errors.students?.[i]?.tel} errorMessage="Please enter a valid phone number"/>
                            </div>
                          </div>
                        </div>
                        )
                    })}
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
                </FormProvider>
            </div>
        </div>
    )
}