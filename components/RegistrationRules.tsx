/* eslint-disable react/jsx-key */

interface rules {
    heading:string,
    data:Array<string>;
}

import style from './RegistrationRules.module.scss'


export default function RegistrationRules(props:rules) {

    return (
        <div className={style.container}>
            <div className={style.heading}>
                {props.heading}
            </div>
            <div className={style.subHeading}>
                Please read all instructions carefully before registering for the uLesson Challenge 
            </div>
            <div className={style.rules}>
                {
                    props.data.map((d)=>(
                        <div className={style.data}>
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z" fill="#EA7052"/>
</svg>

                           <span>{d}</span> 
                        </div>
                    ))
                }
            </div>
        </div>
    )

}