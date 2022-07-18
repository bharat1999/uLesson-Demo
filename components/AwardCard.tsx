import Image, { StaticImageData } from 'next/image'
import style from './AwardCard.module.scss'



interface Card {
    position:string,
    prize:string,
    src:string|StaticImageData,
    clr:string
}

export default function AwardCard(props:Card) {
    return (
        <div className={style.card}>
            <div className={style.row1}>
                <p className={style[props.clr]}>{props.position}</p>
                <div className={style.imgs}>
                    <Image src={props.src} alt={props.position}/>
                </div>
            </div>
            <div className={style.row2}>
                <p className={style.prize}>{props.prize}</p>
            </div>
        </div>
    )
}