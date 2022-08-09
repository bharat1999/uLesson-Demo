
import style from './Rules.module.scss'

const data = ['Schools are allowed to enter as many of their students as they would like to register.',
            'Schools must register their students with the same name and phone number with which the students are registered (or will register) on the uLesson app.',
            'Schools must register their participants before the registration deadline date.',
            'Schools must ensure that their participants register for the exams on the uLesson app before the deadline date.',
            'The decisions of the organizers - uLesson Education Limited, are final in every aspect of the challenge.']

const tick = <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z" fill="black"/>
</svg>


export default function Rules() {
    return (
        <div className={style.container}>
            <div className={style.heading}>
                Rules of Competition
            </div>
            <div className={style.rulesContainer}>
            {
                data.map((d)=>(
                    // eslint-disable-next-line react/jsx-key
                    <div className={style.rule}>
                        <div className={style.row}> 
                            <div className={style.col}>{tick}</div>
                            <div className={style.col}>
                        <span className={style.r}>{d}</span>

                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}