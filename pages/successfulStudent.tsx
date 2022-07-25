
import RegistrationTop from "../components/RegistrationTop"
import style from './successful.module.scss'
import RegisterSuccess from "../components/RegisterSuccess"
import { useEffect, useState } from 'react'



export default function SuccessStudent() 
{
    const [modalOpen,setModalOpen] = useState(false)

    return (
        <div className={style.container}>
            <RegistrationTop modalOpen={modalOpen} onChange={val=>setModalOpen(val)} heading='Are you sure you want to go to home page?' subheading='Kindly confirm if you want to go to home page.' btnText='Back To Details'/>
            <RegisterSuccess/>
            <div className={style.data}>
                <div className={style.subheading}>
                    Please follow the link below to register for your first stage examinations
                </div>
                <div className={style.row}>
                    <div className={style.input}>
                        <a href="">https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb</a>
                    </div>
                </div>    
            </div>
        </div>
    )
}