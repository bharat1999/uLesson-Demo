
import style from  './TextInput.module.scss'


interface text {
    label:string,
    width?:string,
    value?:string,
    readonly?:boolean
}



export default function TextInput({label,width="315px",value='',readonly=false}:text)
{
    return (
        <div className={style.col} style={{width:width}}>
            <label  htmlFor={label} className={style.labelText}>{label}</label>
            <input id='input' className={style.input} type="text" name={label.replace(/\s/g,'')} value={value} disabled={readonly}/>
        </div>
    )
}