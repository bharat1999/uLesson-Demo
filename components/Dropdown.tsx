
import Select from "react-select"
import Option from "react-select/dist/declarations/src/components/Option"
import style from  './Dropdown.module.scss'


interface dropdown {
    label:string,
    options:any,
    isDisabled?:boolean,
    setCategory?:any,
    width?:string,
}



export default function Dropdown({label,options,isDisabled=false,setCategory=undefined,width='315px'}:dropdown)
{

    const customStyles = {
        control: (styles: any) => (
            { ...styles, 
                fontFamily:"'Mulish', sans-serif",
                backgroundColor: "#F9FAFF",
                fontSize:"14px",     
                border: "1px solid #E0E7FF",
                width:width,
                borderRadius:"4px",
                color:"rgba(48, 20, 70, 0.7)",
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
        }
      };

    return (
        <div style={{width:width}} className={style.col}>
            <label htmlFor="Category" className={style.labelText}>{label}</label>
            <Select styles={customStyles}  options={options} isDisabled={isDisabled} onChange={setCategory!=undefined?(e)=>setCategory(e.value):{}}></Select>
        </div>
    )
}