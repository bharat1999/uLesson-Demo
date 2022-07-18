
import style from './Register.module.scss'

interface card {
    text:string,
    src:StaticImageData,
    route:string
}

import Image from 'next/image'
import student from '../public/img/registerStudent.png'
import school from '../public/img/registerSchool.png'
import { StaticImageData } from 'next/image'
import Router, { useRouter } from 'next/router'

function Card(props:card) 
{
    const router = useRouter()
    return (
        <div className={style.cardContainer}>
            <div className={style.cardInfo}>
                <div className={style.cardText}>
                    {props.text}
                </div>
                <button className={style.btn} onClick={()=> router.push(props.route)}>Register Now</button>
            </div>
            <div className={style.img}>
                <Image src = {props.src}/>
            </div>
        </div>
    )
}


export default function Register() {
    
    return (
        <div className={style.container}>
            <Card text='Register as a Student' src={student} route='/studentRegister'/>
            <Card text='Register as a School' src={school}  route='/schoolRegister'/>
        </div>
    )
}