import style from './EligibilityData.module.scss'


interface Data {
    heading:string,
    data:string
}

export default function EligibilityData(props:Data) {
    return (
        <div>
            <div className={style.heading}>
                {props.heading}
            </div>
            <div className={style.data}>
                {props.data}
            </div>
        </div>
    )
}