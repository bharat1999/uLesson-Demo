
import RegistrationTop from "../components/RegistrationTop"
import style from './successful.module.scss'
import RegisterSuccess from "../components/RegisterSuccess"

export default function successStudent() 
{
    return (
        <div className={style.container}>
            <RegistrationTop/>
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