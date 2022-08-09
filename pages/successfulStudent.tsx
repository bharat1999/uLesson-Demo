
import RegistrationTop from "../components/RegistrationTop"
import style from './successful.module.scss'
import RegisterSuccess from "../components/RegisterSuccess"
import { useEffect, useState } from 'react'


interface link {
    heading:string,
    link:string
}

function Link(props:link) {
    return (
        <div className={style.linkContainer}>
            <div className={style.row}>
                <div className={style.heading + ' ' + style.box}>
                    {props.heading}
                </div>
                <div className={style.input}>
                    <a href={props.link}>{props.link}</a>
                </div>
            </div>
        </div>
        
    )
}

export default function SuccessStudent() 
{
    const [modalOpen,setModalOpen] = useState(false)

    return (
        <div className={(modalOpen==true?style.dark:'')}>
            <div className={style.container}>
                <RegistrationTop modalOpen={modalOpen} setOpenModal={setModalOpen} heading='Are you sure you want to go to home page?' subheading='Kindly confirm if you want to go to home page.' btnText='Back To Details'/>
                <RegisterSuccess/>
                <div className={style.data}>
                    <div className={style.subheading}>
                        Please follow the link below to register for your first stage examinations
                    </div>
                    <div className={style.row}>
                    <Link heading='Junior' link='https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb'/> 
                    </div>    
                </div>
            </div>
        </div>
    )
}