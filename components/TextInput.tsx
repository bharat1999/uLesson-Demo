/* eslint-disable react/display-name */
import { memo, useCallback } from 'react'
import style from  './TextInput.module.scss'
import {useFormContext} from "react-hook-form"


interface text {
    label:string,
    fieldName:string,
    type:string,
    width?:string,
    hasError?:any,
    errorMessage?:any,
    readonly?:boolean,
    defaultValue?:any
}



const TextInput = memo(({hasError=false,fieldName='',errorMessage='',type,label,width="315px",readonly=false,defaultValue=''}:text) => {

    const {register} = useFormContext()
    

    return (
        <div className={style.col} style={{width:width}}>
            <label  htmlFor={fieldName} className={style.labelText}>{label}</label>
            <input {...register(fieldName)} defaultValue={defaultValue} id='input' className={style.input} type={type} name={fieldName}  readOnly={readonly}/>
            {
                hasError && <p className={style.error}>{errorMessage}</p>
            }
        </div>
    )
})

export default TextInput