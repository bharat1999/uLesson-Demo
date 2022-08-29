
import style from './CategoryCard.module.scss';

interface Card {
    class:string,
    heading:string,
    subjects:Array<string>,
}

export default function SeniorCard(props:Card) 
{
    return (
        <div className={style[props.class]}>
            <div className={style.heading}>
                {props.heading}          
            </div>
            <div className={style.subjects}>
                {
                    props.subjects.map((s,key) => (
                        // eslint-disable-next-line react/jsx-key
                        <div key={key}>{s}</div>
                    ))
                }
            </div>
        </div>
        

    )
}