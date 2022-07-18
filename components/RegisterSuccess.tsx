
import style from './RegisterSuccess.module.scss'

import checkMark from '../public/img/checkMark.png'
import Image from 'next/image'

export default function RegisterSuccess()
{
    return (
        <div className={style.container}>
            <div className={style.img}>
                <Image src={checkMark} alt='checkMark'/>
            </div>
            <div className={style.heading}>
                Registration Successful
            </div>
            <div className={style.subheading}>
            You have successfully registered for the uLesson schools challenge
            </div>
        </div>
    )
}
