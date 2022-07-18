
import RegistrationTop from "../components/RegistrationTop"
import style from './successful.module.scss'
import RegisterSuccess from "../components/RegisterSuccess"

interface link {
    heading:string,
    link:string
}

function Link(props:link) {
    return (
        <div className={style.row}>
            <div className={style.heading + ' ' + style.box}>
                {props.heading}
            </div>
            <div className={style.input}>
                <a href={props.link}>{props.link}</a>
            </div>
        </div>
    )
}


export default function successSchool() 
{
    return (
        <div className={style.container}>
            <RegistrationTop/>
            <RegisterSuccess/>
            <div className={style.data}>
                <div className={style.subheading}>
                    Please follow the link below to register each of your students on the uLesson app for their first stage examination.
                </div>
                <div className={style.subheading}>
                Use each students phone number as you have entered on the form to access the app
                </div>
                <Link heading='Junior' link='https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb'/> 
                <Link heading='Senior (Science)' link='https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb'/> 
                <Link heading='Senior (Business)' link='https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb'/> 
                <Link heading='Senior (Humanities)' link='https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb'/> 

            </div>
        </div>
    )
}