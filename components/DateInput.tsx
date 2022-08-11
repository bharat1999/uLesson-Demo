
import { useCallback,useState } from "react";
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css";
import style from './DateInput.module.scss'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';



const cal = <svg className={style.cal} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3335 2.00008H14.0002C14.177 2.00008 14.3465 2.07032 14.4716 2.19534C14.5966 2.32037 14.6668 2.48994 14.6668 2.66675V13.3334C14.6668 13.5102 14.5966 13.6798 14.4716 13.8048C14.3465 13.9298 14.177 14.0001 14.0002 14.0001H2.00016C1.82335 14.0001 1.65378 13.9298 1.52876 13.8048C1.40373 13.6798 1.3335 13.5102 1.3335 13.3334V2.66675C1.3335 2.48994 1.40373 2.32037 1.52876 2.19534C1.65378 2.07032 1.82335 2.00008 2.00016 2.00008H4.66683V0.666748H6.00016V2.00008H10.0002V0.666748H11.3335V2.00008ZM10.0002 3.33341H6.00016V4.66675H4.66683V3.33341H2.66683V6.00008H13.3335V3.33341H11.3335V4.66675H10.0002V3.33341ZM13.3335 7.33341H2.66683V12.6667H13.3335V7.33341Z" fill-opacity="0.7"/>
</svg>


interface date {
  label:string,
  fieldName:string,
  width?:string,
  hasError:boolean,
  onFieldChange:any,
  errorMessage:string
}

export default function DateInput({label,fieldName,width="315px",hasError,errorMessage,onFieldChange}:date) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const handleChange = useCallback(
    (e:any) => {
        onFieldChange(fieldName,e)
    },
    [onFieldChange,fieldName]
)


  return (
    <div className={style.col} style={{width:width}}>
            <label  htmlFor={fieldName} className={style.labelText}>{label}</label>
            <div className={style.inputBox}>
              <DatePicker maxDate={new Date("12-31-2014")} showMonthYearDropdown className={style.input}  selected={startDate} placeholderText="dd/mm/yy" onChange={(date) => {setStartDate(date); handleChange(date)}} />
            </div>
            {
                hasError && <p className={style.error}>{errorMessage}</p>
            }
        </div>
  );
};