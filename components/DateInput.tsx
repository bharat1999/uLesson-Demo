
import { useCallback,useState } from "react";
import DatePicker from "react-datepicker"
import {useFormContext,Controller} from "react-hook-form"

import "react-datepicker/dist/react-datepicker.css";
import style from './DateInput.module.scss'
import cal from '../public/img/cal.png'
import Image from 'next/image'




interface date {
  label:string,
  fieldName:string,
  width?:string,
  hasError:any,
  errorMessage:string
}

export default function DateInput({label,fieldName,width="315px",hasError,errorMessage}:date) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const {control} = useFormContext()



  return (
    <div className={style.col} style={{width:width}}>
      <label  htmlFor={fieldName} className={style.labelText}>{label}</label>
      <div className={style.inputBox}>
        <div className={style.cal}>
          <Image src={cal} className={style.cal} alt="" />
        </div>
        <Controller
          name={fieldName}
          control={control}
          render={({field}) => {
            return  (
              <DatePicker 
              {...field}
                maxDate={new Date("12/31/14")} 
                showMonthDropdown
                showYearDropdown
                onFocus={e => e.target.blur()}
                className={style.input}  
                selected={startDate} 
                placeholderText="dd/mm/yy" 
                onChange={(date) => {
                  setStartDate(date)
                  field.onChange(date)
                }} />
            )
          }}
        />  
      </div>
      {
        hasError && <p className={style.error}>{errorMessage}</p>
      }
    </div>
  );
};