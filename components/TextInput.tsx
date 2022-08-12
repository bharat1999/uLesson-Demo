/* eslint-disable react/display-name */
import { memo, useCallback } from 'react'
import style from  './TextInput.module.scss'


interface text {
    label:string,
    fieldName?:string,
    type:string,
    width?:string,
    value?:string,
    onChange?:any,
    hasError?:boolean,
    errorMessage?:string,
    readonly?:boolean
}



const TextInput = memo(({hasError=false,fieldName='',errorMessage='',type,onChange={},label,width="315px",value='',readonly=false}:text) => {

    const handleChange = useCallback(
        (e:any) => {
            onChange(fieldName,e.target.value)
        },
        [onChange,fieldName]
    )

    return (
        <div className={style.col} style={{width:width}}>
            <label  htmlFor={fieldName} className={style.labelText}>{label}</label>
            <input id='input' className={style.input} type={type} name={fieldName} value={value} onChange={handleChange} readOnly={readonly}/>
            {
                hasError && <p className={style.error}>{errorMessage}</p>
            }
        </div>
    )
})

export default TextInput