
import Select from "react-select"
import Option from "react-select/dist/declarations/src/components/Option"
import style from  './Dropdown.module.scss'
import {useFormContext,Controller} from "react-hook-form"




interface dropdown {
    label:string,
    fieldName:string,
    options:any,
    isDisabled?:boolean,
    setCategory?:any,
    width?:string,
    hasError?:any,
    errorMessage?:string,
}



export default function Dropdown({fieldName,label,options,isDisabled=false,setCategory=undefined,width='315px',hasError=false,errorMessage=""}:dropdown)
{

    const {control} = useFormContext()


    const customStyles = {
        control: (styles: any,state:any) => (
            { ...styles, 
                fontFamily:"'Mulish', sans-serif",
                backgroundColor: "#F9FAFF",
                fontSize:"14px",     
                border: "1px solid #E0E7FF",
                width:width,
                borderRadius:"4px",
                fontWeight:"600",
                "@media only screen and (max-width: 425px)": {
                    ...styles['@media only screen and (max-width: 425px)'],
                    width: "90vw",
                },
            }),
        option: (styles: any) => {
          return {
            ...styles,
            fontFamily:"'Mulish', sans-serif",
            fontWeight:"600",
            fontSize:"14px",
            backgroundColor:"white",
            color:"rgba(48, 20, 70, 0.7)",
          };
        },
      };


    return (
        <div style={{width:width}} className={style.col}>
          <label htmlFor={fieldName} className={style.labelText}>{label}</label>
          <Controller
            name={fieldName}
            control={control}
            render={({field}) => {
              return (
                <Select 
                  styles={customStyles}
                  {...field}
                  onChange={setCategory!=undefined?(e:any)=>{setCategory(e.value);field.onChange(e)}:(e:any)=>{field.onChange(e)}}
                  options={options}
                  isDisabled={isDisabled}
                />
              )
            }}  
          />
          {
            hasError && <p className={style.error}>{errorMessage}</p>
          }
      </div>
    )
}