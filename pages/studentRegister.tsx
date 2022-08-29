
import style from "./studentRegister.module.scss";
import RegistrationRules from "../components/RegistrationRules";
import RegistrationTop from "../components/RegistrationTop";
import { useEffect,useState } from "react";
import * as yup from "yup";
import { useForm,FormProvider} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Router,{ useRouter } from "next/router";
import TextInput from "../components/TextInput";
import Dropdown from "../components/Dropdown";
import DateInput from "../components/DateInput";

const today = new Date();



const formSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  schoolName:yup.string().required(),
  gender:yup.object().shape({
    label:yup.string().required(),
    value:yup.string().required()
  }),
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
  examLocation:yup.object().shape({
    label:yup.string().required(),
    value:yup.string().required()
  }),
  schoolLocation:yup.object().shape({
    label:yup.string().required(),
    value:yup.string().required()
  }),
  tel:yup.string().required(),
  dob:yup.date().required(),
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



 export default function StudentRegister()  {

  const [gradeType, setGradeType] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const methods = useForm({
    resolver:yupResolver(formSchema)
  })

  useEffect(()=>{
      
    if(modalOpen==true)
    {
      console.log("true")
      var input = document.getElementsByTagName('input')
      document.body.style.overflow = "hidden";
      if(input!=null)
      {
        for (var i = 0, len = input.length; i < len; ++i) {
            input[i].disabled = true;
        }
      }
    }
    else
    {
      console.log("false")
      var input = document.getElementsByTagName('input')
      document.body.style.overflow = "unset";
      if(input!=null)
      {
        for (var i = 0, len = input.length; i < len; ++i) {
            input[i].disabled = false;
        }
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    }
},[modalOpen])
  

  const router = useRouter()


  // fucntion to go to page


  // Create handler for form submit event:
  const onSubmit = (data:any) =>{
    console.log('clicked')
    console.log(data)
    router.push('/successfulStudent')
  
  }


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
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={style.container}>
            <div className={style.heading}>Student Details</div>
            <div className={style.formContainer}>
              <div className={style.row}>
                <TextInput label="First Name" fieldName='firstName' type="text" hasError={methods.formState.errors.firstName} errorMessage={"Please enter first name"} />
                <TextInput label="Last Name" fieldName='lastName' type="text" hasError={methods.formState.errors.lastName} errorMessage="Please enter last name"/>  
                <Dropdown label="Gender" fieldName="gender" options={gender} errorMessage="Please enter a valid gender" hasError={methods.formState.errors.gender}/>
              </div>  
          <div className={style.row}>
            <DateInput width="315px" label='Date of Birth' fieldName='dob' hasError={methods.formState.errors.dob} errorMessage="Please enter a valid date of birth"/>
            <Dropdown 
            fieldName='gradeGroup'
              label="Grade Group"
              options={gradeGroupOptions}
              setCategory={setGradeType}
              hasError={methods.formState.errors.gradeGroup}
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
              hasError={methods.formState.errors.category}
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
              hasError={methods.formState.errors.class}
              errorMessage="Please enter a valid class"
            />
            <TextInput label="uLesson Registered Phone Number" type='tel' fieldName='tel'  hasError={methods.formState.errors.tel} errorMessage="Please enter a valid phone number"/>    
            <Dropdown label="Exam Location" fieldName='examLocation' options={examLocation} hasError={methods.formState.errors.examLocation} errorMessage="Please enter a valid exam Location"/>
                
              </div>
            </div>
          </div>
          <div className={style.container}>
            <div className={style.heading}>School Details</div>
            <div className={style.formContainer}>
              <div className={style.row}>
                <TextInput label="School Name" fieldName='schoolName' type='text' width="996px"  hasError={methods.formState.errors.schoolName} errorMessage="Please enter the name of your school" />
              </div>
              <div className={style.row}>
                  <TextInput
                    label="School Country"
                    fieldName='schoolCountry'
                    defaultValue='Nigeria'
                    type='text'
                    readonly={true}
                    width="486px"
                    hasError={false}
                  />
                  <Dropdown
                    label="School Location"
                    fieldName='schoolLocation'
                    width="486px"
                    options={examLocation}
                    hasError={methods.formState.errors.schoolLocation}
                    errorMessage="Please enter a valid school location"
                  />
              </div>
              <div className={style.row}>
                <TextInput label="Name of Principal/Head of School" fieldName='principalName' type='text' hasError={methods.formState.errors.principalName} errorMessage="Please enter the name of your principal / head of school"/>
                <TextInput label="Principal's Email Address" fieldName='principalEmail' type='text' hasError={methods.formState.errors.principalEmail} errorMessage="Please enter a valid email address"/>
                <TextInput label="Principal's Phone Number" fieldName='principalTel' type='text' hasError={methods.formState.errors.principalTel} errorMessage="Please enter a valid phone number"/>
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
    </FormProvider>
      </div>
    </div>
  );
}
