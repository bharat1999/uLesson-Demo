import style from './Eligibility.module.scss'
import EligibilityData from './EligibilityData'

const junior = {
    heading:'Junior',
    data:'Participants for the junior category competition must be under 18 and current students of their schools, either in Year 8/JSS2 or Year 9/JSS3.'
};

const senior = {
    heading:'Senior',
    data:'Participants for the senior category competition must be under 18 and current students of their schools, either in Year 10/SSS1 or Year 11/SSS2.'
}


export default function Eligibility() {
    return (
        <div className={style.container}>
            <div className={style.heading}>
                Eligibility
            </div>
                <div className={style.data}>
                    <EligibilityData heading={senior.heading} data={senior.data}/>
                    <EligibilityData heading={junior.heading} data={junior.data}/>
                </div>
        </div>
    )
}