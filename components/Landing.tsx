import style from './Landing.module.scss'
import avater from '../public/img/avatar.png'
import Image from 'next/image'

export default function Landing() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.info}>
                    <div className={style.heading}>
                    Join the uLesson <span className={style.headingSpan}>Schools Challenge</span>
                    </div>
                    <div className={style.subheading}>
                    Represent your school in the uLesson competition and win amazing prizes
                    </div>
                    <a href="#register">
                    <button className={style.btn}>
                        Register Now
                    </button>
                    </a>
                    
                </div>    
                <div className={style.image}>
                    <Image className={style.imgs} src={avater} alt="avatar"/>
                </div>
            </div>
        </div>
    )
}